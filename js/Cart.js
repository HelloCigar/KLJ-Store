
$(document).ready(function(){
    let decreaseQuantity = ".quantity button:nth-child(1)";
    let addQuantity = ".quantity button:nth-child(3)";
    let quantity = ".quantity input";

    let currentQuantity = $(quantity).val();

    $(decreaseQuantity).click(function(){
        if(currentQuantity > 0){
            currentQuantity--;
            $(quantity).val(currentQuantity);
        }
    });

    $(addQuantity).click(function(){
        currentQuantity++;
        $(quantity).val(currentQuantity);
    });

    $(".removeButton").click(function(){
        $(this).parent().parent().parent().remove();
    })

})