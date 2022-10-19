import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import Utils from '../../../Utils/Utils';

import './SectionHeadCarousel.scss';
import { Box } from '@mui/material';

const SectionHeadCarousel = (props) => {
    return (
        <Carousel className='head-carousel-wrapper' style={{height:"100%",}}>
            <Carousel.Item className='carousel-item-2'>
                <img
                className="d-block w-100 carousel-image"
                src={Utils.getResource("dash2.webp", "images")}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Fresh Arrival</h3>
                    <p>Spring Or Summar Collection</p>
                    <Box className="shipping-wrap">
                        <LocalShippingIcon />
                        <p>free delivery on first order.</p>
                    </Box>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item-3'>
                <img
                className="d-block w-100 carousel-image"
                src={Utils.getResource("dash3.webp", "images")}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>starting at $30</h3>
                <p>Deals on clothing, footwear, beauty & more</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item-1'>
                <img
                className="d-block w-100 carousel-image"
                src={Utils.getResource("dash1.webp", "images")}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className=''>Customers Most loved fashion</h3>
                <p>4+ star rated | 250+ ratings</p>
                <p className='offer'>Minimum 70% Off.</p>
                <Box className="shipping-wrap">
                    <LocalShippingIcon />
                    <p>free delivery on first order.</p>
                </Box>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        );
}

export default SectionHeadCarousel;