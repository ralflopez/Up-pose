import { Box, Fab, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import AccessibilityIcon from '@material-ui/icons/Accessibility'
import Image from 'next/image'

interface Props {
    type: string
}

const Card = ({ type }: Props) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Box borderRadius={10} position="relative" flexGrow={1} height={300}>
                <Box width="100%" height="150px" position="relative">
                    <Image 
                        src="/assets/image/dummy.jpg"
                        alt="profile"
                        layout="fill"
                        objectFit="cover"
                        className={classes.roundedImageTop}
                    />
                </Box>
                <Box p={3}>
                    <Typography variant="h6">Name here</Typography>
                    <Typography variant="caption">This is a caption</Typography>
                </Box>
                <Box position="absolute" right={-10} bottom={-10} >
                    <Fab color={type === 'model' ? "primary" : "secondary"} size="medium">
                        {type === 'photographer' ? <PhotoCameraIcon/> : <AccessibilityIcon />}
                    </Fab>
                </Box>
            </Box>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        cursor: 'pointer',
        backgroundColor: '#EEEEEE',
        marginRight: theme.spacing(3),
        transition: 'all 200ms ease-in',
        borderRadius: theme.spacing(1),
        '&:hover': {
            opacity: 0.8
        }
    },
    roundedImageTop: {
        borderTopLeftRadius: theme.spacing(1),
        borderTopRightRadius: theme.spacing(1)
    }
}))

export default Card
