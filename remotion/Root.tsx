import { Composition } from "remotion";
import { AcademyPromo } from "./AcademyPromo";

export const RemotionRoot = () => (
  <Composition
    id="AcademiaPromo"
    component={AcademyPromo}
    durationInFrames={450}
    fps={30}
    width={1080}
    height={1920}
  />
);
