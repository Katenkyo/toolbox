import { FC, useContext, useRef } from "react";
import { ToolboxContext } from "@pages/Toolbox/context";
import { DropTargetMonitor, useDrop } from "react-dnd";
import Arenas from "@assets/arenas";

const ArenaDisplay: FC = (props) => {
  const context = useContext(ToolboxContext);
  const containerRef = useRef<HTMLImageElement>(null);
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
      x: dropOriginalOffset.x - hostBounds.x,
      y: dropOriginalOffset.y - hostBounds.y,
    };
    console.log(relativeOffset);

    context.update({ usedTokens: [...context.usedTokens, { type: item.id }] });
  };

  const SelectedArena = Arenas[context.arena];

  return (
    <div ref={dropRef}>
      <SelectedArena ref={containerRef} />
    </div>
  );
};

export default ArenaDisplay;
