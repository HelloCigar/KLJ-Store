
$(document).ready(function(){
    let decreaseQuantity = "#quantity button:nth-child(1)";
    let addQuantity = "#quantity button:nth-child(2)";
    let quantity = "#quantity input";

    $(decreaseQuantity).click(function(){
        let currentQuantity = $(quantity).val();
        if(currentQuantity > 1){
            $(quantity).val(--currentQuantity);
        }
    }

    $(addQuantity).click(function(){
        let currentQuantity = $(quantity).val();
        $(quantity).val(++currentQuantity);
    }
    
}

)