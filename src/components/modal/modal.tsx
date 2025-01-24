import * as React from 'react';
import { Modal, ModalContent, StyledBackdrop, TriggerButton } from '@/styles/ModalThemes';
0

interface ModalProps{
  width?: number;
  fullWidth?: boolean;
  content: React.ReactNode;
}

export default function ModalUnstyled({
  width = 400,
  fullWidth = false,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <TriggerButton type="button" onClick={handleOpen}>
        Open modal
      </TriggerButton>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 400 }}>
          <h2 id="unstyled-modal-title" className="modal-title">
            Text in a modal
          </h2>
          <p id="unstyled-modal-description" className="hover:text-blue-500">
            Aliquid amet deserunt earum!
          </p>
        </ModalContent>
      </Modal>
    </div>
  );
}







 

