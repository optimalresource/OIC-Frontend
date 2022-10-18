import React, {useState}  from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const CustomModal = ({title, message}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <Button
      color="primary"
      type="button"
      onClick={() => setModalOpen(!modalOpen)}
    >ssss</Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="modaltitle">
            {title}
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default CustomModal;

