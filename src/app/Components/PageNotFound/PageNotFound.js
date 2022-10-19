import React from 'react';

import Utils from '../../Utils/Utils';
import './PageNotFound.scss';
// import '../../../resources/images/404.png'

const PageNotFound = () => {
    return (
        <div className="page-not-found-wrapper">
            <div>
                <img className='page-not-found-img' alt='page not found image' src={Utils.getResource("404.png", "images")} />
            </div>
        </div>
    );
}

export default PageNotFound;