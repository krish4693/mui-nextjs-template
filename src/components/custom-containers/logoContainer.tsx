import React from "react";
import { styled, SxProps } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { AiOutlineUser } from "react-icons/ai";
import { IconBaseProps } from "react-icons";

interface LogoWithContainerProps {
    renderItem: () => React.ReactNode;
    size?: number;
    bgColor?: string;
    iconColor?: string;
    containerStyle?: SxProps;
}

const LogoWithContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  // marginBottom: "1rem",
});

const Logo = styled(Box, {
    shouldForwardProp: (prop) => prop !== "$bgColor" && prop !== "$size", // Exclude custom props
  })<{ $bgColor: string; size: number }>(({ $bgColor, size }) => ({
  width: `${size}px`,
  height: `${size}px`,
  backgroundColor: $bgColor || "#f5f5f5" ,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

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
