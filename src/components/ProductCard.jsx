import { Container, Row, Col, Image} from 'react-bootstrap'
import '../assets/styles/productcardstyles.css'
import { easeInOut, motion } from "framer-motion";
import { InView } from 'react-intersection-observer';


const ProductCard = ({productDetails}) => {  
  const MotionImage = motion(Image)

  const cardVariants ={
    hidden: {
      opacity: 0,
       x: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      }
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.17,
      transition: {
        duration: 0.4,
        ease: 'easeOut'  // This eases the scaling up
      }
    },
    initial: { // This state is for when the element is not being hovered
      scale: 1.0,
      transition: {
        duration: 0.4,
        ease: "easeOut" // This ensures the scaling down is also smooth
      }
    }
  }
  
  return (
    <Container fluid>
        <Row>
            {productDetails.map((product)=>(
              
              <Col xs={12} sm={6} md={6} xl={4} key={product.id} className='my-2 p-2'>
                <InView threshold={0.2} triggerOnce={true} key={product.id}>
                {({ ref, inView }) => (
                <motion.div 
                ref={ref}  
                variants={cardVariants}
                initial='hidden' 
                animate={inView ? 'visible' : 'hidden'} 
                whileHover={{boxShadow:  `-1px 0px 4px 5px ${product.backgroundColor} inset`, transition: {duration: 0.2}}}
                className='productBox my-2' 
                style={{ backgroundColor: product.backgroundColor , '--button-hover-color': product.backgroundColor}}>
                <div className='productImageContainer'>
                    <MotionImage variants={imageVariants}  initial="initial" whileHover="hover" whileTap="hover"  onHoverStart={() => {console.log('hover starts')}}onHoverEnd={() => {console.log('hover ends')}}  fluid src={product.imageSrc} className='productImage'/>
                </div>
                <div className='productDetailInfoContainer my-1 mx-1 text-center'>
                  <div className='productDetailTextContainer my-2 h-100'>
                    <h4>{product.title}</h4>
                    <p className='m-0 p-0'>{product.desc}</p>
                  </div>
                    <div className='peContainer d-flex justify-content-center align-items-center my-2'>
                    <a href="tel:9789130541" style={{ textDecoration: 'none' }}>
                      <button className='peButton'>
                        Enquire Now
                      </button>
                    </a>
                    </div>
                </div>
                </motion.div>
                 )}
              </InView>
              </Col>
            ))}
       
        </Row>
    </Container>
  )
}

export default ProductCard