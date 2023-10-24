let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id:1,
        name:'baby stroller',
        Image:'baby stroller.jpg',
        price:23800
    },
    
    {
        id:2,
        name:'chess board',
        Image:'chess board.jpg',
        price:5460
    }, 
    
    {
        id:3,
        name:'Electric train',
        Image:'Electric train.jpg',
        price:4800
    },

    {
        id:4,
        name:'Jass drum',
        Image:'Jass drum.jpg',
        price:3980
    },

    {
        id:5,
        name:'Kids bicycle',
        Image:'Kids bicycle.jpg',
        price:26110
    },

    {
        id:6,
        name:'Led clock',
        Image:'Led clock.jpg',
        price:3560
    },

    {
        id:7,
        name:'Net ball',
        Image:'Net ball.jpg',
        price:3200
    },

    {
        id:8,
        name:'Oil dispenser',
        Image:'Oil dispenser.jpg',
        price:1400
    },

    {
        id:9,
        name:'Teddy bear',
        Image:'Teddy bear.jpg',
        price:9950
    },
]

let listCards = [];

function initApp(){
     products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
           <img src="images/${value.Image}"/>
           <div class="title">${value.name}</div>
           <div class="price">${value.price.toLocaleString()}</div>
           <button onclick="addToCart(${key})">Add To Cart</button>
    `;
        list.appendChild(newDiv);
     })
}
initApp();

function addToCart(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="images/${value.Image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            
            <div>
            <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
            <div class="count">${value.quantity} </div>
            <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>

        </div>`;

           listCard.appendChild(newDiv);
        }

    })

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}




function changeQuantity(key, quantity){
    if(quantity==0){
        delete listCards[key];
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
