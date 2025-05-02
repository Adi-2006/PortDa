import React, { useRef,useEffect } from "react";
import {gsap} from "gsap";

function Skills() {

   const divRefs = useRef([]);
  
    // useEffect(() => {
    //   gsap.fromTo(
    //     divRefs.current,
    //     { opacity: 0, y: 20 },
    //     { opacity: 1, y: 0, duration: 0.7, stagger: 1, ease: "power2.out",  }
    //   );
    // }, []);

  return (
    <div className="dark:bg-zinc-500 pt-4  bg-zinc-300 pb-20 w-screen h-auto min-h-screen relative">
      {/* 80%Box */}
      <div  className="w-10/12 h-auto min-h-screen bg-[#f1ceb1] rounded-2xl dark:text-white dark:bg-[#212c3f] cursor-default mx-auto relative">
        {/* Skill Detilas BOx */}
        <div ref={(element) => (divRefs.current[0] = element)} className="flex flex-col w-full gap-4 items-center justify-center py-4 pb-16  px-8">
          {/* Heading div */}
          <div ref={(element) => (divRefs.current[1] = element)} className=" group flex flex-col items-center gap-4">
            <h2 className="mobile:text-4xl text-center font-extrabold text-2xl select-none group-hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out group-hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
              Skills 
            </h2>
            {/* green design */}
            <div className="bg-green-500 w-12 h-1 group-hover:bg-orange-500  active:bg-orange-500"></div>
          </div>
          {/* Contents  */}
          <div ref={(element) => (divRefs.current[2] = element)}  className=" gridCont grid rounded-2xl smobile:w-[90%]  xll:grid-cols-3  lg:grid-cols-[repeat(2,minmax(0,1fr))] grid-cols-[repeat(1,minmax(0,1fr))] pb-8 px-4  b items-start lg:gap-4 gap-6 border-t-2 shadow-[0_35px_35px_rgba(0,0,0,0.8)]">
          



    
          



        
      
     
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
