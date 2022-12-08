import { useRef } from "react";
import { HStack, Spacer, useToast } from "@chakra-ui/react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import classes from './AddGradient.module.css'



const AddGradient = ({ onAddGradient, onClose }) => {
    const nameRef = useRef(null)
    const color1Ref = useRef(null)
    const color2Ref = useRef(null)

    const toast = useToast();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newGradient = { name: nameRef.current.value.toUpperCase(), color1: color1Ref.current.value, color2: color2Ref.current.value };
        onAddGradient(newGradient);

        nameRef.current.value = '';

        toast({
            title: 'Created Successfully 😋',
            // description: "We've created your gradient for you.",
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    }


    return (
        <Modal onClose={onClose} >
            <form onSubmit={onSubmitHandler} className={classes.form}>
                <HStack px={8}>
                    <div className={classes.swatch}>
                        <input type="color" ref={color1Ref} />
                        <div className={classes.info}>
                            <h3>Input</h3>
                            <p>Color 1</p>
                        </div>
                    </div>
                    <Spacer />
                    <div className={classes.swatch}>
                        <input type="color" ref={color2Ref} />
                        <div className={classes.info}>
                            <h3>Input</h3>
                            <p>Color 2</p>
                        </div>
                    </div>
                </HStack>
                <div className={classes.input}>
                    <label>Unique Name
                        <input type="text" className={classes.input} ref={nameRef} />
                    </label></div>
                <Button type="submit">Add Gradient</Button>
            </form>
        </Modal>
    );
};

export default AddGradient;
