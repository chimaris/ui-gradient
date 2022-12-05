import { Box } from '@chakra-ui/react';
import React from 'react'
import Modal from './UI/Modal'
// import { CopyBlock, dracula } from "react-code-blocks";


const CopyCode = ({ next, gradients, isRotate, onClose }) => {

    const codeBox = {
        overflow: 'scroll',
        backgroundColor: '#282A36',
        color: 'white',
        padding: '1rem',
        textAlign: 'left'
    }
    const codeBlock = `
  background: ${gradients[next].color1}; /* fallback for old browsers */
  background: -webkit-linear-gradient(to ${isRotate ? 'left' : 'right'}, ${gradients[next].color1}, ${gradients[next].color2}); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, ${gradients[next].color1}, ${gradients[next].color2}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`;
    return (
        <Modal onClose={onClose}>
            <Box textAlign='center'>
                <h3>Copy CSS Code</h3>
                <div style={codeBox}>
                    {codeBlock}
                </div>

                {/* <CopyBlock
                    language='javascript'
                    text={codeBlock}
                    showLineNumbers={lineNumbers}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                /> */}
                <button
                    onClick={(e) => {
                        navigator.clipboard.writeText(codeBlock);
                    }}>
                    Copy to Clipboard
                </button>

            </Box></Modal>
    )
}

export default CopyCode



