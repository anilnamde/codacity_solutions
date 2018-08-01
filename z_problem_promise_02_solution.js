/* global CustomError, getLikedBrands, getTopBrandsForGender */

function flattenList(brandNames) {
    return [].concat.apply([], brandNames);
}

function uniqueList(brandNames) {
    const unique = [];
    brandNames.forEach((brand) => {
        if (unique.findIndex((ubrand) => ubrand.id === brand.id) === -1) {
            unique.push(brand);
        }
    })
    return unique;
}

function solution(U, N) {
    const NOT_ENOUGH_DATA = 'Not enough data';
    // console.log('CustomError', CustomError, U, N)
    // getLikedBrands(U.id).then((data) => {
    //     console.log('getLikedBrands >> ', data)
    // })
    // getTopBrandsForGender(U.gender).then((data) => {
    //     console.log('getTopBrandsForGender >> ', data)
    // })

    if (!U && !U.gender && !U.age) {
        return Promise.reject(NOT_ENOUGH_DATA);
    }

    if (U.gender !== 'MALE' && U.gender !== 'FEMALE') {
        return Promise.reject(NOT_ENOUGH_DATA);
    }

    if (!Number.isInteger(U.id)) {
        return Promise.reject(NOT_ENOUGH_DATA);
    }

    return new Promise((resolve, reject) => {
        // Resolve the promise with the result
        Promise.all([
            getLikedBrands(U.id),
            getTopBrandsForGender(U.gender)
        ]).then((brandNames) => {
            // console.log('brand names >>', brandNames)
            const flattenBrands = flattenList(brandNames);
            // console.log('flattenBrands  >>', flattenBrands)
            const uniqueBrands = uniqueList(flattenBrands).map((brand) => brand.name);
            // console.log('uniqueBrands  >>', uniqueBrands)
            if (uniqueBrands.length >= N) {
                resolve(uniqueBrands.splice(0, N))
            } else {
                reject(new CustomError(NOT_ENOUGH_DATA));
            }
        }).catch(() => {
            reject(new CustomError(NOT_ENOUGH_DATA));
        });
    });
}