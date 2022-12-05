import { useRef } from "react";
import Modal from "./UI/Modal";


const AddGradient = ({ onAddGradient, onClose }) => {
    const name = useRef(null)
    const color1 = useRef(null)
    const color2 = useRef(null)

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newGradient = { name: name.current.value, color1: color1.current.value, color2: color2.current.value };
        console.log(newGradient)

        onAddGradient(newGradient);
    }


    return (
        <Modal onClose={onClose} >
            <form onSubmit={onSubmitHandler}>
                <label>Color 1
                    <input type="color" name="" id="" ref={color1} />
                </label>
                <label>Color 2
                    <input type="color" name="" id="" ref={color2} />
                </label>
                <label>Unique Name
                    <input type="text" name="" id="" ref={name} />
                </label>
                <button type="submit">Add Gradient</button>
            </form>
        </Modal>
    );
};

export default AddGradient;
