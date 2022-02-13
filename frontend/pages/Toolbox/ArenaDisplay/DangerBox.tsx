import { Box, SxProps } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { DangerZone } from "@pages/Toolbox/context";

interface DangerBox {
  danger: DangerZone;
}

const DangerBox: React.FC<DangerBox> = (props) => {
  const { danger } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [sx, setSx] = useState<SxProps>({
    position: "absolute",
    width: danger.size.width,
    height: danger.size.height,
    backgroundColor: "#F00",
    opacity: danger.opacity,
    top: `${danger.offset.y * 100}%`,
    left: `${danger.offset.x * 100}%`,
    borderRadius: danger.shape === "circular" ? "50%" : 0,
    zIndex: -1,
    transform:
      danger.anchorMode === "center" ? "translateX(-50%) translateY(-50%)" : "",
  });

  const computeSizes = () => {
    if (danger.shape === "circular" && ref.current !== null) {
      const { width } = ref.current.getBoundingClientRect();
      setSx({ ...sx, height: width });
    }
  };

  useEffect(() => {
    addEventListener("resize", computeSizes);
    return () => removeEventListener("resize", computeSizes);
  }, []);

  useEffect(() => {
    computeSizes();
  }, [ref.current]);

  return <Box key={danger.id} ref={ref} sx={sx} />;
};

export default DangerBox;
