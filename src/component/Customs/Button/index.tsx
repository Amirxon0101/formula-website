import React, { ReactNode } from "react";
import { LoadingOutlined } from "@ant-design/icons";
interface BtnProps {
  children?: ReactNode | String;
  width?: String;
  height?: Number;
  bg?: String;
  color?: String;
  onClick?: any;
  loading?: boolean;
  style?: any;
  className?: String;
}
const Button: React.FC<BtnProps> = ({
  width,
  height,
  children,
  onClick,
  loading,
  style,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-${width ? `[${width}]` : "fit"} h-${
        height ? `[${height}px]` : "[45px]"
      }  p-[14px] flex items-center justify-center rounded-[12px] bg-[#F58634]
      }]
       text-[#fff] text-[14px] font-[500] ${
         loading ? "cursor-wait" : "cursor-pointer"
       } active:scale-[1.001] ${className && className}`}
      style={style}
    >
      {loading ? (
        <LoadingOutlined
          style={{
            fontSize: 27,
          }}
          size={30}
        />
      ) : (
        children
      )}
    </div>
  );
};

export default Button;
