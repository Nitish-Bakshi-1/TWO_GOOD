import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const HomePage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const videoContainerRef = useRef(null);
  const cursorRef = useRef(null);
  const hRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !hRef.current.includes(el)) {
      hRef.current.push(el);
    }
  };

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
        duration: 0.3,
      });
    });
    videoContainerRef.current.addEventListener("mouseleave", function (e) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
      });
    });
  }, []);
  useEffect(() => {
    gsap.fromTo(
      hRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        duration: 0.6,
        opacity: 1,
        ease: "power3.out",
        delay: 0.3,
        stagger: 0.2,
      }
    );
  }, []);
  return (
    <div className=" min-h-screen w-full pt-[12rem] px-8">
      <h1
        ref={addToRefs}
        className="text-[16vw] opacity-1   leading-[14vw] uppercase tracking-tight font-[1000]"
      >
        Change
      </h1>
      <h1
        ref={addToRefs}
        className="text-[16vw] opacity-1   leading-[14vw] uppercase tracking-tight font-[1000]"
      >
        {" "}
        The Course
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
