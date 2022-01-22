import { FC, useContext } from "react";
import Jobs from "@assets/jobs";
import JobToken from "./JobToken";
import WaymarkToken, { NumberWaymark, LetterWaymark } from "./WaymarkToken";
import { ToolboxContext } from "@pages/Toolbox/context";

const TokenHolder: FC = (props) => {
  const context = useContext(ToolboxContext);

  const listKeys = () => {
    const keys = Object.keys(Jobs) as (keyof typeof Jobs)[];
    return keys;
  };

  const waymarks = (
    [1, 2, 3, 4, "A", "B", "C", "D"] as (NumberWaymark | LetterWaymark)[]
  ).filter((w) => !context.waymarks.some((t) => t.type === w));

  return (
    <>
      {listKeys()
        .filter((job) => !context.players.some((p) => p.type === job))
        .map((key) => {
          return <JobToken job={key} />;
        })}
      {waymarks.map((waymark) => (
        <WaymarkToken key={waymark} waymark={waymark} />
      ))}
    </>
  );
};

export default TokenHolder;
