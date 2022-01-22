import { FC } from "react";
import Jobs from "@assets/jobs";
import { styled } from "@mui/material";

interface JobTokenProps {
  job: keyof typeof Jobs;
}

const JobToken: FC<JobTokenProps> = (props) => {
  const { job } = props;

  const Selected = Jobs[job];

  const StyledToken = styled(Selected)({
    width: "4rem",
    height: "4rem",
  });

  return <StyledToken />;
};

export default JobToken;
