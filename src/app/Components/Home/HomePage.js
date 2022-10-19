import React from 'react';
import { Icon,Box, IconButton, Typography  } from '@mui/material';

import Header from '../Header/Header';
import ProductTile from '../ProductTile/ProductTile';
import PseudoBackEnd from '../../Utils/PseudoBackEnd';
import SectionHeadCarousel from './SectionHeadCarousel/SectionHeadCarousel';
import SectionCategoryListing from './SectionCategoryListing/SectionCategoryListing';

import './HomePage.scss';

const HomePage = (props) => {
    return (
        <Header>
            <Box className="home-page-container">
                <Box className="row homepage-main gx-0">
                    <Box className='col-3'>
                        <SectionCategoryListing />
                    </Box>
                    <Box className='col-9 carousel-wrap offset-2'>
                        <SectionHeadCarousel />
                    </Box>
                </Box>
                <Box className='row top-product-section gx-0'>
                    <Box className='col-9'>
                        <Box className='top-products-wrap'>
                            <Typography className='section-name'>Top Products</Typography>
                            <Box className='top-product-container'>
                                {PseudoBackEnd.getTopProducts().map(eachItem=>
                                    <Box className='product-wrap'  key={eachItem.id}>
                                        <ProductTile 
                                            key={eachItem.id}
                                            image={eachItem.image} 
                                            name ={eachItem.productName}
                                            description ={eachItem.productDescription}
                                            price = {eachItem.productOriginalPrice}
                                            discount = {eachItem.productDiscountPrice}
                                        />
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </Box>
                    <Box className='col-3'>
                        <Box className='flash-sale-wrap'>
                            <Typography className='section-name'>Flash Sale</Typography>
                            <Box className='flash-sale-container'>
                                {PseudoBackEnd.getFlashSaleProducts().map(eachItem=>
                                    <Box className='product-wrap'  key={eachItem.id}>
                                        <ProductTile 
                                            key={eachItem.id}
                                            image={eachItem.image} 
                                            name ={eachItem.productName}
                                            description ={eachItem.productDescription}
                                            price = {eachItem.productOriginalPrice}
                                            discount = {eachItem.productDiscountPrice}
                                        />
                                    </Box>
                                )}
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Header>
    );
}

export default HomePage;