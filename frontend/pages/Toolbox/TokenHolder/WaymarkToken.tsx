import { FC } from "react";
import { styled, SxProps } from "@mui/material";
import { useDrag } from "react-dnd";

import waymark1 from "@assets/waymarks/waymark1.png";
import waymark2 from "@assets/waymarks/waymark2.png";
import waymark3 from "@assets/waymarks/waymark3.png";
import waymark4 from "@assets/waymarks/waymark4.png";
import waymarkA from "@assets/waymarks/waymarkA.png";
import waymarkB from "@assets/waymarks/waymarkB.png";
import waymarkC from "@assets/waymarks/waymarkC.png";
import waymarkD from "@assets/waymarks/waymarkD.png";

export type NumberWaymark = 1 | 2 | 3 | 4;
export type LetterWaymark = "A" | "B" | "C" | "D";

interface WaymarkTokenProps {
  sx?: SxProps;
}

interface WaymarkNumberTokenProps extends WaymarkTokenProps {
  waymark: NumberWaymark;
}

interface WaymarkLetterTokenProps extends WaymarkTokenProps {
  waymark: LetterWaymark;
}

const isNumberToken = (
  p: WaymarkNumberTokenProps | WaymarkLetterTokenProps
): p is WaymarkNumberTokenProps => {
  return typeof p.waymark === "number";
};

const getWaymark = (p: WaymarkNumberTokenProps | WaymarkLetterTokenProps) => {
  switch (p.waymark) {
    case 1:
      return waymark1;
    case 2:
      return waymark2;
    case 3:
      return waymark3;
    case 4:
      return waymark4;
    case "A":
      return waymarkA;
    case "B":
      return waymarkB;
    case "C":
      return waymarkC;
    case "D":
      return waymarkD;
  }
};

const getColor = (p: WaymarkNumberTokenProps | WaymarkLetterTokenProps) => {
  switch (p.waymark) {
    case 1:
    case "A":
      return "#f35387";
    case 2:
    case "B":
      return "#efed86";
    case 3:
    case "C":
      return "#84c5ff";
    case 4:
    case "D":
      return "#e87ff6";
  }
};

const WaymarkToken: FC<WaymarkNumberTokenProps | WaymarkLetterTokenProps> = (
  props
) => {
  const { waymark, sx = {} } = props;

  const [monitor, dragRef, previewRef] = useDrag({
    type: "*",
    item: { id: waymark },
  });

  const StyledToken = styled(`div`)({
    width: "4rem",
    height: "4rem",
    border: `2px dashed ${getColor(props)}`,
    borderRadius: isNumberToken(props) ? "100%" : 0,
    backgroundImage: `url(${getWaymark(props)})`,
    backgroundColor: "transparent",
    backgroundSize: "contain",
  });

  return <StyledToken ref={dragRef} sx={sx} />;
};

export default WaymarkToken;
