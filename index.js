let openshopping = document.querySelector('.shopping');
let closeshopping = document.querySelector('.closeshopping');
let list = document.querySelector('.list');
let listcard = document.querySelector('.listcard');
let checkout = document.querySelector('.checkout');
let total = document.querySelector('.total')
let body = document.querySelector('body')
let quantity = document.querySelector('.quantity')

//adding event listeners to the open and closing shopping
openshopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
 closeshopping.addEventListener('click',()=>{
    body.classList.remove('active');
 })

//creating array for the products. 
let products =[
    {
        id: 1,
        name: 'FOOD 1',
        image: '11.PNG',
        price: '$1.00',
    },

    {
        id: 2,
        name: 'FOOD 2',
        image: '22.PNG',
        price: '$4.00',
    },

    {
        id: 3,
        name: 'FOOD 3',
        image: '3.PNG',
        price: '$4.00',
    },

    {
        id: 4,
        name: 'FOOD 4',
        image: '4.PNG',
        price: '$6.00',
    },

    {
        id: 5,
        name: 'FOOD 5',
        image: '5.PNG',
        price: '$10.00',
    },

    {
        id: 6,
        name: 'FOOD 6',
        image: '6.PNG',
        price: '$7.00',
    }
]

let listcards = []
// products.map(items)
function items(){
    products.forEach((value, key) =>{
    let newdiv =document.createElement ('div');
    newdiv.classList.add('items')
    newdiv.innerHTML =
     `
    <div class='food'>
        <div class="art ">
    <img src="11.PNG.webp" alt="">
    <div class ='title'>FOOD 1</div>
    <div class="price">$1.00</div>
    <button onClick='Addtocart(${key})'> Add To Cart</button>
        </div>

        <div class ='art'>
    <img src="13.PNG.webp" alt="">
    <div class ='title'>FOOD 2</div>
    <div class="price">$4.00</div>
    <button onClick='Addtocart(${key})'> Add To Cart</button>
        </div>

        <div class ='art'>
    <img src="3.PNG" alt="">
    <div class ='title'>FOOD 3</div>
    <div class="price">$5.00</div>
    <button onClick='Addtocart(${key})'> Add To Cart</button>
        </div>
</div>
<div class ='foods'>
        <div class ="art">
    <img src="4.PNG" alt="">
    <div class ='title'>FOOD 4</div>
    <div class="price">$6.00</div>
    <button onClick='Addtocart(${key})'> Add To Cart</button>
        </div>

        <div class ='art'>
    <img src="5.PNG" alt="">
    <div class ='title'>FOOD 5</div>
    <div class="price">$10.00</div>
    <button onClick='Addtocart(${key})'> Add To Cart</button>
        </div>
    
    <div class ='art'>
    <img src="6.PNG" alt="">
    <div class ='title'>FOOD 6</div>
    <div class="price">$7.00</div>
    <button onClick='Addtocart(${key})'> Add To Cart</button>
        </div>
    </div>
    `

    list.appendChild(newdiv)
    list.map(newdiv)
    })
}
items()

function Addtocart(key){
    if(listcards[key] == null){
        listcards[key] = products[key]
        listcards[key].quantity = 1
    }
    reloadcard();
}
function reloadcard() {
    listcard.innerHTML = '';
    let count = 0;
    let totalprice = 0;
    listcards.forEach((value, key)=>{
        totalprice = totalprice + value.price
        count = count + value.quantity

        if (value != null) {
            let newdiv = document.createElement('li')
            newdiv.innerHTML =`
                <div><img src="image/${value.image}"/></div>
                <div> ${value.name}</div>
                <div> ${value.price.toLocaleString()}</div>
                <div> ${value.quantity}</div
                <div>
                    <button onclick ="changequantity(${key},${value.quantity-1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button onclick ="changequantity(${key},${value.quantity-1})">+</button>

                </div>



            `
            listcard.appendChild(newdiv)
        }

    })
    total.innerText = totalprice.toLocaleString()
    quantity.innerText = count
}

function changequality(key,quantity){
    if (quantity === 0){
        delete listcards[key]
        }
  else{
    listcards[key].quantity = quantity
    listcards[key].price = quantity * products[key].price
  }
  reloadcard()
}

// let listcards = []
// const initapp = () => {
//     products.forEach((value, key) => {

//         let newdiv = document.createElement('div')//new element added
//         newdiv.classList.add('item');
//         newdiv.innerHTML = `
//         <img src="img/${value.images}">
//         <div class = 'title'>${value.name}</div>
//         <div class = 'price'>${value.price.tolocalString()} </div>
//         <button onclick = 'addToCard(${key})' Add to Card </button>
//         `
//         list.appendChild(newdiv)
//     })
// }