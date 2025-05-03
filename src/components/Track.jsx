import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import ColliderBox from "./ColliderBox";
import Ramp from "./Ramp";

const Track = () => {
  const result = useLoader(GLTFLoader, "models/track.glb").scene;

  return (
    <>
      <primitive object={result} />
      
     

      <Ramp />
    </>
  );
};

export default Track;
