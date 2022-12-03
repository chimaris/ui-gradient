import { IconButton, Box, Flex, Spacer, Text, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import './App.css'

const gradients = [
  { color1: '#780206', color2: '#061161' },
  { color1: '#FBD3E9', color2: '#BB377D' },
  { color1: '#00d2ff', color2: '#3a7bd5' },
  { color1: '#f2709c', color2: ' #ff9472' },
  { color1: '#a73737', color2: ' #7a2828' },
  { color1: '#4b6cb7', color2: ' #182848' },
  { color1: '#C04848', color2: ' #480048' },
  { color1: '#5f2c82', color2: ' #49a09d' },
  { color1: '#232526', color2: ' #414345' },
  { color1: '#5C258D', color2: ' #4389A2' },
  { color1: '#4776E6', color2: ' #8E54E9' },

]

function App() {
  const [next, setNext] = useState(0)

  const nextHandler = () => {
    console.log(next);
    if (next === gradients.length - 1) {
      setNext(0);
    }
    setNext((prev) => prev + 1);
  }
  const prevHandler = () => {
    console.log(next);
    if (next === 0) {
      setNext(gradients.length);
    }
    setNext((prev) => prev - 1);
  }

  const container = {
    bgGradient: `linear(to-r, ${gradients[next].color1}, ${gradients[next].color2})`
  }

  return (
    <>
      <Box>
        <Text>
          <span style={{ backgroundColor: `${gradients[next].color1}` }} />
          {gradients[next].color1} <IconButton variant='outline' icon={<FaLongArrowAltRight />} /> <span style={{ backgroundColor: `${gradients[next].color2}` }} />
          {gradients[next].color2}
        </Text>
      </Box>
      <Box sx={container} h='100vh' >
        <Heading as='h1'>Hey 👩, relax and have fun..</Heading>
        <Flex mt={['70%', '20%']}>
          <IconButton icon={<FaAngleLeft />} onClick={prevHandler} />
          <Spacer />
          <IconButton icon={<FaAngleRight />} onClick={nextHandler} />
        </Flex>
      </Box>
    </>
  )
}

export default App
