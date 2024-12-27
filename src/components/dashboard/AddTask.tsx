import { useState } from "react";
import Modal from "../tasks/Modal";
import { IoIosAdd } from "react-icons/io";

const AddTask = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModal = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  console.log(showModal);
  return (
    <div className="addTask-container">
      <div className="card-container">
        <button className="button-style" onClick={handleModal}>
          <IoIosAdd /> add task
        </button>
        <div className="test">
          {showModal && <Modal modal={showModal} closeModal={handleClose} />}
        </div>
      </div>
    </div>
  );
};

export default AddTask;
