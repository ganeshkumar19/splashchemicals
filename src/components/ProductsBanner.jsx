import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import SO from '../assets/images/soapoil.png'
import DW from '../assets/images/dishwash.png'
import FC from '../assets/images/floorcleaner.png'
import CW from '../assets/images/clothwash.png'
import PH from '../assets/images/phenyl.png'
import HW from '../assets/images/handwash.png'
import SP from '../assets/images/sp.png'
import TC from '../assets/images/toiletcleaner.png'
import GC from '../assets/images/glasscleaner.png'
import CC from '../assets/images/carwash.png'
import '../assets/styles/productbannerstyles.css'
import ProductCard from './ProductCard'

const ProductsBanner = () => {
    const productDetails = [
        {
          id: 1,
          imageSrc: SO, // Replace with actual path
          title: 'Soap Oil',
          desc: 'Our Soap Oil is a versatile cleaning agent perfect for a multitude of surfaces. With its powerful grease-cutting formula, it ensures effective cleaning without leaving any residues. Ideal for both industrial and home use, Splash Soap Oil combines safety with efficiency, providing a sparkling clean with every use.',
          backgroundColor: '#5CD1A6' // Example color
        },
        {
          id: 2,
          imageSrc: DW,
          title: 'Dish Wash',
          desc: 'Splash Dish Wash is engineered to tackle tough grease and food residues, leaving your dishes sparkling clean with a pleasant fragrance. Its concentrated formula means you need only a small amount to generate rich lather, making it economical while still being tough on stains but gentle on your hands.',
          backgroundColor: '#DCD254'
        },
        {
          id: 3,
          imageSrc: FC,
          title: 'Floor Cleaner',
          desc: "Perfect for all types of floors, our Floor Cleaner offers a residue-free finish with a non-slip formula. It's infused with a fresh scent that lasts, making your spaces feel as clean as they look. Its antibacterial properties ensure your floors are not just clean but hygienically safe.",
          backgroundColor: '#D88EB0'
        },
        {
            id: 4,
            imageSrc: CW,
            title: 'Cloth Wash',
            desc: "Designed for both machine and hand wash, Splash Cloth Wash penetrates deep into fabric fibres to remove stubborn dirt and stains. It protects colour and texture, ensuring your clothes look new for longer. Its high-efficiency formula makes it suitable for all types of fabrics.",
            backgroundColor: '#6786C2'
        },
        {
            id: 5,
            imageSrc: PH,
            title: 'Phenyl',
            desc: "Traditional yet powerful, our Phenyl cleaner is great for heavy-duty cleaning. It disinfects floors and hard surfaces, eradicating germs and leaving behind a healthy environment. Its long-lasting aroma provides a refreshing experience post-cleanup.",
            backgroundColor: '#E9C991'
        },
        {
            id: 6,
            imageSrc: HW,
            title: 'Hand Wash',
            desc: "Our Hand Wash is formulated with moisturisers to keep your hands soft and hydrated while thoroughly cleaning them. It kills 99.9% of germs and bacteria, ensuring your hands are not only clean but also healthy. Suitable for frequent use without causing dryness.",
            backgroundColor: '#E9AB70'
        },
        {
            id: 7,
            imageSrc: SP,
            title: 'Scented Phenyl',
            desc: "Combining the germ-killing properties of traditional phenyl with soothing fragrances, our Scented Phenyl adds a pleasant aroma while cleaning. It’s perfect for use in homes, hospitals, and other environments where both cleanliness and ambiance matter.",
            backgroundColor: '#E7AAC9'
        },
        {
            id: 8,
            imageSrc: TC,
            title: 'Toilet Cleaner',
            desc: "Splash Toilet Cleaner boasts a thick formula that clings to the bowl for a comprehensive clean up to the rim. It effectively removes stains and lime scale, kills germs, and leaves a lasting fresh scent. Its unique dispensing nozzle helps you reach under the bowl rim easily.",
            backgroundColor: '#264A91'
        },
        {
            id: 9,
            imageSrc: GC,
            title: 'Glass Cleaner',
            desc: "Our Glass Cleaner delivers a streak-free shine on windows, mirrors, and other glass surfaces. It quickly cuts through fingerprints and smudges, leaving a crystal-clear view. The fast-drying formula ensures that your cleaning is efficient and effective.",
            backgroundColor: '#7EBBF1'
        },
        {
            id: 10,
            imageSrc: CC,
            title: 'Car Wash',
            desc: "Splash Car Wash ensures your vehicle looks spotless and shiny without harming the paint. Its pH-balanced formula removes dirt and grime effectively while being gentle on your car’s surface. Added wax provides a glossy finish, protecting the paint from dust and scratches.",
            backgroundColor: '#5EB7AC'
        }

      ];
  return (
    <Container fluid className='productBannerContainer'>
        <Row className='productBannerRow p-2'>
            <Col className='m-0 p-0'>
            <p className='productHeading'>Our Products</p>
            <ProductCard productDetails={productDetails}/>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductsBanner
