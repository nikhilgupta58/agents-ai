import Spinner from "./Spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center justify-center flex flex-col items-center gap-3">
        <Spinner />
        <p className="text-lg font-semibold text-secondary">
          We are getting the data, please wait...
        </p>
      </div>
    </div>
  );
}
