import { Text, Grid, GridItem } from '@chakra-ui/react'

import classes from './ShowGradients.module.css'

const GradientBox = ({ gradient, id, showCurrentGrad }) => {

    const container = {
        bgGradient: `linear(to-r, ${gradient.color1}, ${gradient.color2})`
    }
    return (
        <GridItem sx={container} h={150} width='100%' onClick={() => showCurrentGrad(id)} className={classes.grid}>
            <Text color='white' my={10}>{gradient.name}</Text>
        </GridItem>
    )
}

const ShowGradients = ({ gradients, showCurrentGrad }) => {

    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={4} className={classes.gridBox}>
            {gradients.map((gradient, index) => (
                <GradientBox key={index} id={index} gradient={gradient} showCurrentGrad={showCurrentGrad} />
            ))}
        </Grid>
    )
}

export default ShowGradients