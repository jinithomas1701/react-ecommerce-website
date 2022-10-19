import React from 'react';
import { Icon,Box, IconButton, Typography  } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel'
import GradeIcon from '@mui/icons-material/Grade';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Header from '../Header/Header';
import Utils from '../../Utils/Utils';

import './ProductDisplayPage.scss';
import ProductTile from '../ProductTile/ProductTile';
import PseudoBackEnd from '../../Utils/PseudoBackEnd';

const ProductDisplayPage = (props) => {
    return (
        <Header>
            <Box className='pdp-wrapper'>
                <Box className='row gx-0'>
                    <Box className='col-6'>
                        <Box>
                            <Carousel className='category-carousel-wrap' style={{height:"100%",}}>
                                <Carousel.Item>
                                        <img
                                        className="d-block w-100 carousel-image"
                                        src={Utils.getResource("pdp1.jpg", "images")}
                                        alt="First slide"
                                        />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img
                                        className="d-block w-100 carousel-image"
                                        src={Utils.getResource("pdp2.jpg", "images")}
                                        alt="Second slide"
                                        />
                                </Carousel.Item>
                                <Carousel.Item>
                                        <img
                                        className="d-block w-100 carousel-image"
                                        src={Utils.getResource("pdp3.jpg", "images")}
                                        alt="Third slide"
                                        />
                                </Carousel.Item>
                            </Carousel>
                        </Box>
                        <Box class="pdp-productDescriptorsContainer">
                            <Box>
                                <b class="pdp-product-description-title">Product Details</b>
                                <p class="pdp-product-description-content">White checked Casual shirt ,has a spread collar, button placket, 1 pocket, long regular sleeves, curved hem</p>
                            </Box>
                            <Box className='row'>
                                <Box class="col-6 pdp-sizeFitDesc">
                                    <b class="pdp-product-description-title">Size &amp; Fit</b>
                                    <p class="pdp-sizeFitDescContent pdp-product-description-content">Fit: Slim Fit<br />The model (height 6') is wearing a size 40</p>
                                </Box>
                                <Box class="col-6 pdp-sizeFitDesc">
                                    <b class="pdp-product-description-title">Material &amp; Care</b>
                                    <p class="pdp-sizeFitDescContent pdp-product-description-content">100% Cotton ,<br />Hand wash</p>
                                </Box>
                            </Box>
                            <Box class="index-sizeFitDesc">
                                <b class="pdp-product-description-title">Specifications</b>
                                <Box class="index-tableContainer">
                                    <Box class="index-row">
                                        <Box class="index-rowKey">Sleeve Length</Box>
                                        <Box class="index-rowValue">Long Sleeves</Box>
                                    </Box>
                                    <Box class="index-row">
                                        <Box class="index-rowKey">Collar</Box>
                                        <Box class="index-rowValue">Spread Collar</Box>
                                    </Box>
                                    <Box class="index-row">
                                        <Box class="index-rowKey">Fit</Box>
                                        <Box class="index-rowValue">Slim Fit</Box>
                                    </Box>
                                    <Box class="index-row">
                                        <Box class="index-rowKey">Print or Pattern Type</Box>
                                        <Box class="index-rowValue">Other Checks</Box>
                                    </Box>
                                    <Box class="index-row">
                                        <Box class="index-rowKey">Occasion</Box>
                                        <Box class="index-rowValue">Casual</Box>
                                    </Box>
                                    <Box class="index-row">
                                        <Box class="index-rowKey">Length</Box>
                                        <Box class="index-rowValue">Regular</Box>
                                    </Box>
                                    <Box class="index-row">
                                        <Box class="index-rowKey">Hemline</Box>
                                        <Box class="index-rowValue">Curved</Box>
                                    </Box>
                                    <Box class="index-row">
                                        <Box class="index-rowKey">Placket</Box>
                                        <Box class="index-rowValue">Button Placket</Box>
                                    </Box>
                                </Box>
                                <Box class="index-showMoreText"> <a href='#'>
                                See More
                                </a></Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='col-6'>
                        <Box class="pdp-description-container">
                            <Box class="pdp-price-info">
                                <h1 class="pdp-title">Mufti</h1>
                                <h1 class="pdp-name">Men White &amp; Blue Slim Fit Checked Cotton Casual Shirt</h1>
                                <Box class="index-overallRatingContainer">
                                    <Box class="index-overallRating">
                                        <Box>4.3</Box>
                                        <span class="rating-icon">
                                            <GradeIcon />
                                        </span>
                                        <Box class="index-separator">|</Box>
                                        <Box class="index-ratingsCount">18 Ratings</Box>
                                    </Box>
                                </Box>
                                <p class="pdp-discount-container">
                                    <span class="pdp-price" tabindex="0"><strong>$ 1199</strong></span>
                                    <span class="pdp-mrp">$ 1999</span>
                                    <span class="pdp-discount">(40% OFF)</span>
                                </p>
                                <p class="pdp-selling-price">
                                    <span class="pdp-vatInfo">inclusive of all taxes</span>
                                </p>
                            </Box>
                            <Box class="size-buttons-size-container" id="sizeButtonsContainer">
                                <Box class="size-buttons-size-header">
                                    <h4 class="size-buttons-select-size">SELECT SIZE</h4>
                                    <span class="size-buttons-size-chart">
                                        Size Chart
                                        <span class="size-buttons-arrow">
                                            <ArrowForwardIosIcon />
                                        </span>
                                    </span>
                                </Box>
                                <Box class="size-buttons-size-buttons">
                                    <Box class="size-buttons-tipAndBtnContainer">
                                        38
                                    </Box>
                                    <Box class="size-buttons-tipAndBtnContainer">
                                        39
                                    </Box>
                                    <Box class="size-buttons-tipAndBtnContainer">
                                        40
                                    </Box>
                                    <Box class="size-buttons-tipAndBtnContainer">
                                        41
                                    </Box>
                                </Box>
                            </Box>
                            <Box class="">
                                <Box class="pdp-action-container">
                                    <Box class="pdp-add-to-bag">
                                        <AddShoppingCartIcon />
                                        ADD TO BAG
                                    </Box>
                                    <Box class="pdp-add-to-wishlist">
                                        <FavoriteBorderIcon />
                                        <span class="">WISHLIST</span>
                                    </Box>
                                </Box>
                            </Box>
                            <Box class="meta-container">
                                <Box class="meta-info">
                                    100% Original Products
                                </Box>
                                <Box class="meta-info">
                                    Pay on delivery might be available
                                </Box>
                                <Box class="meta-info">
                                    Easy 30 days returns and exchanges
                                </Box>
                                <Box class="meta-info">
                                    Try &amp; Buy might be available
                                </Box>
                            </Box>
                            <Box class="pdp-offers-container">
                                <Box class="pdp-offers-extraOffer">
                                    <Box class="pdp-offers-offerTitle"><b>EMI option available</b></Box>
                                    <Box class="pdp-offers-offerDesc">
                                        <ul>
                                            <li class="pdp-offers-extraOfferDesc">
                                                <Box class="pdp-offers-labelMarkup">EMI starting from $ 56/month</Box>
                                            </li>
                                        </ul>
                                    </Box>
                                    <span class="pdp-offers-linkButton">View Plan</span>
                                </Box>
                            </Box>
                            <Box class="supplier-desktopCodeSupplier">
                                <Box class="supplier-supplier">
                                    <span>Product Code: 
                                        <span class="supplier-styleId">8986989</span>
                                    </span>
                                </Box>
                                <Box class="supplier-supplier">
                                    <span>Seller: 
                                        <span class="supplier-productSellerName">JINI TAIL PVT LTD</span>
                                        <span class="supplier-partner-name"></span>
                                    </span>
                                    <Box class="supplier-viewmore-link">View Supplier Information</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='similar-product-wrap'>
                    <b>Similar products</b>
                    <Box className='similar-prod'>
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
        </Header>
    );
}

export default ProductDisplayPage;