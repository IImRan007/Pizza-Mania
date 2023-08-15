import Loading from "../components/assets/loading.gif";

const Spinner = () => {
  return (
    <div className="mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={Loading}
        alt="Loading..."
      />
    </div>
  );
};
export default Spinner;
