export const cart = [];
export function addTocart(cartquant){
    let matchitem;
    cart.forEach(carTitem => {
    if( carTitem.productId  === cartquant)
    {
    matchitem = carTitem;
    }
    });
  
    if(matchitem){
    matchitem.quantitycart  += 1;
    }
  
    else{
        cart.push({
          cartquant: cartquant,
            quantitycart: 1
        });
    }
  }