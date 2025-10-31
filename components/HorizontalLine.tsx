const HorizontalLine = () => {
  return (
    <div className="relative w-[80%] my-6 flex justify-center">
      <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full opacity-70 animate-pulse" />
      <div className="absolute w-16 h-[4px] bg-blue-500 rounded-full blur-sm animate-pulse"></div>
    </div>
  );
};

export default HorizontalLine;

