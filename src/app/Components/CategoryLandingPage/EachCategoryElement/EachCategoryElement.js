import React from 'react';
import { Avatar, Box, Typography, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Utils from '../../../Utils/Utils';

import './EachCategoryElement.scss';

const EachCategoryElement = (props) => {
    const navigate = useNavigate();

    const handleCategorySelect=()=>{
        navigate("/plp");

    }

    return (
            <Box className='each-category' onClick={handleCategorySelect}>
                <Avatar className='category-image' alt="Men" src={Utils.getResource(props.image, "images")} sx={{ width: 150, height: 150 }} />
                <Typography className='category-name'>{props.CategoryName}</Typography>
            </Box>
        );
}

export default EachCategoryElement;
