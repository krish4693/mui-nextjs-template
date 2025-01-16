import React from "react";
import {SxProps } from "@mui/material/styles";
import { Logo, LogoWithContainer } from "@/styles/customThemes";
// import { AiOutlineUser } from "react-icons/ai";
// import { IconBaseProps } from "react-icons";

interface LogoWithContainerProps {
    renderItem: () => React.ReactNode;
    size?: number;
    bgColor?: string;
    iconColor?: string;
    containerStyle?: SxProps;
}



const LogoContainer: React.FC<LogoWithContainerProps> = ({
  renderItem,
  size = 64,
  bgColor = "#ffffff",
  containerStyle,
}) => {
  return (
    <LogoWithContainer sx={{...containerStyle}}>
      <Logo $bgColor={bgColor} size={size}>
         {renderItem()}
      </Logo>
    </LogoWithContainer>
  );
};

export default LogoContainer;
