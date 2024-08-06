import React from "react";
import Arrow from "../../../assets/icons/arrow-right-top.svg";

interface propsCard {
  title?: String;
  desc?: String;
  step?: number;
}
const CardOpportunity: React.FC<propsCard> = (props: propsCard) => {
  return (
    <div className="w-full max-w-[625px] min-h-[250px] rounded-[16px] bg-[#F6F6F6] p-[30px] relative cursor-pointer max-[1300px]:max-w-[358px]">
      <img
        src={Arrow}
        alt=""
        width={42}
        height={42}
        className="absolute top-[10px] right-[10px]"
      />
      <div className="flex flex-col gap-[10px]">
        <p className="text-[#161616] text-[24px] font-[600] leading-[36px] max-[1300px]:text-[18px]">
          {props.title || "Yoshlar uchun imkoniyatlar"}
        </p>
        <p
          className="text-[#161616] leading-[26px] 
        w-[90%] h-[200px] text-[16px] font-[400] opacity-80 overflow-hidden  overflow-ellipsis max-[1300px]:text-[14px]"
        >
          {props.desc ||
            "Axborot texnologiyalari sohasida O`zbekiston yoshlari uchun yaratilgan imkoniyatlar."}
        </p>
      </div>
      <p className="text-[#161616] text-[100px] font-[700] uppercase text-center opacity-10 absolute bottom-0 right-[20px]">
        {props.step || 5}
      </p>
    </div>
  );
};

export default CardOpportunity;
