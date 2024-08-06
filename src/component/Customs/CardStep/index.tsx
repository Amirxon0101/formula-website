import React from "react";

interface propsCard {
  title?: String;
  desc?: String;
  step?: number;
}
const CardStep: React.FC<propsCard> = (props: propsCard) => {
  return (
    <div className="w-[625px] h-[300px] rounded-[16px] bg-[#F6F6F6] p-[30px] relative cursor-pointer">
      <div className="flex flex-col gap-[10px]">
        <p className="text-[#161616] text-[24px] font-[600] leading-[36px]">
          {props.title || "Yoshlar uchun imkoniyatlar"}
        </p>
        <p className="text-[#161616] leading-[26px] w-[90%] h-[200px] text-[16px] font-[400] opacity-80 overflow-hidden  overflow-ellipsis">
          {props.desc ||
            "Axborot texnologiyalari sohasida O`zbekiston yoshlari uchun yaratilgan imkoniyatlar."}
        </p>
      </div>
      <p className="text-[#161616] text-[60px] font-[700] uppercase text-center opacity-10 absolute bottom-0 right-[20px]">
        {props.step || 2}
      </p>
    </div>
  );
};

export default CardStep;
