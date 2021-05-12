import { Box, Button, Container, Fade, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import Image from 'next/image'

interface NavProps {
    bg: string,
    isHidden: boolean
}

export const NavContext: React.Context<any> = React.createContext(null)

const Navbar = ({ children }: any) => {
    const [nav, setNav] = useState<NavProps>({
        bg: 'white',
        isHidden: false
    })

    return (
        <>
            <Fade in={!nav.isHidden}>
                <Box position="fixed" top={0} left={0} width="100%" zIndex={10} bgcolor={nav.bg} pt={2} pb={2}>
                    <Container>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item>
                                <Image
                                    src="/assets/image/logo.svg"
                                    alt="up pose"
                                    height={30}
                                    width={30}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary">Find</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Fade>
            <NavContext.Provider value={setNav}>
                {children}
            </NavContext.Provider>
        </>
    )
}

export default Navbar
