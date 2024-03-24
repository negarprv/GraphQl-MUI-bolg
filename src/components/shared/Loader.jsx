import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <TailSpin height="100" width="100" color="gray" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
