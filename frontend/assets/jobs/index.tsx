import { styled } from "@mui/material";
import { forwardRef, ImgHTMLAttributes } from "react";

type ArenaImageProps = React.DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const StyledImg = styled("img")({
  maxHeight: "100%",
  maxWidth: "100%",
  borderRadius: "100%",
});

const build = (image: any) =>
  forwardRef<HTMLImageElement>((props: ArenaImageProps, ref) => (
    <StyledImg src={image} {...props} ref={ref} />
  ));

import ast from "./AST.png";
import blm from "./BLM.png";
import brd from "./BRD.png";
import dnc from "./DNC.png";
import drg from "./DRG.png";
import drk from "./DRK.png";
import gnb from "./GNB.png";
import mch from "./MCH.png";
import mnk from "./MNK.png";
import nin from "./NIN.png";
import pld from "./PLD.png";
import rdm from "./RDM.png";
import rpr from "./RPR.png";
import sam from "./SAM.png";
import sch from "./SCH.png";
import sge from "./SGE.png";
import smn from "./SMN.png";
import war from "./WAR.png";
import whm from "./WHM.png";

const Jobs = {
  AST: build(ast),
  BLM: build(blm),
  BRD: build(brd),
  DNC: build(dnc),
  DRG: build(drg),
  DRK: build(drk),
  GNB: build(gnb),
  MCH: build(mch),
  MNK: build(mnk),
  NIN: build(nin),
  PLD: build(pld),
  RDM: build(rdm),
  RPR: build(rpr),
  SAM: build(sam),
  SCH: build(sch),
  SGE: build(sge),
  SMN: build(smn),
  WAR: build(war),
  WHM: build(whm),
};

export default Jobs;
