import { FC, useContext, useRef } from "react";
import { ToolboxContext } from "@pages/Toolbox/context";
import { DropTargetMonitor, useDrop } from "react-dnd";
import Arenas from "@assets/arenas";
import WaymarkToken from "@pages/Toolbox/TokenHolder/WaymarkToken";
import { styled } from "@mui/material";
import JobToken from "../TokenHolder/JobToken";

const ArenaDisplay: FC = (props) => {
  const context = useContext(ToolboxContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const [monitor, dropRef] = useDrop({
    accept: ["player", "waymark"],
    drop(_item, monitor) {
      onDrop(_item, monitor);
      return undefined;
    },
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

    if (monitor.getItemType() === "waymark")
      context.dispatch({
        type: "waymarks",
        data: [
          ...context.waymarks.filter((x) => x.type !== item.id),
          { type: item.id, offset: { ...relativeOffset } },
        ],
      });
    else
      context.dispatch({
        type: "players",
        data: [
          ...context.players.filter((x) => x.type !== item.id),
          { type: item.id, offset: { ...relativeOffset } },
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
        {context.waymarks.map((waymark) => (
          <WaymarkToken
            waymark={waymark.type}
            sx={{
              position: "absolute",
              top: `${waymark.offset.y * 100}%`,
              left: `${waymark.offset.x * 100}%`,
              transform: "translateX(-50%) translateY(-50%)",
            }}
          />
        ))}
        {context.players.map((player) => (
          <JobToken
            job={player.type}
            sx={{
              position: "absolute",
              top: `${player.offset.y * 100}%`,
              left: `${player.offset.x * 100}%`,
              transform: "translateX(-50%) translateY(-50%)",
            }}
          />
        ))}
      </Arena>
    </div>
  );
};

export default ArenaDisplay;
