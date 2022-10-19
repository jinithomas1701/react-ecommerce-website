import React from 'react';

const PseudoBackEnd = {
    getTopProducts:()=>{
        const list = [{
            "id":"1",
            "image": "product1.webp",
            "productName": "Athena",
            "productDescription": "puff sleeves bodycon dress",
            "productOriginalPrice": "50",
            "productDiscountPrice": "45"
        },{
            "id":"2",
            "image": "product2.jpeg",
            "productName": "Berrylush",
            "productDescription": "crepe mini dress",
            "productOriginalPrice": "60",
            "productDiscountPrice": "35"
        },{
            "id":"3",
            "image": "product3.jpg",
            "productName": "Flow",
            "productDescription": "Linen Summer Collection, 2022",
            "productOriginalPrice": "40",
            "productDiscountPrice": "33"
        },{
            "id":"4",
            "image": "product4.webp",
            "productName": "Wave",
            "productDescription": "Upbeat casual dress",
            "productOriginalPrice": "60",
        },{
            "id":"5",
            "image": "product5.webp",
            "productName": "Glaze",
            "productDescription": "chic modern trend, 2022",
            "productOriginalPrice": "50",
            "productDiscountPrice": "43"
        },{
            "id":"6",
            "image": "product6.jpg",
            "productName": "cherry",
            "productDescription": "casual shirt",
            "productOriginalPrice": "60",
        },{
            "id":"7",
            "image": "product7.jpg",
            "productName": "roma",
            "productDescription": "comfortable pants for outdoors",
            "productOriginalPrice": "20",
            "productDiscountPrice": "15"
        },{
            "id":"8",
            "image": "product8.jpg",
            "productName": "remoda",
            "productDescription": "party wear and lounge wear",
            "productOriginalPrice": "63",
            "productDiscountPrice": "35"
        }];
        return  list;
    },
    getFlashSaleProducts:()=>{
        const list = [{
                "id":"1",
                "image": "product1.webp",
                "productName": "Athena",
                "productDescription": "puff sleeves bodycon dress",
                "productOriginalPrice": "50",
                "productDiscountPrice": "45"
            },{
                "id":"2",
                "image": "product2.jpeg",
                "productName": "Berrylush",
                "productDescription": "crepe mini dress",
                "productOriginalPrice": "60",
                "productDiscountPrice": "35"
        },{
            "id":"3",
            "image": "product9.jpg",
            "productName": "Athena",
            "productDescription": "puff sleeves bodycon dress",
            "productOriginalPrice": "50",
            "productDiscountPrice": "45"
        }];
        return list;
    },
    getMenCategoryList:()=>{
        const list = [{
                "id":"1",
                "image": "men-shirt.webp",
                "CategoryName" : "Shirt"
        },{
            "id":"2",
            "image": "men-jeans.webp",
            "CategoryName" : "Jeans"
        },{
            "id":"3",
            "image": "men-t-shirt.jpg",
            "CategoryName" : "T-Shirt"
        },{
            "id":"4",
            "image": "men-formal-shoe.jpg",
            "CategoryName" : "Shoes"
        },{
            "id":"5",
            "image": "men-loungewear.jpg",
            "CategoryName" : "Lounge Wear"
        },{
            "id":"6",
            "image": "men-belt-wallet.jpg",
            "CategoryName" : "Jeans"
        }
    ];
        return list
    },
    getProductsListing:()=>{
        const list = [{
            "id":"1",
            "image": "product1.webp",
            "productName": "Athena",
            "productDescription": "puff sleeves bodycon dress",
            "productOriginalPrice": "50",
            "productDiscountPrice": "45"
        },{
            "id":"2",
            "image": "product2.jpeg",
            "productName": "Berrylush",
            "productDescription": "crepe mini dress",
            "productOriginalPrice": "60",
            "productDiscountPrice": "35"
        },{
            "id":"3",
            "image": "product3.jpg",
            "productName": "Flow",
            "productDescription": "Linen Summer Collection, 2022",
            "productOriginalPrice": "40",
            "productDiscountPrice": "33"
        },{
            "id":"4",
            "image": "product4.webp",
            "productName": "Wave",
            "productDescription": "Upbeat casual dress",
            "productOriginalPrice": "60",
        },{
            "id":"5",
            "image": "product5.webp",
            "productName": "Glaze",
            "productDescription": "chic modern trend, 2022",
            "productOriginalPrice": "50",
            "productDiscountPrice": "43"
        },{
            "id":"6",
            "image": "product6.jpg",
            "productName": "cherry",
            "productDescription": "casual shirt",
            "productOriginalPrice": "60",
        },{
            "id":"7",
            "image": "product7.jpg",
            "productName": "roma",
            "productDescription": "comfortable pants for outdoors",
            "productOriginalPrice": "20",
            "productDiscountPrice": "15"
        },{
            "id":"8",
            "image": "product8.jpg",
            "productName": "remoda",
            "productDescription": "party wear and lounge wear",
            "productOriginalPrice": "63",
            "productDiscountPrice": "35"
        },{
            "id":"9",
            "image": "product1.webp",
            "productName": "Athena",
            "productDescription": "puff sleeves bodycon dress",
            "productOriginalPrice": "50",
            "productDiscountPrice": "45"
        },{
            "id":"10",
            "image": "product2.jpeg",
            "productName": "Berrylush",
            "productDescription": "crepe mini dress",
            "productOriginalPrice": "60",
            "productDiscountPrice": "35"
        },{
            "id":"11",
            "image": "product3.jpg",
            "productName": "Flow",
            "productDescription": "Linen Summer Collection, 2022",
            "productOriginalPrice": "40",
            "productDiscountPrice": "33"
        },{
            "id":"12",
            "image": "product4.webp",
            "productName": "Wave",
            "productDescription": "Upbeat casual dress",
            "productOriginalPrice": "60",
        },{
            "id":"13",
            "image": "product5.webp",
            "productName": "Glaze",
            "productDescription": "chic modern trend, 2022",
            "productOriginalPrice": "50",
            "productDiscountPrice": "43"
        },{
            "id":"14",
            "image": "product6.jpg",
            "productName": "cherry",
            "productDescription": "casual shirt",
            "productOriginalPrice": "60",
        },{
            "id":"15",
            "image": "product7.jpg",
            "productName": "roma",
            "productDescription": "comfortable pants for outdoors",
            "productOriginalPrice": "20",
            "productDiscountPrice": "15"
        },{
            "id":"16",
            "image": "product8.jpg",
            "productName": "remoda",
            "productDescription": "party wear and lounge wear",
            "productOriginalPrice": "63",
            "productDiscountPrice": "35"
        }];
        return  list;
    },
    getTrendingClothListing:()=>{
        const list = [
            {
                "id":"1",
                "image": "product3.jpg",
                "productName": "Flow",
                "productDescription": "Linen Summer Collection, 2022",
                "productOriginalPrice": "40",
                "productDiscountPrice": "33"
            },{
                "id":"2",
                "image": "product6.jpg",
                "productName": "cherry",
                "productDescription": "casual shirt",
                "productOriginalPrice": "50",

            },{
                "id":"3",
                "image": "product10.webp",
                "productName": "Lewise",
                "productDescription": "formal pant",
                "productOriginalPrice": "60",
            },{
                "id":"4",
                "image": "product11.webp",
                "productName": "Blooms",
                "productDescription": "summer collection shorts",
                "productOriginalPrice": "50",
                "productDiscountPrice": "33"

            },{
                "id":"5",
                "image": "product12.jpg",
                "productName": "roadstear",
                "productDescription": "casual shirt",
                "productOriginalPrice": "40",
                "productDiscountPrice": "20"

            },
        ]
        return list;
    },
    getTrendingFootwearListing:()=>{
        const list = [
            {
                "id":"1",
                "image": "product13.webp",
                "productName": "weave",
                "productDescription": "Sustainable lasting shoes",
                "productOriginalPrice": "40",
                "productDiscountPrice": "20"

            },
            {
                "id":"2",
                "image": "product14.jpg",
                "productName": "roadstear",
                "productDescription": "floppers classic",
                "productOriginalPrice": "40",
                "productDiscountPrice": "20"

            },{
                "id":"3",
                "image": "product15.webp",
                "productName": "puma",
                "productDescription": "sports wear collection",
                "productOriginalPrice": "40",
                "productDiscountPrice": "20"

            },{
                "id":"4",
                "image": "product16.jpg",
                "productName": "vintage",
                "productDescription": "funky jogging",
                "productOriginalPrice": "40",
                "productDiscountPrice": "20"

            },{
                "id":"5",
                "image": "product17.jpg",
                "productName": "reebook",
                "productDescription": "formal shoes",
                "productOriginalPrice": "40",
                "productDiscountPrice": "20"

            },{
                "id":"6",
                "image": "product18.jpg",
                "productName": "funky",
                "productDescription": "flipflops in style",
                "productOriginalPrice": "40",
                "productDiscountPrice": "20"

            },
        ]
        return list;
    },
}

export default PseudoBackEnd;