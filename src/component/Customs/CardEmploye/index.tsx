import React from "react";
import Doe from "../../../assets/icons/doe.svg";
import Star from "../../../assets/icons/star-active.svg";
import StarD from "../../../assets/icons/star-disactive.svg";

const CardEmploye: React.FC = () => {
  return (
    <div
      className="flex w-full max-w-[605px] h-[262px] z-10 rounded-[16px] p-[30px] flex-col
     max-[800px]:gap-[10px] gap-[25px] bg-[#F6F6F6] max-[800px]:mr-[10px]"
    >
      <div className="w-full flex justify-between max-[800px]:flex-col max-[800px]:gap-[10px]">
        <div className="flex gap-[10px]">
          <img
            src={Doe}
            alt=""
            width={52}
            height={52}
            className="object-cover"
          />
          <div className="flex flex-col gap-[6px] justify-center">
            <p className="text-[#161616] text-[20px] font-[600]">John Doe</p>
            <p className="text-[#161616] text-[14px] font-[500]">
              Director - Fintech
            </p>
          </div>
        </div>
        <div className="flex gap-[3px] items-center">
          <img src={Star} width={24} height={24} />
          <img src={Star} width={24} height={24} />
          <img src={Star} width={24} height={24} />
          <img src={Star} width={24} height={24} />
          <img src={StarD} width={24} height={24} />
        </div>
      </div>
      <p className="text-[#161616] text-[16px] font-[400] leading-[26px] h-[130px] max-[800px]:h-[120px] overflow-hidden  overflow-ellipsis">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
    </div>
  );
};

export default CardEmploye;
