import { FC } from "react";
import { styled } from "@mui/material";

interface WaymarkNumberTokenProps {
  waymark: 1 | 2 | 3 | 4;
}

interface WaymarkLetterTokenProps {
  waymark: "A" | "B" | "C" | "D";
}

const isNumberToken = (
  p: WaymarkNumberTokenProps | WaymarkLetterTokenProps
): p is WaymarkNumberTokenProps => {
  return typeof p.waymark === "number";
};

const WaymarkToken: FC<WaymarkNumberTokenProps | WaymarkLetterTokenProps> = (
  props
) => {
  const { waymark } = props;

  const StyledToken = styled(`div`)({
    width: "4rem",
    height: "4rem",
    border: "1px solid white",
    borderRadius: isNumberToken(props) ? "100%" : 0,
  });

  return <StyledToken>{waymark}</StyledToken>;
};

export default WaymarkToken;
