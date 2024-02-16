import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <>
      <div className="max-w-xs min-w-[150px]">
        <div className="h-full bg-slate-900">
          <div className="p-0 w-100 relative">
            <Image
              src="https://design4users.com/wp-content/uploads/2019/09/education-app-dashboard-design-1024x768.png"
              width={1000}
              height={1000}
              className="w-100 h-auto sepia-0"
              alt="Demo"
            />
            <div className="w-full h-full transition backdrop-blur-[1px] bg-gradient-to-b from-slate-800/10 to-slate-800 absolute bottom-0"></div>
          </div>
          <div className="flex items-center p-3 py-7 z-20 bg-slate-800">
            <h2 className="text-lg font-medium ">
              Title here and there
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
