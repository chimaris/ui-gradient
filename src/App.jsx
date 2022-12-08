import { IconButton, Box, Flex, Spacer, Text, Heading, Tooltip } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { FaAngleLeft, FaAngleRight, FaLongArrowAltRight, FaLayerGroup, FaRecycle, FaCode, FaPlusSquare, FaDownload, FaTimes } from "react-icons/fa";
import ShowGradients from './conponents/ShowGradients';
import AddGradient from './conponents/AddGradient';
import CopyCode from './conponents/CopyCode';
import loader from '../src/assets/loader.svg';
import './App.css'

const initialGradients = [
  { color1: '#780206', color2: '#061161', name: 'CELESTIAL' },
  { color1: '#FBD3E9', color2: '#BB377D', name: 'PEACH' },
  { color1: '#00d2ff', color2: '#3a7bd5', name: 'SEA BLUE' },
  { color1: '#f2709c', color2: ' #ff9472', name: 'ORANGE CORAL' },
  { color1: '#a73737', color2: ' #7a2828', name: 'SUNSET' },
  { color1: '#4b6cb7', color2: ' #182848', name: 'ROYAL BLUE' },
  { color1: '#C04848', color2: ' #480048', name: 'RELAY' },
  { color1: '#5f2c82', color2: ' #49a09d', name: 'FROST' },
  { color1: '#232526', color2: ' #414345', name: 'DEEP SPACE' },
  { color1: '#5C258D', color2: ' #4389A2', name: 'Kashmir' },
  { color1: '#4776E6', color2: ' #8E54E9', name: 'Endless River' },
]

const headingStyle = {
  fontSize: ['30px', '30px', '40px'],
  mb: '4', // 8 * 4px = 32px
  fontWeight: 'extrabold',
  bgGradient: 'linear(to-l, purple.500, pink.300, purple.900)',
  bgClip: 'text'
}



const App = () => {
  const [gradients, setGradients] = useState(initialGradients);
  const [next, setNext] = useState(0);
  const [isShowGradients, setIsShowGradients] = useState(false);
  const [isRotate, setIsRotate] = useState(false);
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  const [isShowCodeModal, setIsShowCodeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const printRef = useRef();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading, gradients]);

  const nextHandler = () => {
    next === gradients.length - 1 ? setNext(0) : setNext((prev) => prev + 1);
  }

  const prevHandler = () => {
    next === 0 ? setNext(gradients.length - 1) : setNext((prev) => prev - 1);
  }

  const addGradientHandler = (newGradient) => {
    setGradients(prev => [...prev, newGradient]);
  }

  const showGradientHandler = () => {
    setIsShowGradients(!isShowGradients);
  }

  const showCurrentGradient = (id) => {
    setNext(id);
    setIsShowGradients(false);
  }
  const RotateHandler = () => {
    setIsRotate(!isRotate);
  }
  const showAddModalHandler = () => {
    setIsShowAddModal(true);
  }
  const showCodeModalHandler = () => {
    setIsShowCodeModal(true);
  }
  const closeModal = () => {
    setIsShowAddModal(false);
    setIsShowCodeModal(false);
  }

  const downloadHandler = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = `${gradients[next].name.toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  }

  const container = {
    bgGradient: `linear(to-${isRotate ? 'l' : 'r'}, ${gradients[next].color1}, ${gradients[next].color2})`
  }

  const content = isShowGradients ? <ShowGradients gradients={gradients} showCurrentGrad={showCurrentGradient} /> : <Box sx={container} h='100vh' ref={printRef}>
    <Heading as='h1' color='white' p='2rem' data-html2canvas-ignore>Hey 👩, relax and have fun..</Heading>
    <Heading as='h1' color='white' p='2rem' data-html2canvas-ignore>{gradients[next].name}</Heading>
    <Flex mt={['60%', '10%']} data-html2canvas-ignore>
      <IconButton icon={<FaAngleLeft />} onClick={prevHandler} />
      <Spacer />
      <IconButton icon={<FaAngleRight />} onClick={nextHandler} />
    </Flex>
  </Box>



  return (
    <>
      {isShowAddModal && <AddGradient onClose={closeModal} onAddGradient={addGradientHandler} />}
      {isShowCodeModal && <CopyCode onClose={closeModal} next={next} gradients={gradients} isRotate={isRotate} />}
      <Heading sx={headingStyle}>MiGradients</Heading>
      {!isLoading && <Flex justify='space-between' flexDirection={['column-reverse', 'column-reverse', 'row']} mb='20px'>
        <div onClick={showGradientHandler}>
          <IconButton icon={isShowGradients ? <FaTimes /> : <FaLayerGroup />} /> Show all gradients
        </div>
        <Text>
          <span className='colorSpan' style={{ backgroundColor: `${gradients[next].color1} ` }} />
          {gradients[next].color1} <IconButton variant='outline' icon={<FaLongArrowAltRight />} /> <span className='colorSpan' style={{ backgroundColor: `${gradients[next].color2} ` }} />
          {gradients[next].color2}
        </Text>
        <div>
          <Tooltip label="Reverse Gradient" aria-label='A tooltip'>
            <IconButton icon={<FaRecycle />} onClick={RotateHandler} />
          </Tooltip>
          <Tooltip label="Copy CSS" aria-label='A tooltip'>
            <IconButton icon={<FaCode />} onClick={showCodeModalHandler} />
          </Tooltip>
          <Tooltip label="Add Gradient" aria-label='A tooltip'>
            <IconButton icon={<FaPlusSquare />} onClick={showAddModalHandler} />
          </Tooltip>
          <Tooltip label="Get .jpg" aria-label='A tooltip'>
            <IconButton icon={<FaDownload />} onClick={downloadHandler} />
          </Tooltip>
        </div>
      </Flex>}
      {isLoading ? <img src={loader} style={{ display: 'inline-block', margin: 'auto' }} /> : content}
    </>
  )
}

export default App
