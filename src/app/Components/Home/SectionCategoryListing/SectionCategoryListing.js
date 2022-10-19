import React from 'react';
import { Avatar, Box, Typography  } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Utils from '../../../Utils/Utils';

import './SectionCategoryListing.scss';

const SectionCategoryListing = (props) => {
    const navigate = useNavigate();

    const handleClpCall=()=>{
        navigate("/clp");
    }
    return (
        <Box className='sub-category-wrapper'>
            <Box className='sub-category-wrap' onClick={handleClpCall}>
                <Avatar alt="Men" src={Utils.getResource("men.webp", "images")} />
                <Typography className='category-name'>Men</Typography>
            </Box>
            <Box className='sub-category-wrap' onClick={handleClpCall}>
                <Avatar alt="Men" src={Utils.getResource("women.jpg", "images")} />
                <Typography className='category-name'>Women</Typography>
            </Box>
            <Box className='sub-category-wrap' onClick={handleClpCall}>
                <Avatar alt="Men" src={Utils.getResource("kids.jpg", "images")} />
                <Typography className='category-name'>Kids</Typography>
            </Box>
            <Box className='sub-category-wrap' onClick={handleClpCall}>
                <Avatar alt="Men" src={Utils.getResource("beauty.jpg", "images")} />
                <Typography className='category-name'>Beauty</Typography>
            </Box>
            <Box className='sub-category-wrap' onClick={handleClpCall}>
                <Avatar alt="Men" src={Utils.getResource("home.jpg", "images")} />
                <Typography className='category-name'>Home</Typography>
            </Box>
            <Box className='sub-category-wrap' onClick={handleClpCall}>
                <Avatar alt="Men" src={Utils.getResource("accessories.png", "images")} />
                <Typography className='category-name'>Accessories</Typography>
            </Box>
            <Box className='sub-category-wrap' onClick={handleClpCall}>
                <Avatar alt="Men" src={Utils.getResource("jewellery.jpg", "images")} />
                <Typography className='category-name'>Jewellery</Typography>
            </Box>
        </Box>
        );
}

export default SectionCategoryListing;