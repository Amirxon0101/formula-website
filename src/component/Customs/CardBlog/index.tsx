import React from "react";
import Rectangle from "../../../assets/imgs/Rectangle.png";
import Rectangle2 from "../../../assets/imgs/Rectangle2.png";
import Next from "../../../assets/icons/arrow-right.svg";
interface propsType {
  row?: Boolean;
}
const CardBlog: React.FC<propsType> = ({ row }) => {
  return row ? (
    <div className="flex w-[605px]">
      <div
        style={{
          background: `url(${Rectangle}) lightgray 50% / cover no-repeat`,
        }}
        className={`w-[240px] h-[240px] rounded-tl-2xl rounded-bl-2xl `}
      ></div>
      <div className="flex w-[365px] h-[240px] flex-col gap-[10px] p-[20px] bg-[#F6F6F6] rounded-tr-2xl rounded-br-2xl">
        <p className="w-[290px] text-[#161616] text-[16px] font-[600] overflow-hidden  overflow-ellipsis">
          Xalqaro IT Sertifikati uchun Kompensatsiya
        </p>
        <p
          className="text-[#161616] text-[14px]
         h-[100px] leading-[20px] font-[400] opacity-80 overflow-hidden  overflow-ellipsis"
        >
          14 yoshdan 30 yoshgacha bo‘lgan fuqarolar my.gov.uz orqali ariza
          topshirib, xalqaro IT sertifikat yoki o‘qishga sarflangan
          harajatlarning 50%ni qoplatib olishlari mumkin.
        </p>
        <div className="w-fit mt-[10px] cursor-pointer flex gap-[10px] px-[12px] py-[7px] bg-[#1616161A] bg-opacity-10 rounded-[8px]">
          <p className="text-[#161616] text-[14px] font-[400]">Batafsil</p>
          <img src={Next} alt="Next" />
        </div>
        {/* display: flex; padding: 7px 12px; align-items: center; gap: 10px; */}
        {/* border-radius: 8px; background: rgba(22, 22, 22, 0.10); */}
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-[298px] ">
      <div
        style={{
          background: `url(${Rectangle2}) lightgray 0% / cover no-repeat`,
          borderRadius: "16px 16px 0 0",
        }}
        className={`w-[298px] h-[298px]  `}
      ></div>
      <div className="flex w-full h-[248px] flex-col gap-[10px] p-[20px] bg-[#F6F6F6]   rounded-br-[16px] rounded-bl-[16px]">
        <p className="w-[298px] text-[#161616] text-[16px] font-[600] overflow-hidden  overflow-ellipsis">
          Xalqaro IT Sertifikati uchun Kompensatsiya
        </p>
        <p
          className="text-[#161616] text-[14px]
         h-[100px] leading-[20px] font-[400] opacity-80 overflow-hidden  overflow-ellipsis"
        >
          14 yoshdan 30 yoshgacha bo‘lgan fuqarolar my.gov.uz orqali ariza
          topshirib, xalqaro IT sertifikat yoki o‘qishga sarflangan
          harajatlarning 50%ni qoplatib olishlari mumkin.
        </p>
        <div className="w-fit mt-[10px] cursor-pointer flex gap-[10px] px-[12px] py-[7px] bg-[#1616161A] bg-opacity-10 rounded-[8px]">
          <p className="text-[#161616] text-[14px] font-[400]">Batafsil</p>
          <img src={Next} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
