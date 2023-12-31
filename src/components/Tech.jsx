import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
const BallCanvas = React.lazy(() => import("./canvas/Ball"));

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} name={technology.name} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
