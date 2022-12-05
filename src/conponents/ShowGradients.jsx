import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const GradientBox = ({ gradient }) => {
    const container = {
        bgGradient: `linear(to-r, ${gradient.color1}, ${gradient.color2})`
    }
    return (
        <Box sx={container}>
            <Text>{gradient.name}</Text>
        </Box>
    )
}

const ShowGradients = ({ gradients }) => {

    return (
        <div>ShowGradients
            {gradients.map((gradient, index) => (
                <GradientBox key={index} gradient={gradient} />
            ))}
        </div>
    )
}

export default ShowGradients