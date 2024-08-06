import React from "react";
import Next from "../../assets/icons/arrow-right.svg";
import Apps from "../../assets/icons/apps.svg";
import Sitting from "../../assets/imgs/boy sitting in wheelchair.png";
import Xotin from "../../assets/imgs/Businesswoman is satisfied with business statistics.png";
import Young from "../../assets/imgs/young woman sitting near young man standing.png";
import Book from "../../assets/imgs/graduation cap lying on pile of books.png";
import Old from "../../assets/imgs/old businessman in glasses standing giving thumbs up.png";
import { useNavigate } from "react-router-dom";

const Imkoniyat: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full max-w-[1280px] flex gap-[20px]">
      <div
        onClick={() => navigate("/barcha-imkoniyatlar")}
        className="w-[298px] h-[155px] border border-solid cursor-pointer p-[20px] relative group
             border-[#161616] rounded-[12px] border-opacity-15 hover:border-[#F58634]"
      >
        <div className="flex gap-[10px] items-center mb-[15px] ">
          <img src={Apps} alt="" className="w-[24px] h-[24px]" />
          <p className="text-[#161616] text-[16px] font-[600] ">
            Barcha imkoniyatlar
          </p>
        </div>
        <p className="text-[#161616] text-[14px] font-[500] opacity-70">
          It is a long established fact that a reader will be distracted by.
        </p>
        <img
          src={Next}
          alt=""
          className="w-[24px] h-[24px] absolute bottom-[20px] right-[20px] group-hover:right-[10px] transition-all duration-200"
        />
      </div>

      <div className="flex flex-col gap-[15px]">
        <div
          onClick={() => navigate("/nogironligi-borlar-uchun")}
          className="w-[298px] h-[70px] border border-solid cursor-pointer p-[20px] relative group
             border-[#161616] rounded-[12px] border-opacity-15 hover:border-[#F58634] flex items-center"
        >
          <div className="flex gap-[10px] items-center ">
            <img src={Sitting} alt="" className="w-[26px] h-[38px]" />
            <p className="text-[#161616] text-[14px] font-[600] ">
              Nogironligi borlar uchun
            </p>
          </div>
          <img
            src={Next}
            alt=""
            className="w-[24px] h-[24px] absolute bottom-[20px] right-[20px] group-hover:right-[10px] transition-all duration-200"
          />
        </div>

        <div
          onClick={() => navigate("/xotin-qizlar-uchun")}
          className="w-[298px] h-[70px] border border-solid cursor-pointer p-[20px] relative group
             border-[#161616] rounded-[12px] border-opacity-15 hover:border-[#F58634]"
        >
          <div className="flex gap-[10px] items-center mb-[15px]">
            <img src={Xotin} alt="" className="w-[30px] h-[30px]" />
            <p className="text-[#161616] text-[14px] font-[600] ">
              Xotin-qizlar uchun
            </p>
          </div>
          <img
            src={Next}
            alt=""
            className="w-[24px] h-[24px] absolute bottom-[20px] right-[20px] group-hover:right-[10px] transition-all duration-200"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[15px]">
        <div
          onClick={() => navigate("/yoshlar-uchun")}
          className="w-[298px] h-[70px] border border-solid cursor-pointer px-[15px] relative group
             border-[#161616] rounded-[12px] border-opacity-15 hover:border-[#F58634] flex items-center"
        >
          <div className="flex gap-[10px] items-center ">
            <img src={Young} alt="" className="w-[26px] h-[50px]" />
            <p className="text-[#161616] text-[14px] font-[600] ">
              Yoshlar uchun
            </p>
          </div>
          <img
            src={Next}
            alt=""
            className="w-[24px] h-[24px] absolute bottom-[20px] right-[20px] group-hover:right-[10px] transition-all duration-200"
          />
        </div>

        <div
          onClick={() => navigate("/talim-uchun")}
          className="w-[298px] h-[70px] border border-solid cursor-pointer px-[15px] relative group
             border-[#161616] rounded-[12px] border-opacity-15 hover:border-[#F58634] flex items-center"
        >
          <div className="flex gap-[10px] items-center ">
            <img src={Book} alt="" className="w-[31px] h-[26px]" />
            <p className="text-[#161616] text-[14px] font-[600] ">
              Ta’lim uchun
            </p>
          </div>
          <img
            src={Next}
            alt=""
            className="w-[24px] h-[24px] absolute bottom-[20px] right-[20px] group-hover:right-[10px] transition-all duration-200"
          />
        </div>
      </div>
      <div
        onClick={() => navigate("/tadbirkorlik-uchun")}
        className="w-[298px] h-[70px] border border-solid cursor-pointer px-[15px] relative group
             border-[#161616] rounded-[12px] border-opacity-15 hover:border-[#F58634] flex items-center"
      >
        <div className="flex gap-[10px] items-center ">
          <img src={Old} alt="" className="w-[28px] h-[50px]" />
          <p className="text-[#161616] text-[14px] font-[600] ">
            Tadbirkorlar uchun
          </p>
        </div>
        <img
          src={Next}
          alt=""
          className="w-[24px] h-[24px] absolute bottom-[20px] right-[20px] group-hover:right-[10px] transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default Imkoniyat;
