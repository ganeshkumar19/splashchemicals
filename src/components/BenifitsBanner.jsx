import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BenifitsCard from './BenifitsCard';
import '../assets/styles/benifitbannerstyles.css'

const BenifitsBanner = () => {

    const benifitsDetails = [
        {
          id: 1,// Replace with actual path
          title: 'Hygiene Solutions',
          desc: 'Extensive range of effective, germ-killing products for personal and home cleanliness.',
        },
        {
          id: 2,
          title: 'Eco-Friendly Practices',
          desc: 'Commitment to sustainability with eco-friendly ingredients and recyclable packaging.',
        },
        {
          id: 3,
          title: 'Hygiene Education',
          desc: "Educational initiatives on cleanliness in partnership with community institutions.",
        },
        {
            id: 4,
            title: 'Innovative Technologies',
            desc: "Advanced research and development to enhance product effectiveness.",
        },
        {
            id: 5,
            title: 'Public Health Partnerships',
            desc: "Collaborations with organisations to extend hygiene solutions to all communities.",
        },
        {
            id: 6,
            title: 'Quality and Safety',
            desc: "Rigorous testing to ensure compliance with international health and safety standards.",
        },
      ];
  
  return (
    <Container fluid className='beniftBannerContainer'>
    <Row className='benifitBannerRow p-2'>
        <Col className='m-0 p-0'>
        <p className='benifitbannerHeading'>Benifits of Splash</p>
        <BenifitsCard  benifitsDetails={benifitsDetails}/>
        </Col>
    </Row>
</Container>
  )
}

export default BenifitsBanner