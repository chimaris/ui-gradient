import { Box } from '@chakra-ui/react';
import React from 'react'
import Modal from './UI/Modal'
import Button from './UI/Button';
import classes from "./CopyCode.module.css";




const CopyCode = ({ next, gradients, isRotate, onClose }) => {

    const codeBlock = `
  background: ${gradients[next].color1}; /* fallback for old browsers */
  background: -webkit-linear-gradient(to ${isRotate ? 'left' : 'right'}, ${gradients[next].color1}, ${gradients[next].color2}); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, ${gradients[next].color1}, ${gradients[next].color2}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`;

    const copyHandler = (e) => navigator.clipboard.writeText(codeBlock);

    return (
        <Modal onClose={onClose}>
            <Box textAlign='center'>
                <h2>Copy CSS Code</h2>
                <div className={classes['modal__content']}>
                    <pre className={classes.codeblock} >
                        {<code>
                            <p><span className={classes['codeblock__property']}>background</span>: <span className={classes['codeblock__spec']}>{gradients[next].color1}</span>; <span className={classes['codeblock__comment']}>/* fallback for old browsers */</span></p>
                            <p><span className={classes['codeblock__property']}>background</span>: -webkit-linear-gradient(to {isRotate ? 'left' : 'right'}, <span className={classes['codeblock__spec']}>{gradients[next].color1}, {gradients[next].color2}</span>); <span className={classes['codeblock__comment']}>/* Chrome 10-25, Safari 5.1-6 */</span></p>
                            <p><span className={classes['codeblock__property']}>background</span>: linear-gradient(to {isRotate ? 'left' : 'right'}, <span className={classes['codeblock__spec']}>{gradients[next].color1}, {gradients[next].color2}</span>); <span className={classes['codeblock__comment']}>/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */</span></p>
                        </code>}
                    </pre>
                </div>
                <Button onClick={copyHandler}> Copy to Clipboard </Button>
            </Box>
        </Modal>
    )
}

export default CopyCode
