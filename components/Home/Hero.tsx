import { Box, Container, Grid, Typography } from '@material-ui/core'
import Image from 'next/image'
import { useContext, useEffect, useRef } from 'react'
import { NavContext } from '../Elements/Navbar'
import gsap from 'gsap'

const Hero = () => {
    const setNav = useContext(NavContext)
    let imgRef: React.MutableRefObject<any> = useRef(null)
    let titleRef: React.MutableRefObject<any> = useRef(null)
    let containerRef: React.MutableRefObject<any> = useRef(null)

    const changeNavColor = (e: UIEvent) => {
        setNav((nav: any) => {
            if(nav.isHidden && window.scrollY > 0)
                return {...nav, isHidden: false}
            else if(window.scrollY === 0)
                return {...nav, isHidden: true}
            else return nav
        })
    } 

    useEffect(() => {
        setNav((nav: any) => ({...nav, isHidden: true}))
        window.addEventListener('scroll', changeNavColor)

        const tl = gsap.timeline()
        tl
        .set(containerRef, { visibility: 'visible'})
        .from(imgRef, { x: 200, opacity: 0, duration: 0.5, ease: 'sine.in'})
        .from(titleRef, { y: 200, opacity: 0, duration: 0.5, ease: 'sine.out'}, '-=0.5')

        return () => {
            window.removeEventListener('scroll', changeNavColor)
        }
    }, [])

    return (
        <div style={{overflow: 'hidden', visibility: 'hidden'}} ref={(ref: any) => containerRef = ref}>
            <Container>
                <Grid container style={{backgroundColor: '', minHeight: '100vh'}}>
                    <Grid container item justify="center" direction="column" style={{backgroundColor: ''}} xs={6} ref={(ref: any) => titleRef = ref}>
                        <Typography variant="h1">
                            <Box 
                            fontWeight={600} 
                            fontSize={{
                                md: 150
                            }}
                            >Up</Box>
                        </Typography>
                        <Typography variant="h1">
                            <Box 
                            fontWeight={700} position="relative" 
                            top="-1.7rem"
                            fontSize={{
                                md: 150
                            }}
                            >Pose</Box>
                        </Typography>
                        <Typography 
                            variant="body2" 
                            color="secondary"
                        >
                            <Box 
                                fontSize={{
                                    md: 30
                                }}
                            >
                            Find the best fit freelance model and photographers for your business
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid container item justify="flex-end" alignItems="center" style={{padding: '20px'}} xs={6} ref={(ref: any) => imgRef = ref}>
                        <Image 
                            src="/assets/image/hero.png"
                            height={500}
                            width={500}
                            alt="hero"
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Hero