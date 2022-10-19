import React from 'react';
import { Box, Typography,} from '@mui/material';

import './EachDealCard.scss';
import Utils from '../../../Utils/Utils';

const EachDealCard = (props) => {
    return (
        <Box className='each-deal-card'>
            <img className='deal-image' src={Utils.getResource(props.image, "images")} alt="Photograph of a chocolate cupcake." height={200} />
            <Box className='product-content'>
            <Box className='brand-logo'>
                <img className='' src={Utils.getResource( props.brand_logo , "icons")} alt="Photograph of a chocolate cupcake." height={props.height} width={props.width} />
            </Box>
                <Typography>
                    {props.offer}
                </Typography>
            </Box>
        </Box>
        );
}
export default EachDealCard;