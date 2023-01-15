function creditCardValidation(CreditCardNum){
    let MasterCard = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9][3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
        if (CreditCardNum.test(MasterCard))
        {
            return true;
        }
        else{
            alert("Please Input a Valid Credit Card Number.");
            return false;
        }
    }
function creditCardValidation(CreditCardNum){
    let Visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
        if (CreditCardNum.test(Visa))
        {
            return true;
        }
        else{
            alert("Please Input a Valid Credit Card Number.");
            return false;
        }
    }
    function creditCardValidation(CreditCardNum){
    let AmerXprs = /^3[47][0-9]{13}$/;
        if (CreditCardNum.test(AmerXprs))
        {
            return true;
        }
        else{
            alert("Please Input a Valid Credit Card Number.");
            return false;
        }
    }
