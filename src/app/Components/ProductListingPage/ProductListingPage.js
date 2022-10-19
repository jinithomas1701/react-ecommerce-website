import React from 'react';
import { Icon,Box, IconButton, Typography  } from '@mui/material';

import PseudoBackEnd from '../../Utils/PseudoBackEnd';
import ProductTile from '../ProductTile/ProductTile';
import SearchIcon from '@mui/icons-material/Search';

import './ProductListingPage.scss';
import Header from '../Header/Header';

const ProductListingPage = (props) => {
    return (
        <Header>
            <Box className='row plp-wrap gx-0'>

                <Box className='col-3'>
                    <Box class="verticalFilters-wrap">
                        <Box class="each-vertical-filter header-container">
                            <Typography class="header-title">FILTERS</Typography>
                            <Typography class="header-clearAllBtn">CLEAR ALL</Typography>
                        </Box>
                        <Box class="each-vertical-filter">
                            <ul class="gender-list">
                                <li>
                                    <label class="common-customRadio gender-label undefined">
                                        <input type="radio" value="men,men women"></input>
                                        Men
                                        <Box class="common-radioIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customRadio gender-label">
                                        <input type="radio" value="women,men women"></input>
                                            Women
                                        <Box class="common-radioIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customRadio gender-label">
                                        <input type="radio" value="boys,boys girls"></input>
                                            Boys
                                        <Box class="common-radioIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customRadio gender-label">
                                        <input type="radio" value="girls,boys girls"></input>
                                        Girls
                                        <Box class="common-radioIndicator"></Box>
                                    </label>
                                </li>
                            </ul>
                        </Box>
                        <Box class="each-vertical-filter brand-container">
                            <Typography class="vertical-filters-header">Brand</Typography>
                            <Box class="filter-search-filterSearchBox">
                                <input type="text" class="filter-search-inputBox filter-search-hidden" placeholder="Search for Brand" ></input>
                                <Typography class="filter-search-iconSearch"><SearchIcon /></Typography>
                            </Box>
                            <ul class="brand-list">
                                <li>
                                    <label class="vertical-filters-label common-customCheckbox">
                                        <input type="checkbox" value="Roadster"></input>
                                        Roadster
                                        <span class="brand-num">(66)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="vertical-filters-label common-customCheckbox">
                                        <input type="checkbox" value="Louis Philippe"></input>
                                        Louis Philippe<span class="brand-num">(1640)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="vertical-filters-label common-customCheckbox">
                                        <input type="checkbox" value="Allen Solly"></input>
                                        Allen Solly<span class="brand-num">(1438)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="vertical-filters-label common-customCheckbox">
                                        <input type="checkbox" value="Louis Philippe Sport"></input>
                                        Louis Philippe Sport<span class="brand-num">(1408)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="vertical-filters-label common-customCheckbox">
                                        <input type="checkbox" value="HIGHLANDER"></input>
                                        HIGHLANDER<span class="brand-num">(1402)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="vertical-filters-label common-customCheckbox">
                                        <input type="checkbox" value="Mufti"></input>
                                        Mufti<span class="brand-num">(1277)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="vertical-filters-label common-customCheckbox">
                                        <input type="checkbox" value="Van Heusen"></input>
                                        Van Heusen<span class="brand-num">(1198)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="vertical-filters-label common-customCheckbox">
                                        <input type="checkbox" value="SPYKAR"></input>
                                        SPYKAR<span class="brand-num">(1156)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                            </ul>
                            <Box class="brand-more">+310 more</Box>
                        </Box>
                        <Box class="each-vertical-filter">
                            <Typography class="vertical-filters-header">Price</Typography>
                            <ul class="price-list">
                                <li>
                                    <label class="common-customCheckbox vertical-filters-label">
                                        <input type="checkbox" class="price-input" value="323.0 TO 2342.0"></input>
                                        Rs. 323 to Rs. 2342
                                        <span class="price-num">(47694)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customCheckbox vertical-filters-label">
                                        <input type="checkbox" class="price-input" value="2342.0 TO 4361.0"></input>
                                        Rs. 2342 to Rs. 4361
                                        <span class="price-num">(3183)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customCheckbox vertical-filters-label">
                                        <input type="checkbox" class="price-input" value="4361.0 TO 6380.0"></input>
                                        Rs. 4361 to Rs. 6380
                                        <span class="price-num">(224)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customCheckbox vertical-filters-label">
                                        <input type="checkbox" class="price-input" value="6380.0 TO 8399.0"></input>
                                        Rs. 6380 to Rs. 8399
                                        <span class="price-num">(15)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                            </ul>
                        </Box>
                        <Box class="each-vertical-filter">
                            <Typography class="vertical-filters-header">Color</Typography>
                            <Box class="filter-search-filterSearchBox">
                                <input type="text" class="filter-search-inputBox filter-search-hidden" placeholder="Search for Color"></input>
                                <Typography class="filter-search-iconSearch"><SearchIcon /></Typography>
                            </Box>
                            <ul>
                                <li class="colour-listItem">
                                    <label class="common-customCheckbox">
                                        <input type="checkbox" value="Blue"></input>
                                        <span data-colorhex="blue" class="colour-label1 colour-colorDisplay" ></span>Blue <span class="colour-num">(11132)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li class="colour-listItem">
                                    <label class="common-customCheckbox">
                                        <input type="checkbox" value="White"></input>
                                        <span data-colorhex="white" class="colour-label2 colour-colorDisplay" ></span>White<span class="colour-num">(6628)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li class="colour-listItem">
                                    <label class="common-customCheckbox">
                                        <input type="checkbox" value="Navy Blue"></input>
                                        <span data-colorhex="navy blue" class="colour-label3 colour-colorDisplay" ></span>Navy Blue<span class="colour-num">(5831)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li class="colour-listItem">
                                    <label class="common-customCheckbox">
                                        <input type="checkbox" value="Black"></input>
                                        <span data-colorhex="black" class="colour-label4 colour-colorDisplay" ></span>Black<span class="colour-num">(3241)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li class="colour-listItem">
                                    <label class="common-customCheckbox">
                                        <input type="checkbox" value="Green"></input>
                                        <span data-colorhex="green" class="colour-label5 colour-colorDisplay" ></span>Green<span class="colour-num">(2918)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li class="colour-listItem">
                                    <label class="common-customCheckbox">
                                        <input type="checkbox" value="Grey"></input>
                                        <span data-colorhex="grey" class="colour-label6 colour-colorDisplay" ></span>Grey<span class="colour-num">(2646)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                                <li class="colour-listItem">
                                    <label class="common-customCheckbox">
                                        <input type="checkbox" value="Pink"></input>
                                        <span data-colorhex="pink" class="colour-label7 colour-colorDisplay" ></span>Pink<span class="colour-num">(2010)</span>
                                        <Box class="common-checkboxIndicator"></Box>
                                    </label>
                                </li>
                            </ul>
                            <Box class="colour-more">
                                <span>+36 more</span>
                            </Box>
                        </Box>
                        <Box class="each-vertical-filter">
                            <Typography class="vertical-filters-header">Discount Range</Typography>
                            <ul class="discount-list">
                                <li>
                                    <label class="common-customRadio vertical-filters-label">
                                        <input type="radio" class="discount-input" name="discount-product" value="10.0 TO 100.0"></input>
                                        10% and above
                                        <div class="common-radioIndicator"></div>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customRadio vertical-filters-label">
                                        <input type="radio" class="discount-input" name="discount-product" value="20.0 TO 100.0"></input>
                                        20% and above
                                        <div class="common-radioIndicator"></div>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customRadio vertical-filters-label">
                                        <input type="radio" class="discount-input" name="discount-product" value="30.0 TO 100.0"></input>
                                        30% and above
                                        <div class="common-radioIndicator"></div>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customRadio vertical-filters-label">
                                        <input type="radio" class="discount-input" name="discount-product" value="40.0 TO 100.0"></input>
                                        40% and above
                                        <div class="common-radioIndicator"></div>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customRadio vertical-filters-label">
                                        <input type="radio" class="discount-input" name="discount-product" value="50.0 TO 100.0"></input>
                                        50% and above
                                        <div class="common-radioIndicator"></div>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customRadio vertical-filters-label">
                                        <input type="radio" class="discount-input" name="discount-product" value="60.0 TO 100.0"></input>
                                        60% and above
                                        <div class="common-radioIndicator"></div>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customRadio vertical-filters-label">
                                        <input type="radio" class="discount-input" name="discount-product" value="70.0 TO 100.0"></input>
                                        70% and above
                                        <div class="common-radioIndicator"></div>
                                    </label>
                                </li>
                                <li>
                                    <label class="common-customRadio vertical-filters-label">
                                        <input type="radio" class="discount-input" name="discount-product" value="80.0 TO 100.0"></input>
                                        80% and above
                                        <div class="common-radioIndicator"></div>
                                    </label>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
                <Box className='col-9'>
                    <Box className='product-wrap'>
                        {PseudoBackEnd.getProductsListing().map(eachItem=>
                            <ProductTile 
                            key={eachItem.id}
                            image={eachItem.image} 
                            name ={eachItem.productName}
                            description ={eachItem.productDescription}
                            price = {eachItem.productOriginalPrice}
                            discount = {eachItem.productDiscountPrice}
                            />
                        )}
                    </Box>
                </Box>
            </Box>
        </Header>
    );
}

export default ProductListingPage;