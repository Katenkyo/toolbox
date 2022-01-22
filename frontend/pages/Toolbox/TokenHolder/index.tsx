import { FC, useContext } from "react";
import Jobs from "@assets/jobs";
import JobToken from "./JobToken";
import WaymarkToken from "./WaymarkToken";

const TokenHolder: FC = (props) => {
  const listKeys = () => {
    const keys = Object.keys(Jobs) as (keyof typeof Jobs)[];
    return keys;
  };
  return (
    <>
      {listKeys().map((key) => {
        return <JobToken job={key} />;
      })}
      <WaymarkToken waymark={1} />
      <WaymarkToken waymark={"A"} />
    </>
  );
};

export default TokenHolder;
