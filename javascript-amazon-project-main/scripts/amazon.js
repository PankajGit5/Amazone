
// const amgpro =[
//     {
// img: 'images/products/athletic-cotton-socks-6-pairs.jpg',
// name :'Black and Gray Athletic Cotton Socks - 6 Pairs',
// review :{
// star: 4.5,
// buyer :85
// }
// ,
// price: 1090
// },{
//     img: 'images/products/intermediate-composite-basketball.jpg"',
//     name : 'Intermediate Size Basketball',
//     review :{
//     star: 4,
//     buyer :127
//     }
//     ,
//     price: 2095
// },
// {
//     img: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//     name : 'Adults Plain Cotton T-Shirt - 2 Pack',
//     review :{
//     star: 4.5,
//     buyer :56, 
//     },
//     price : 799

// }
// ]

// amgpro.forEach(function(product) {
//     console.log(product.name);
//     console.log(product.price);
// });
let html = '';

products.forEach((inner)=> {
 html = html + ` <div class="product-container">
<div class="product-image-container">
  <img class="product-image"
    src="${inner.image}">
</div>

<div class="product-name limit-text-to-2-lines">
  ${inner.name}
</div>

<div class="product-rating-container">
  <img class="product-rating-stars"
    src="images/ratings/rating-${inner.rating.stars * 10}.png">
  <div class="product-rating-count link-primary">
    ${inner.rating.count}
  </div>
</div>

<div class="product-price">
  $${(inner.priceCents/ 100).toFixed(2)}
</div>

<div class="product-quantity-container">
  <select>
    <option selected value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
</div>

<div class="product-spacer"></div>

<div class="added-to-cart">
  <img src="images/icons/checkmark.png">
  Added
</div>

<button class="add-to-cart-button button-primary adcar" data-product-id="${inner.id}">
  Add to Cart
</button>
</div>`;


})

let vgg =  document.querySelector('.chgHTML');
vgg.innerHTML = html;

document.querySelectorAll('.adcar').forEach((button) => {
    button.addEventListener('click' , () => {
    const cartid = button.dataset.productId
        let matchitem;
        cart.forEach(item => {
        if( item.productId  === cartid)
        {
        matchitem = item;
        }
        });

        if(matchitem){
        matchitem.quantitycart  += 1;
        }

        else{
            cart.push({
                productId: cartid,
                quantitycart: 1
            });
        }
         cartquant = 0;
        cart.forEach( item  => {
        cartquant  += item.quantitycart
        });

        console.log(cartquant);
        console.log(cart);
        document.querySelector('.cartdom')
        .innerHTML = cartquant;
        });
       
});

