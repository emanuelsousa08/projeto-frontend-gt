const IconDestaque = ({ title, img }) => {
  return (
    <>
    <div className="flex flex-col items-center text-center group w-20">
      <div className="realtive flex justify-center items-center h-20 w-20 rounded-full bg-white mb-2 p-4">
        <img src={img} className="h-10 w-10 icons-collection" />
      </div>
      <h5 className="text-zinc-700 text-sm font-bold font-['Inter'] leading-snug tracking-wide">{title}</h5>
      </div>
    </>
  );
};

export default IconDestaque;
