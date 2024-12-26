import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const HomePage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const videoContainerRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(function () {
    const handleMovement = (e) => {
      const rect = videoContainerRef.current.getBoundingClientRect();

      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    videoContainerRef.current.addEventListener("mousemove", handleMovement);
  }, []);
  useEffect(() => {
    videoContainerRef.current.addEventListener("mouseenter", function (e) {
      gsap.to(cursorRef.current, {
        opacity: 1,
        scale: 1,
      });
    });
    videoContainerRef.current.addEventListener("mouseleave", function (e) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        scale: 0,
      });
    });
  }, []);
  return (
    <div className="min-h-screen w-full pt-[12rem]    px-8">
      <h1 className="text-[16vw] leading-[14vw] uppercase tracking-tight font-[1000]">
        Change
        <br /> The Course
      </h1>
      <div
        ref={videoContainerRef}
        className="relative h-screen w-full mt-4 bg-gray-500"
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            position: "absolute",
          }}
          ref={cursorRef}
          className="py-7 px-4  flex justify-center items-center opacity-0 scale-0 bg-black text-white text-2xl uppercase rounded-full font-bold"
        >
          PLAY
        </div>
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          src={"video.mp4"}
        />
      </div>
    </div>
  );
};

export default HomePage;
