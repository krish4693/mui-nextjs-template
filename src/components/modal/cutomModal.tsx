import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Box,
  SxProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  open: boolean; 
  onClose: () => void; 
  title?: string; 
  children: React.ReactNode; 
  actions?: React.ReactNode; 
  fullWidth?: boolean; 
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl"; 
  hideCloseButton?: boolean; 
  sx?: SxProps; 
}

const CustomModal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  actions,
  fullWidth = true,
  maxWidth = "sm",
  hideCloseButton = false,
  sx = {},
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      sx={sx}
    >
      {title && (
        <DialogTitle>
          {title}
          {!hideCloseButton && (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

export default CustomModal;
