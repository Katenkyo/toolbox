import { FC } from "react";
import Jobs from "@assets/jobs";
import { styled, SxProps } from "@mui/material";
import { useDrag } from "react-dnd";

interface JobTokenProps {
  job: keyof typeof Jobs;
  sx?: SxProps;
}

const JobToken: FC<JobTokenProps> = (props) => {
  const { job, sx = {} } = props;

  const [monitor, dragRef, previewRef] = useDrag({
    type: "player",
    item: { id: job },
  });
  const Selected = Jobs[job];

  const StyledToken = styled(Selected)({
    width: "4rem",
    height: "4rem",
  });

  return <StyledToken ref={dragRef} sx={sx} />;
};

export default JobToken;
