import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import '../assets/styles/contactbannerstyles.css'
import { delay, motion } from "framer-motion";
import { InView } from 'react-intersection-observer';

const ContactUsBanner = () => {

  const headerVariants = {
    hidden:{
      opacity: 0,
      y:-50
    },
    visible:{
      opacity: 1,
      y:0,
      transition: {
        duration: 0.8, // You might adjust this duration as needed
        when: "beforeChildren",
        staggerChildren: 0.5,  // Ensures the parent animates before the children start
      }
    }
  }

  const textVariants ={
    hidden:{
        x:-100,
        opacity: 0
      },
      visible:{
        x:0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.5,
        }
      }
  }

    const formVariants ={
      hidden:{
          x:100,
          opacity: 0
        },
        visible:{
          x:0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 10,
            delay: 1,
          }
        }
    }
  const MotionCol = motion(Col)
  return (
    <Container fluid className='csBannerContainer'>
        <Row className='contactusRow'>
        <InView threshold={0.2} triggerOnce={true}>
        {({ ref, inView }) => (  
            <MotionCol xs={12}
            ref={ref} 
            variants={headerVariants}
            initial='hidden' 
            animate={inView ? 'visible' : 'hidden'}   > 
            <div className='ctHeaderContainer text-center'>
                <p className='m-0 p-0 ctHeaderText'>Contact Us</p>
            </div>
            </MotionCol>
          )}
          </InView>
        </Row>
        <Row className='p-3'>
        <InView threshold={0.2} triggerOnce={true}>
        {({ ref, inView }) => (
            <MotionCol 
            ref={ref} 
            variants={textVariants}
            initial='hidden' 
            animate={inView ? 'visible' : 'hidden'}   
            xs={12} sm={6}>
             <div className='contactInfoContainer'>
                <h6 className='gtText'>Get in touch with us for any inquiries</h6>
                <p className='m-0 p-0 scText'>Splash Chemicals</p>
             </div>
             <div className='iconTextContainer my-4'>
                <div className='d-flex align-items-center jutify-content-center'>
                <FaEnvelope size={10} color='white' className='me-2'/>
                <p className='connectmailtext m-0 p-0'>connect@splashchemicals.in</p>
                </div>
                <div className='d-flex align-items-center'>
                <FaPhoneAlt size={10} color='white' className='me-2'/>
                <p className='connectnumbertext m-0 p-0'>+91 9789130541</p>
                </div>
             </div>
            </MotionCol>
             )}
            </InView>
            <InView threshold={0.2} triggerOnce={true}>
            {({ ref, inView }) => (
            <MotionCol  
            ref={ref} 
            variants={formVariants}
            initial='hidden' 
            animate={inView ? 'visible' : 'hidden'} 
            xs={12} 
            sm={6}>
              <Form>
                <Row>
                <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Name" className='contactNumberInput' />
                </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Control type="phone" placeholder="Phone Number" className='contactNumberInput'/>
                </Form.Group>
                </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email Address" className='contactNumberInput'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFeedback">
                  <Form.Control as="textarea" rows={3} placeholder="Tell about your feedback" className='contactNumberInput'/>
                </Form.Group>

                <div className='msgButtonContainer my-2'>
                    <button className='msgBtn px-4 py-2'>
                        <p className='p-0 m-0'>Send Message</p>
                    </button>
                </div>
              </Form>
            </MotionCol>
             )}
            </InView>
        </Row>
    </Container>
  )
}

export default ContactUsBanner