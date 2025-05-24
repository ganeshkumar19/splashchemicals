import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import BANNER from '../assets/images/bannerimage.png'
import '../assets/styles/bannerstyles.css'
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';




const bannerRowVariants ={
  initial:{
    opacity: 0
  },
  visible:{
    opacity: 1,
    transition: {
      duration: 0.8, // You might adjust this duration as needed
      when: "beforeChildren",
      staggerChildren: 0.5  // Ensures the parent animates before the children start
    }
  }
}

const bannerTextVariants = {
  initial:{
    opacity: 0,
    x:-100,
  },
  visible:{
    opacity: 1,
    x:0,
    transition:{
      duration: 0.4,
      delay: 0.4
    }
  }
}

const bannerImageVariants = {
  initial:{
    scale: 0
  },
  visible:{
    rotate: 360,
    scale: 1,
    transition:{
      duration: 0.7,
      delay: 0.8
    }
  }
}

const tpTextVariants ={
  initial:{
    x:-80,
    opacity: 0, 
  },
  visible:{
    x:0,
    opacity: 1,
    transition:{
      duration: 0.8,
      delay: 0.2
    }
  }
  
}

const SplashBanner = () => {
  console.log('component mounts')
  const MotionRow = motion(Row);
  const MotionCol = motion(Col)
  return (
    <Container fluid className='splashBannerContainer'>
        <MotionRow initial='initial' animate= 'visible' variants={bannerRowVariants} className='splashbannerrow'>
            <MotionCol initial='initial' animate= 'visible' variants={bannerTextVariants} xs={12} sm={6}>
            <motion.div className='splashBannerTextContainer'>
                <h3 className='mb-4'>Welcome to Splash Chemicals</h3>
                <p className='m-0 p-0'>From Our Hands to Your Home</p>
                <p className='m-0 p-0'>Splash for a Safer, Cleaner Tomorrow</p>
            </motion.div>
            </MotionCol>
            <Col xs={12} sm={6} className='d-flex justify-content-xl-end'>
            <motion.div initial='initial' animate= 'visible' variants={bannerImageVariants} className='splashBannerImageContainer'>
               <Image fluid src={BANNER} className='bannerImage'/>
            </motion.div>
            </Col>
        </MotionRow>
        <Row className='mt-4'>
        <InView threshold={0.4} triggerOnce={true}>
        {({ ref, inView }) => (
        <MotionCol xs={12} ref={ref}  
          variants={tpTextVariants} 
          initial='initial' 
          animate={inView ? 'visible' : 'initial'} >
          <p className='tpText m-0 p-0'>Your trusted partner in maintaining a clean and healthy environment. Founded in 2023 by Dharsan Kumar and Omprakash, Splash emerged from a shared vision to deliver superior quality cleaning products. Our mission extends beyond just cleanliness; we are committed to enhancing the health and well-being of families and communities.</p>
        </MotionCol>
        )}
        </InView>
        </Row>
    </Container>
  )
}

export default SplashBanner