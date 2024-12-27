import { useState } from "react";
import { db } from "../../services/authService";
import { addDoc, collection } from "firebase/firestore";

export interface ModalProps {
  modal: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  // save the data here
  const [title, setTitle] = useState<string>();
  const [task, setTask] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        title: title,
        task: task,
      });
      console.log("added data");
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const name = e.currentTarget.name;

    if (name == "title") {
      setTitle(e.currentTarget.value);
    }

    if (name == "task") {
      setTask(e.currentTarget.value);
    }
  };

  return (
    <div className="modal-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Task</h2>
        <h1>Title</h1>
        <textarea
          rows={2}
          cols={20}
          name="title"
          value={title}
          onChange={handleChange}
        />
        <h1>Desccription</h1>
        <textarea
          rows={4}
          name="task"
          cols={40}
          value={task}
          onChange={handleChange}
        />
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default Modal;
