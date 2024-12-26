import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full pt-[20vh] px-[2vw]">
      <h1 className="text-[16.2vw] leading-[14vw] uppercase letter tracking-[-8px]  font-[Futura Now Headline] font-[1000]">
        Change
        <br /> The Course
      </h1>
      <div className="videoContainer h-[100vh] w-full mt-[1vw] bg-gray-500">
        <video
          className="h-[100%] w-[100%] object-cover"
          autoPlay
          loop
          muted
          src={"video.mp4"}
        ></video>
      </div>
    </div>
  );
};

export default HomePage;
