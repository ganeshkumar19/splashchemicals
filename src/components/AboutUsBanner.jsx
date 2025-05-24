import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import '../assets/styles/aboutbannerstyles.css'
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';

const AboutUsBanner = () => {
    const MotionRow = motion(Row);
    const MotionCol = motion(Col)

    const aboutusVariants ={
        hidden:{
            x:-100,
            opacity: 0
          },
          visible:{
            x:0,
            opacity: 1,
            transition: {
              duration: 0.6,
            }
          }
    }

    const getVariant = (index) => ({
        hidden: {
          x: index % 2 === 0 ? 100 : -100, // Odd columns start from 100, Even from -100
          opacity: 0
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.6
          }
        }
      });
      

    const aboutusDetails = [
        {
            id: 1,
            heading: 'Our Commitment:',
            desc: 'At Splash, we are dedicated to innovation and quality. Our research and development team is at the heart of our operation, constantly seeking new ways to improve our products and make cleaning more effective and environmentally friendly. We embrace scientific advancements to ensure that every Splash product meets the highest standards of hygiene.'
        },
        {
            id: 2,
            heading: 'What We Do:',
            desc: 'Splash offers a comprehensive range of cleaning solutions, including hand washes, toilet cleaners, floor cleaners, and dishwashing liquids. Each product is meticulously formulated to ensure maximum efficacy and safety, helping you maintain a pristine environment in your home or business.'
        },
        {
            id: 3,
            heading: 'Our Impact:',
            desc: 'Our commitment extends to the global community. We believe in responsible practices that not only provide exceptional products but also contribute positively to society and the environment. Splash is more than just a brand; it’s a promise of purity and protection, designed to foster healthier living spaces and a sustainable future.',
            additionalDesc: 'Inspired by brands like Dettol, which has set a benchmark in the industry by offering products backed by scientific research and a deep understanding of consumer needs, Splash strives to uphold these values and drive forward with a similar dedication to excellence and social responsibility'
        },

          
      ];
    return (
        <Container fluid className='aboutBannerContainer'>
            <MotionRow 
                className='aboutbannerrow'  >
                <InView threshold={0.2} triggerOnce={true}>
                {({ ref, inView }) => (
                <MotionCol  
                    ref={ref} 
                    variants={aboutusVariants}
                    initial='hidden' 
                    animate={inView ? 'visible' : 'hidden'}  
                    xs={12} sm={6} 
                    className='aboutUsCol1 p-3'>
                    <h3 className='mb-2'>About Us</h3>
                    <p className='m-0 p-1'>Welcome to Splash, your trusted partner in maintaining a clean and healthy environment. Founded in 2023 by Dharsan Kumar and Omprakash, Splash emerged from a shared vision to deliver superior quality cleaning products. Our mission extends beyond just cleanliness; we are committed to enhancing the health and well-being of families and communities.</p>
                </MotionCol>
                  )}
                </InView>
                <Col xs={12} sm={6}>
                <Row>
                    {aboutusDetails.map((detail, index)=>(
                <InView threshold={0.4} triggerOnce={true} key={detail.id}>
                     {({ ref, inView }) => (
                    <MotionCol className='aboutUsCol p-3' 
                    ref={ref} 
                    variants={getVariant(index)}
                    initial='hidden' 
                    animate={inView ? 'visible' : 'hidden'} 
                    xs={12} 
                    key={detail.id}>
                    <h3 className='mb-2'>{detail.heading}</h3>
                    <p className='m-0 p-0'>{detail.desc}</p>
                    {detail.additionalDesc && <p className='mt-2'>{detail.additionalDesc}</p>}
                    </MotionCol>
                    )}
                    </InView>
                ))}       
                </Row>
                </Col>
            </MotionRow>
        </Container>
      )
}

export default AboutUsBanner