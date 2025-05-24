import { Container, Row, Col, Image} from 'react-bootstrap'
import '../assets/styles/benifitcardstyles.css'
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';

const BenifitsCard = ({benifitsDetails}) => {
  
  const MotionCol = motion(Col)
  
  const getVariant = (index) => ({
    hidden: {
      y: index % 2 === 0 ? 100 : -100, // Odd columns start from 100, Even from -100
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      }
    }, 
    hover:{
      textShadow: '0px 1px 6px rgba(0, 0, 0, 0.8)',
      transition:{
        duration: 0.6,
      }
    }
  });

  return (
    <Container fluid>
        <Row>
            {benifitsDetails.map((benifit, index)=>(
              <InView threshold={0.4} triggerOnce={true} key={benifit.id}>
              {({ ref, inView }) => (
              <MotionCol 
              ref={ref} 
              variants={getVariant(index)}
              whileHover='hover'
              whileTap='hover'
              initial='hidden' 
              animate={inView ? 'visible' : 'hidden'} 
               xs={12} sm={6} md={6} xl={4} key={benifit.id} 
               className='my-2 p-1'>
                <div className='benifitBox my-2'>
                    <div className='benfitTextContainer m-0 p-0'>
                       <h3>{benifit.title}</h3> 
                       <p className='m-0 p-0'>{benifit.desc}</p>
                    </div>
                </div>
              </MotionCol>
              )}
             </InView>
            ))}
       
        </Row>
    </Container>
  )
}

export default BenifitsCard