import { Text, Grid, GridItem } from '@chakra-ui/react'

import classes from './ShowGradients.module.css'

const GradientBox = ({ gradient }) => {
    const ani = {

    }
    const container = {
        bgGradient: `linear(to-r, ${gradient.color1}, ${gradient.color2})`
    }
    return (
        <GridItem sx={container} h={150} width='100%'>
            <Text color='white' my={10}>{gradient.name}</Text>
        </GridItem>
    )
}

const ShowGradients = ({ gradients }) => {

    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={4} className={classes.ani}>
            {gradients.map((gradient, index) => (
                <GradientBox key={index} gradient={gradient} />
            ))}
        </Grid>
    )
}

export default ShowGradients