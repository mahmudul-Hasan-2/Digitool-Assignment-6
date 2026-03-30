import React from "react";
import { TbAlertTriangleFilled } from "react-icons/tb";

const ErrorMessage = () => {
  return (
    <div className="p-10 flex items-center justify-center flex-col border border-gray-300 rounded-2xl space-y-2">
      <TbAlertTriangleFilled size={120} className="text-yellow-500" />
      <p className="text-xs sm:text-[14px]">Your selection is empty!</p>
      <h1 className="text-lg sm:text-3xl font-bold">
        Pick what's best for you
      </h1>
    </div>
  );
};

export default ErrorMessage;
