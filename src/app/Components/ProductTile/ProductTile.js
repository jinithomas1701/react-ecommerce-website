import React from 'react';
import { Box, Typography  } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Utils from '../../Utils/Utils';

import './ProductTile.scss';

const ProductTile = (props) => {
    const navigate = useNavigate();

    const handleProductClick =()=>{
        navigate("/pdp");
    }

    return (
        <Box className='each-product-container' onClick={handleProductClick}>
            <Box className='product-image'>
                <img src={Utils.getResource(props.image, "images")} alt="Photograph of a chocolate cupcake." className="media" width={180} height={200} />
            </Box>
            <Box className='product-content'>
                <Typography className='product-name'>{props.name}</Typography>
                <Typography className='product-description'>{props.description}</Typography>
                <Box className='product-price'>
                    {
                        !props.discount&&
                        <Typography className='product-original-price'>${props.price}</Typography>
                    }
                    {
                        props.discount&&
                        <Box className='price-cover'>
                            <Typography className='product-original-price have-discount'>${props.price}</Typography>
                            <Typography className='product-discount-price'>${props.discount}(Offer)</Typography>
                        </Box>
                    }
                </Box>
            </Box>
        </Box>
        );
}

export default ProductTile;