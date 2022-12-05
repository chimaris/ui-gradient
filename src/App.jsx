import { IconButton, Box, Flex, Spacer, Text, Heading, HStack, Center } from '@chakra-ui/react'
import { useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaLongArrowAltRight, FaLayerGroup, FaRecycle, FaCode, FaPlusSquare, FaDownload, FaTimes } from "react-icons/fa";
import './App.css'
import ShowGradients from './conponents/ShowGradients';
import AddGradient from './conponents/AddGradient';
import CopyCode from './conponents/CopyCode';
import { useEffect } from 'react';
import loader from '../src/assets/loader.svg'
import exportAsImage from './utils/exportAsImage';
import { useRef } from 'react';

const initialGradients = [
  { id: 1, color1: '#780206', color2: '#061161', name: 'name' },
  { id: 2, color1: '#FBD3E9', color2: '#BB377D', name: 'name' },
  { id: 3, color1: '#00d2ff', color2: '#3a7bd5', name: 'name' },
  { id: 4, color1: '#f2709c', color2: ' #ff9472', name: 'name' },
  { id: 5, color1: '#a73737', color2: ' #7a2828', name: 'name' },
  { id: 6, color1: '#4b6cb7', color2: ' #182848', name: 'name' },
  { id: 7, color1: '#C04848', color2: ' #480048', name: 'name' },
  { id: 8, color1: '#5f2c82', color2: ' #49a09d', name: 'name' },
  { id: 9, color1: '#232526', color2: ' #414345', name: 'name' },
  { id: 10, color1: '#5C258D', color2: ' #4389A2', name: 'name' },
  { id: 11, color1: '#4776E6', color2: ' #8E54E9', name: 'name' },
]



const App = () => {
  const [gradients, setGradients] = useState(initialGradients);
  const [next, setNext] = useState(0);
  const [isShowGradients, setIsShowGradients] = useState(false);
  const [isRotate, setIsRotate] = useState(false);
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  const [isShowCodeModal, setIsShowCodeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const exportRef = useRef();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  const nextHandler = () => {
    next === gradients.length - 1 ? setNext(0) : setNext((prev) => prev + 1);
  }

  const prevHandler = () => {
    next === 0 ? setNext(gradients.length - 1) : setNext((prev) => prev - 1);
  }

  const addGradientHandler = (newGradient) => {
    setGradients(prev => [...prev, newGradient]);
    console.log(gradients);
  }

  const showGradientHandler = () => {
    setIsShowGradients(!isShowGradients);
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

  const container = {
    bgGradient: `linear(to-${isRotate ? 'l' : 'r'}, ${gradients[next].color1}, ${gradients[next].color2})`
  }

  const content = isShowGradients ? <ShowGradients gradients={gradients} /> : <Box sx={container} h='100vh' ref={exportRef} >
    <Heading as='h1'>Hey 👩, relax and have fun..</Heading>
    <Flex mt={['70%', '20%']}>
      <IconButton icon={<FaAngleLeft />} onClick={prevHandler} />
      <Spacer />
      <IconButton icon={<FaAngleRight />} onClick={nextHandler} />
    </Flex>
  </Box>



  return (
    <>
      {isShowAddModal && <AddGradient onClose={closeModal} onAddGradient={addGradientHandler} />}
      {isShowCodeModal && <CopyCode onClose={closeModal} next={next} gradients={gradients} isRotate={isRotate} />}
      <Heading>UiGradients</Heading>
      {!isLoading && <Flex justify='space-between'>
        <div onClick={showGradientHandler}>
          <IconButton icon={isShowGradients ? <FaTimes /> : <FaLayerGroup />} /> show all gradients
        </div>
        <Text>
          <span style={{ backgroundColor: `${gradients[next].color1} ` }} />
          {gradients[next].color1} <IconButton variant='outline' icon={<FaLongArrowAltRight />} /> <span style={{ backgroundColor: `${gradients[next].color2} ` }} />
          {gradients[next].color2}
        </Text>
        <div>
          <IconButton icon={<FaRecycle />} onClick={RotateHandler} />
          <IconButton icon={<FaCode />} onClick={showCodeModalHandler} />
          <IconButton icon={<FaPlusSquare />} onClick={showAddModalHandler} />
          <IconButton icon={<FaDownload />} onClick={() => exportAsImage(exportRef.current.value, "test")} />
        </div>
      </Flex>}
      {isLoading ? <img src={loader} style={{ textAlign: 'center', display: 'inline-block', margin: 'auto' }} /> : content}
    </>
  )
}

export default App
