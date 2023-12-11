import React from "react";

const ReviewCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div>
        <div className=" flex flex-row justify-center">
        <img className=" rounded-full w-1/2" src={props.img} alt="img" />
      </div>
        {/* 
        <p isi keterangan</p>
         */}
      </div>
         <h3 className="font-semibold text-lg text-center my-5 text-gray-500">
          {props.title}
        </h3>
      
    </div>
  );
};

export default ReviewCard;
