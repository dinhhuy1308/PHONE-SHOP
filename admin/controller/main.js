const productSer = new ProductServices ();
const validation = new Validation ();

function getELE (id) {
    return document.getElementById(id);
}

// hiển thị bảng sản phẩm
function showTable (arrayData) {
    let  content = '';
    arrayData.map((product) => {
        const {id,name,price,screen,backCamera,frontCamera,img,desc,type} = product;
        content += 
        `<tr>
            <th>${id}</th>
            <th>${name}</th>
            <th>$ ${price.toLocaleString()}</th>
            <th>${screen}</th>
            <th class="backCamera">${backCamera}</th>
            <th class="frontCamera">${frontCamera}</th>
            <th class="photo">
                <img src=${img}
            </th>
            <th>${desc}</th>
            <th>${type}</th>
            <th>
                <button onclick='deleteProduct("${id}")' class='btn btn-danger'>
                     <i class="fa fa-trash"></i> Delete
                </button>
                <button onclick='showProductDetail("${id}")' data-toggle="modal" data-target="#myModal"  class='btn btn-success'>
                    <i class="fa fa-pen"></i> Edit
                </button>
            </th> 
        </tr>`
    })
    getELE('tableList').innerHTML = content;
}

// hiển thị danh sách sản phẩm
function showProductList () {
    productSer.getProductList ()
    .then ((result) => {
        showTable(result.data);
    })
    .catch ((error) => {
        console.log(error)
    })
}
showProductList();

// thêm sản phẩm
function addProduct () {
    let id = getELE('id').value;
    let name = getELE('name').value;
    let price = getELE('price').value;
    let screen = getELE('screen').value;
    let backCamera = getELE('backCamera').value;
    let frontCamera = getELE('frontCamera').value;
    let img = getELE('imgLink').value;
    let desc = getELE('description').value;
    let type = getELE('brand').value;

    var isValid = true;

    isValid &= validation.checkEmpty(name,'tbName','Phone name is not be empty!');

    isValid &= validation.checkEmpty(price,'tbPrice','Prime is not be empty!')
    && validation.checkPrime(price,'tbPrice','Please enter a price greater than 0');

    isValid &= validation.checkEmpty(screen,'tbScreen','Screen is not be empty!');

    isValid &= validation.checkEmpty(backCamera,'tbBackCamera','Back Camera is not be empty!');

    isValid &= validation.checkEmpty(frontCamera,'tbFrontCamera','Front Camera is not be empty!');

    isValid &= validation.checkEmpty(img,'tbImgLink','Image Link is not be empty!');

    isValid &= validation.checkEmpty(desc,'tbDescription','Description is not be empty!');

    isValid &= validation.checkSelect('brand','tbBrand','Please choose brand');

    if (isValid) {

        let product = new Product (id,name,price,screen,backCamera,frontCamera,img,desc,type) 
    
        productSer.addProductSer(product)
        .then((result) => {
            showProductList();
    
            swal({
                title: "Add Phone Success!!",
                icon: "success",
                timer: 1000,    
              });
            document.querySelector("#myModal #btnClose").click();
        })
        .catch((error) => {
            console.log(error)
        })
    }

}
getELE('btnAdd').addEventListener ('click', () => {
    document.querySelector('#myModal .modal-footer').innerHTML = 
    `<button onclick='addProduct()' id="btnAddPhone" type="button" class="btn btn-warning">Add Phone</button>
    <button id="btnClose" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`

    getELE('formProduct').reset(); 
});


// xóa sản phẩm
function deleteProduct (id) {
    swal({
    title: "Are you sure?",text: "This phone will be deleted, you can't undo this action",icon: "warning",buttons: true,
    dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            productSer.deleteProductSer(id)
            .then((result) => {
                showProductList();
        })
            .catch((error) => {
                console.log(error)
        })
    swal("Delete Phone Success", {
        icon: "success",
        timer: 1000,
    });
        } 
    });

}


// xem chi tiết sản phẩm
function showProductDetail (id) {
    productSer.getProductSer(id)
    .then((result) => {
        getELE('id').value = result.data.id;
        getELE('name').value = result.data.name;
        getELE('price').value = result.data.price;
        getELE('screen').value = result.data.screen;
        getELE('backCamera').value = result.data.backCamera;
        getELE('frontCamera').value = result.data.frontCamera;
        getELE('imgLink').value = result.data.img;
        getELE('description').value = result.data.desc;
        getELE('brand').value = result.data.type;
        
        document.querySelector('#myModal .modal-footer').innerHTML = 
    `<button  class='btn btn-success' onclick='updateProduct("${id}")'>Update Product</button>
    <button id="btnClose" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`
    })
    .catch((error) => {
        console.log(error)
    })
}

// cập nhật lại sản phẩm
function updateProduct (id) {
    let name = getELE('name').value;
    let price = getELE('price').value;
    let screen = getELE('screen').value;
    let backCamera = getELE('backCamera').value;
    let frontCamera = getELE('frontCamera').value;
    let img = getELE('imgLink').value;
    let desc = getELE('description').value;
    let type = getELE('brand').value;

    var isValid = true;

    isValid &= validation.checkEmpty(name,'tbName','Phone name is not be empty!');

    isValid &= validation.checkEmpty(price,'tbPrice','Prime is not be empty!')
    && validation.checkPrime(price,'tbPrice','Please enter a price greater than 0');

    isValid &= validation.checkEmpty(screen,'tbScreen','Screen is not be empty!');

    isValid &= validation.checkEmpty(backCamera,'tbBackCamera','Back Camera is not be empty!');

    isValid &= validation.checkEmpty(frontCamera,'tbFrontCamera','Front Camera is not be empty!');

    isValid &= validation.checkEmpty(img,'tbImgLink','Image Link is not be empty!');

    isValid &= validation.checkEmpty(desc,'tbDescription','Description is not be empty!');

    isValid &= validation.checkSelect('brand','tbBrand','Please choose brand');


    if (isValid) {
        let updateProduct = new Product (id,name,price,screen,backCamera,frontCamera,img,desc,type);
        productSer.updateProductSer(updateProduct,id)
        .then((result) => {
            showProductList();
            swal({
                title: "Update Phone Success!",
                icon: "success",
                timer: 1000,    
              });
            document.querySelector("#myModal #btnClose").click();
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
    

// tìm kiếm sản phẩm theo tên
getELE('searchName').onkeyup = () => {
    let keyword = getELE('searchName').value;
    let newProduct = productSer.searchName(keyword);
    showTable(newProduct);
}



// Sắp xếp nhân viên
const ascSort = getELE("asc");
const descSort = getELE("desc");  

getELE("asc").addEventListener('click', () => {
    ascSort.style.display = "none";
    descSort.style.display = "block";
        productArr.sort((a,b) => {
            return a.price-b.price;
        });
        showTable(productArr);
});
    
getELE("desc").addEventListener("click", function () {
    descSort.style.display = "none";
    ascSort.style.display = "block";

    productArr.sort((a, b) => {
        return b.price - a.price;
    });
    showTable(productArr);
});

    
 




