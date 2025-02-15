$(document).on('click','.inc',function(){
    let productId = $(this).closest('.qtyBox').find('.productId').val();
    console.log(productId);
    let productQty = $(this).closest('.qtyBox').find('.num-product');
    let productQtyInt = parseInt(productQty.val());
    // console.log(productQtyInt);
    if(!NaN(productQtyInt)){
        let updatedQty = productQtyInt ;
        console.log(updatedQty);

    }
});

$(document).on('click','.dec',function(){
    let productId = $(this).closest('.qtyBox').find('.productId').val();
    console.log(productId);
    let productQty = $(this).closest('.qtyBox').find('.num-product');
    let productQtyInt = parseInt(productQty.val());
    console.log(productQtyInt);
    if(!NaN(productQtyInt)){
            let updatedQty = productQtyInt ;
            console.log(updatedQty);
    }
})