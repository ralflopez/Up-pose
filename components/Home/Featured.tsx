import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Card from '../Elements/Card'

const Featured = () => {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Box mb={10}>
                <Box mb={5} mt={5}>
                    <Typography variant="h3" color="secondary">
                        <Box fontWeight={700}>
                            <Box color="black" display="inline">Featured</Box> Today
                        </Box>
                    </Typography>
                </Box>
                <Grid container>
                    <Grid item className={classes.cardContainer}>
                        <Card type="photographer"/>
                    </Grid>
                    <Grid item className={classes.cardContainer}>
                        <Card type="model"/>
                    </Grid>
                    <Grid item className={classes.cardContainer}>
                        <Card type="photographer"/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(10),
    },
    cardContainer: {
        flex: 1,
        maxWidth: '50%'
    }
}))

export default Featured
