$(document).on('click','.inc',function(){
    let productId = $(this).closest('.qtyBox').find('.productId').val();
    console.log(productId);
    let productQty = $(this).closest('.qtyBox').find('.num-product');
    let productQtyInt = parseInt(productQty.val());
    // console.log(productQtyInt);
    if(!isNaN(productQtyInt)){
        let updatedQty = productQtyInt ;
        console.log(updatedQty);
        updateIncDec(productId,updatedQty);
        updatePrice($(this),updatedQty);
    }
});
$(document).on('click','.dec',function(){
    let productId = $(this).closest('.qtyBox').find('.productId').val();
    console.log(productId);
    let productQty = $(this).closest('.qtyBox').find('.num-product');
    let productQtyInt = parseInt(productQty.val());
    // console.log(productQtyInt);
    if(!isNaN(productQtyInt)){
            let updatedQty = productQtyInt ;
            console.log(updatedQty);
            updateIncDec(productId,updatedQty);
            updatePrice($(this),updatedQty);
    }
});

function  updateIncDec(proId , proQty){
    $.ajax({
        url :  "shoping-cart.php",
        type : "POST",
        data : {
            "qtyIncDec" : true,
            "productId" : proId,
            "productQty" : proQty
        },
        success : function(response){
                    // console.log(response)
        }
    })    

}
function updatePrice(element , qty){
    let price = element.closest('.table_row').find('.column-3').text();
    console.log(price);
    let totalAmount = element.closest(".table_row").find('.column-5');
    totalAmount.text(price*qty);
}