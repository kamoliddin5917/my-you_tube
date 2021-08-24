import "./Error.scss";

import Sidebar from "../../components/Sidebar/Sidebar";

const Error = () => {
  return (
    <div className="error">
      <Sidebar />
      <div className="error__main">ERROR!</div>
    </div>
  );
};

export default Error;
