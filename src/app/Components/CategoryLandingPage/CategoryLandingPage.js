import React from 'react';
import { Box,} from '@mui/material';

import Header from '../Header/Header';
import ProductTile from '../ProductTile/ProductTile';
import PseudoBackEnd from '../../Utils/PseudoBackEnd';
import EachDealCard from './EachDealCard/EachDealCard';
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel';
import EachCategoryElement from './EachCategoryElement/EachCategoryElement';

import './CategoryLandingPage.scss';

const CategoryLandingPage = (props) => {
    return (
        <Header>
            <Box className='clp-wrap'>
                <Box className='clp-main-carousel'><CategoryCarousel /></Box>
                <h4 className='section-heading'>Categories for you</h4>
                <Box className='sub-category-listing'>
                {PseudoBackEnd.getMenCategoryList().map(eachItem=>
                    <EachCategoryElement 
                        key ={eachItem.id}
                        image={eachItem.image}
                        CategoryName={eachItem.CategoryName}
                    />
                )}
                </Box>
                <h4 className='section-heading'>biggest deal on top brands</h4>
                <Box className='brand-deal-wrap'>
                    <EachDealCard offer="30% - 50% Off" image="adidas.jpg" brand_logo="adidas-logo.svg" height={150} width={200} />
                    <EachDealCard offer="10% - 30% Off" image="champion.webp" brand_logo="champion-logo.png" height={40} width={110} />
                    <EachDealCard offer="10% - 80% Off" image="reebook.jpg" brand_logo="reebok-logo.wine.png" height={120} width={150} />
                    {/* <EachDealCard offer="50% - 65% Off" image="jockey.webp" brand_logo="jockey-logo.png" height={33} width={150} /> */}
                    <EachDealCard offer="70% - 80% Off" image="puma.jpg" brand_logo="puma-logo.svg" height={80} width={80} />
                </Box>
                <h4 className='section-heading'>trending section</h4>
                <Box className='trending-section'>
                    <h3 className='trending-header'>
                        clothing
                    </h3>
                    <Box className='trending-container'>
                        {PseudoBackEnd.getTrendingClothListing().map(eachItem=>
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
                <Box className='trending-section'>
                    <h3 className='trending-header'>
                        footwear
                    </h3>
                    <Box className='trending-container'>
                        {PseudoBackEnd.getTrendingFootwearListing().map(eachItem=>
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

export default CategoryLandingPage;
