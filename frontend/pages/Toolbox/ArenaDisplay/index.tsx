import { FC, useContext, useRef } from "react";
import { ToolboxContext } from "@pages/Toolbox/context";
import { DropTargetMonitor, useDrop } from "react-dnd";
import Arenas from "@assets/arenas";
import WaymarkToken, {
  LetterWaymark,
  NumberWaymark,
} from "@pages/Toolbox/TokenHolder/WaymarkToken";
import { styled } from "@mui/material";

const ArenaDisplay: FC = (props) => {
  const context = useContext(ToolboxContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const [monitor, dropRef] = useDrop({
    accept: ["*"],
    drop(_item, monitor) {
      onDrop(_item, monitor);
      return undefined;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      draggingColor: monitor.getItemType(),
    }),
  });

  const onDrop = (item: any, monitor: DropTargetMonitor) => {
    const hostBounds = containerRef.current?.getBoundingClientRect();
    const dropOriginalOffset = monitor.getClientOffset();
    if (typeof hostBounds === "undefined" || dropOriginalOffset === null)
      return;

    const relativeOffset = {
      x: (dropOriginalOffset.x - hostBounds.x) / hostBounds.width,
      y: (dropOriginalOffset.y - hostBounds.y) / hostBounds.height,
    };

    console.log(hostBounds);

    context.update({
      usedTokens: [
        ...context.usedTokens.filter((x) => x.type !== item.id),
        { type: item.id, position: { ...relativeOffset } },
      ],
    });
  };

  const Arena = styled("div")({
    backgroundImage: `url(${Arenas[context.arena]})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    transform: "translate(0)",
  });

  return (
    <div
      ref={dropRef}
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        width: "100%",
        height: "100%",
      }}
    >
      <Arena ref={containerRef}>
        {context.usedTokens.map((waymark) => (
          <WaymarkToken
            waymark={waymark.type}
            sx={{
              position: "absolute",
              top: `${waymark.position.y * 100}%`,
              left: `${waymark.position.x * 100}%`,
              transform: "translateX(-50%) translateY(-50%)",
            }}
          />
        ))}
      </Arena>
    </div>
  );
};

export default ArenaDisplay;
