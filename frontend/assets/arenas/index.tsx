import { forwardRef, ImgHTMLAttributes } from "react";
import { styled } from "@mui/material";

type ArenaImageProps = React.DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const StyledImg = styled("img")({
  display: "block",
  maxHeight: "100%",
  maxWidth: "100%",
  width: "auto",
  height: "auto",
  objectFit: "scale-down",
});

const build = (image: any) =>
  forwardRef<HTMLImageElement>((props: ArenaImageProps, ref) => (
    <StyledImg src={image} {...props} ref={ref} />
  ));

import p1 from "./P1.jpg";
import p1_2 from "./P1-2.jpg";
import p2 from "./P2.jpg";
import p3 from "./P3.jpg";
import p4 from "./P4.jpg";
const Arenas = {
  P1: build(p1),
  P1_2: build(p1_2),
  P2: build(p2),
  P3: build(p3),
  P4: build(p4),
};

export default Arenas;
export const P1 = Arenas.P1;
export const P1_2 = Arenas.P1_2;
export const P2 = Arenas.P2;
export const P3 = Arenas.P3;
export const P4 = Arenas.P4;
