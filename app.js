var buyPrice = document.querySelector("#buy-price");
var Quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var chkBtn = document.querySelector("#check");
var divOpt = document.querySelector("#output")

chkBtn.addEventListener("click", calculate);

function calculate(){
    var costPrice = (buyPrice.value *Quantity.value);
    var marketPrice = (currentPrice.value *Quantity.value);
   
    if (costPrice < marketPrice){
        var profit = marketPrice - costPrice;
        var percentageProfit = (profit/costPrice)*100;
  
        divOpt.innerText = "You gained "+ percentageProfit + "% Your Total Profit is Rs. " + profit + " 😍";
    }

    else if(costPrice > marketPrice){
        var loss =  costPrice - marketPrice ;
        var percentageLoss = (loss/costPrice)*100;
    
        divOpt.innerText = "You lost "+ percentageLoss + "% Your Total Loss is Rs. " + loss + " 😪";
    }
    

    else{
        divOpt.innerText = "The Stock's value has remained the same . No loss or profit 😑";
    }
}