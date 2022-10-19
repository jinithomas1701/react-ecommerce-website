import React from 'react';

const Utils = {
    getResource: (fileName, path = "") => {
        let resource = path ? path + '/' + fileName : fileName;
        return require(`../../resources/${resource}`);
    },
}

export default Utils;