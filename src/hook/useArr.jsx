import { useContext } from "react";
import { arrContext } from "../context/Context";

const useArr = () => {
  const { arr, setArr } = useContext(arrContext);
  return [arr, setArr];
};

export default useArr;
