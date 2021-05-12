import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const Footer = () => {
    const classes = useStyles()

    return (
        <Box className={classes.bg} color="white" pt={3} pb={3} minHeight={150}>
            <Container>
                <Typography>Hello</Typography>
            </Container>
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    bg: {
        backgroundColor: theme.palette.primary.main
    }
}))

export default Footer
