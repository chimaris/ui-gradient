import { useRef } from "react";
import { HStack, Spacer } from "@chakra-ui/react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import classes from './AddGradient.module.css'



const AddGradient = ({ onAddGradient, onClose }) => {
    const name = useRef(null)
    const color1 = useRef(null)
    const color2 = useRef(null)

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newGradient = { name: name.current.value.toUpperCase(), color1: color1.current.value, color2: color2.current.value };
        console.log(newGradient)

        onAddGradient(newGradient);
    }


    return (
        <Modal onClose={onClose} >
            <form onSubmit={onSubmitHandler} className={classes.form}>
                <HStack px={8}>
                    <div className={classes.swatch}>
                        <input type="color" ref={color1} />
                        <div className={classes.info}>
                            <h3>Input</h3>
                            <p>Color 1</p>
                        </div>
                    </div>
                    <Spacer />
                    <div className={classes.swatch}>
                        <input type="color" ref={color2} />
                        <div className={classes.info}>
                            <h3>Input</h3>
                            <p>Color 2</p>
                        </div>
                    </div>
                </HStack>
                <div className={classes.input}>
                    <label>Unique Name
                        <input type="text" className={classes.input} ref={name} />
                    </label></div>
                <Button type="submit">Add Gradient</Button>
            </form>
        </Modal>
    );
};

export default AddGradient;
