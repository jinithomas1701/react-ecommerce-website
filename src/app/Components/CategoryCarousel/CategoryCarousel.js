import { Box } from '@mui/material';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import Utils from '../../Utils/Utils';

import './CategoryCarousel.scss';

const CategoryCarousel = (props) => {
    return (
        <Carousel className='category-carousel-wrap' style={{height:"100%",}}>
            
             
            <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-image"
                        src={Utils.getResource("categoryCarousel2.jpg", "images")}
                        alt="Second slide"
                        />
            </Carousel.Item>
            <Carousel.Item>
             <Box className='row'>
                    <Box className='col-6'>
                        <img
                        className="d-block w-100 carousel-image left-cover-img"
                        src={Utils.getResource("categoryCarousel1.webp", "images")}
                        alt="Second slide"
                        />
                    </Box>
                    <Box className='col-6 carousel-description'>
                        <Box className='carousel-desc-container'>
                            <h3>Complete man look</h3>
                            <p>Top brand tuxedos at affordable price range.</p>
                        </Box>
                    </Box>
                </Box>
            </Carousel.Item>
            <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-image"
                        src={Utils.getResource("categoryCarousel3.webp", "images")}
                        alt="Third slide"
                        />
            </Carousel.Item>
        </Carousel>
        );
}

export default CategoryCarousel;