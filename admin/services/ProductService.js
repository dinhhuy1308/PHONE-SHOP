function ProductServices () {
    this.productArr = [];
    
    // lưu dữ liệu vào đối tượng
    axios.get('https://640808668ee73db92e36c7c4.mockapi.io/PhoneProducts')
    .then(result => {
        productArr = result.data;
    })
    .catch(error => {
        console.log(error);
    });



    // lấy danh sách sản phẩm
    this.getProductList = () => {
        return axios ({
            method: 'get',
            url: 'https://640808668ee73db92e36c7c4.mockapi.io/PhoneProducts',
        })
    }


    // thêm sản phẩm
    this.addProductSer = (product) => {
        return axios ({
            method: 'post',
            url: 'https://640808668ee73db92e36c7c4.mockapi.io/PhoneProducts',
            data: product
        })
    }

    // xóa sản phẩm
    this.deleteProductSer = (id) => {
        return axios ({
            method: 'delete',
            url: `https://640808668ee73db92e36c7c4.mockapi.io/PhoneProducts/${id}`,
        })
    }

    // xem chi tiết sản phẩm
    this.getProductSer = (id) => {
        return axios ({
            method: 'get',
            url: `https://640808668ee73db92e36c7c4.mockapi.io/PhoneProducts/${id}`,
        })
    }

    // cập nhật sản phẩm
    this.updateProductSer = (productUpdate,id)  => {
        return axios ({
            method: 'put',
            url: `https://640808668ee73db92e36c7c4.mockapi.io/PhoneProducts/${id}`,
            data: productUpdate
        })
    }  
}



ProductServices.prototype.searchName = (keyword) => {
    let newProduct = [];

    let keywordLowerCase = keyword.toLowerCase().replace(/\s/g, '');

    productArr.map((product) => {
        let nameLowerCase = product.name.toLowerCase().replace(/\s/g, '');
        if (nameLowerCase.indexOf(keywordLowerCase) > -1) {
            newProduct.push(product);
        }
    })
    return newProduct;
}














//////////////////////////

// huyArr = [];
// fetch('https://640808668ee73db92e36c7c4.mockapi.io/PhoneProducts')
//     .then(function(data) {
//         return data.json();
//     })
//     .then(function (data) {
//         huyArr = data;

//         huyArr.sort(function(a,b) {
//             return a.price-b.price;
//         });
//     })
//     .catch(function (error) {
//         console.log(error)
//     });


//     huyArr1 = [];
//     fetch('https://640808668ee73db92e36c7c4.mockapi.io/PhoneProducts')
//     .then(function(data) {
//         return data.json();
//     })
//     .then(function (data) {
//         huyArr1 = data;

//         huyArr1.sort(function(a,b) {
//             return b.price-a.price;
//         });

        
//     })
//     .catch(function (error) {
//         console.log(error)
//     });


