import { useWindowWidth } from "@react-hook/window-size";

const Video = () => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className={`${
        windowWidth >= 1024
          ? "bg-[#AAC9D1] lg:h-full min-h-[620px]"
          : "bg-video lg:min-h-[620px] h-[80vh] bg-cover object-cover bg-center"
      }`}
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center justify-evenly lg:py-16 h-full w-full">
          <div className="lg:block hidden">
            <img
              src="https://theme.zdassets.com/theme_assets/116868/4458e9e0b357295b9ce46adfa2ed7dfb481faeb1.jpg"
              alt="video"
              className="w-[317px] h-[424px]"
            />
          </div>
          <div className="flex flex-col lg:items-start items-center lg:justify-between h-full ">
            <h1 className="font-semibold text-[44px] mb-5 lg:text-black text-white">
              Video tutorials.
            </h1>
            <span className="pb-7 font-semibold text-[18px] lg:text-black text-white">
              How to videos for the most popular tools
            </span>
            <button className="lg:text-[#AAC9D1] text-white lg:bg-black bg-transparent lg:border-none border-2 border-white px-8 py-2 rounded-sm mt-auto w-full mb-5">
              Watch on Youtube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
