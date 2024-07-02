

const Spinner = () => {
  return (
    <div className="spinner-wrapper col-span-9 h-screen flex justify-center items-center">
      <div className="spinner w-16 h-16 border-4 border-gray-100 rounded-full">
        <div className="spin border-t-4 w-full h-full rotate-360 animate-spin transition-transform border-blue-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Spinner;
