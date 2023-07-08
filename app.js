const openShopping= document.querySelector('.shopping');
const closeShopping= document.querySelector('.closeShopping');
const body = document.querySelector('body')
 
const total = document.querySelector('.total');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
let scrollDiv = document.querySelector('.scrollDiv')

openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
scrollDiv.scrollTop=500;
let products =[
    {
        id:1,
        name:'PRODUCT NAME-1',
        price:1000
    },
    {
        id:2,
        name:'PRODUCT NAME-2',
        price:2000
    },
      {
        id:3,
        name:'PRODUCT NAME-3',
        price:3000
    },
    {
        id:4,
        name:'PRODUCT NAME-4',
        price:4000
    },
      {
        id:5,
        name:'PRODUCT NAME-5',
        price:5000
    },
    {
        id:6,
        name:'PRODUCT NAME-6',
        price:6000
    },
     {
        id:7,
        name:'PRODUCT NAME-7',
        price:7000
    },
    {
        id:8,
        name:'PRODUCT NAME-8',
        price:8000
    },
      {
        id:9,
        name:'PRODUCT NAME-9',
        price:9000
    },
    {
        id:10,
        name:'PRODUCT NAME-10',
        price:10000
    },
 
]
let cardList=[];
 const displayProduct =()=>{
    products.forEach((product,key)=>{

        const newDiv = document.createElement('div')
        newDiv.classList.add('box-Shadow')
        newDiv.innerHTML=`
             <h4>${product.id}</h4>
             <h6>${product.name}</h6>
             <h4>${product.price.toLocaleString()} <span class='bdt'>BDT </span> </h4>
             <button class="addToCartButton" onclick="addToCart(${key})"> Add To Cart</button>
            `
            list.appendChild(newDiv)

    })

    
 }
 displayProduct();
 function addToCart(key){
    if(cardList[key] == null){
        cardList[key]=products[key]
        cardList[key].quantity=1;
        console.log(cardList[key].quantity);
    }
    reloadCard()
 }
 function reloadCard(){
    listCard.innerHTML= ''
    total.innerHTML=0;
    let count =0
    let totalPrice=0;
           
    cardList.forEach((product,key)=>{
        totalPrice += product.price;
        count += product.quantity
             
    total.innerText= ` Total Price = ${totalPrice.toLocaleString()}`;
        document.querySelector('.quantity').innerText=count;

        console.log(product);
        if(product !=null){
          let newProductList= document.createElement('li')
          newProductList.classList.add('cart-styling')
          newProductList.innerHTML +=`
          <div class='cart-product'>  
             <div >
              
              <h6> ${product.name} </h6>
              <h6> Quantity ${product.quantity} </h6>
              <h4 class='bdt'> ${product.price.toLocaleString()} BDT </h4>

             </div>
              </div>
             <div class='myRemoveAndBuy'> 
             <div > 
                
                
              <button class='updateProductBtn' onclick='updateHandler(${key},${product.quantity -1} )'>Remove</button>
              
             </div>
              
              <div>
              <button class='buyBtn' onclick='buyProduct(${key})'> Buy Now </button>
             </div>
             
             
             </div>
             
            
          
          `
          listCard.appendChild(newProductList)
        }
       
    })
  
 }
 function changeQuantity(key, qty){
            console.log(key, qty);
 }
 
 function buyProduct(){
    alert('Developer is Sleeping 😊')
 }
 function updateHandler(key,quantity){
    
  if(quantity == 0){
    delete cardList[key];
  }
  else{
    cardList[key].quantity = quantity;
    console.log(cardList[key].quantity);
    cardList[key].price = quantity* products[key].price;
  }
     reloadCard()
 }
