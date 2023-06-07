let searchBtn = document.getElementById('searchBtn')
let accountBtn = document.getElementById('accountBtn')
let cartButton = document.getElementById('cartBtn')


searchBtn.addEventListener('click', showSearchBar);
accountBtn.addEventListener('click', showLogoutSection);
cartButton.addEventListener('click', showCart);

// console.log(dummyData)
// console.log(dailyDeals)

dailyDealsLoader();
newLaunchesLoader();
bestOfBoatLoader();

function dailyDealsLoader(){
    let dailyDealsContainer = document.getElementById('daily-deals-container')
    const dailyDealsProduct = findProducts(dummyData, dailyDeals);

    for(var i = 0; i<dailyDealsProduct.length && i<4; i++){
        const proTile = createProductTile(dailyDealsProduct[i]);
        dailyDealsContainer.appendChild(proTile);
    }
}

function newLaunchesLoader(){
    const newLaunchesContainer = document.getElementById('new-launches-container')
    const newLaunchesProducts = findProducts(dummyData, newLaunches);

    for(var i = 0; i<newLaunchesProducts.length && i<4; i++){
        const proTile = createProductTile(newLaunchesProducts[i]);
        newLaunchesContainer.appendChild(proTile)
    }
}

function bestOfBoatLoader(){
    const bestOfBoatContainer = document.getElementById('best-of-container')
    const bestOfBoatProducts = findProducts(dummyData, bestOfBoat);

    for(var i = 0; i<bestOfBoatProducts.length && i<4; i++){
        const proTile = createProductTile(bestOfBoatProducts[i]);
        bestOfBoatContainer.appendChild(proTile)
    }
}


function findProducts(dummyData, catogory) {
    let output = dummyData.filter( (product) => {
        for(p of catogory){
            if(p === product.name){
                return 1;
            }
        }
        return 0;
    })
    return output;
}

function createProductTile(proDetails){

    const discountPercentage = findPercentage(proDetails.currPrice, proDetails.ogPrice);

    let colorSet = proDetails.imgLink[1] + " 500w, " + proDetails.imgLink[0] + " 1000w";



    const productTile = document.createElement('div');
    productTile.classList.add('product-tile');

    const tile = `
                        <div class="image-container" >
                            <img src="${proDetails.imgLink[0]}" srcset="${colorSet}" alt="">
                            <div class="usb">
                                <div >
                                    <div class="d-flex justify-content-center">
                                        <span class="fs-8 font-weight-bold" >${proDetails.attraction}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-3 ">
                            <div class="d-flex justify-content-between align-items-center fs-7">
                                <div>
                                    <i class="fa-solid fa-star clr-golden"></i>
                                    <span class='fs-9 font-weight-500'>${proDetails.rating}</span>
                                </div>
                    
                                <div class="d-flex align-items-center color-varient-container">
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-2">
                                <div class="product-details fs-7 ">
                                    <span class="font-weight-bold">${proDetails.name}</span>
                                    <div class="mt-1">
                                        <span class=" fs-6 font-weight-bold">₹${proDetails.currPrice}</span>
                                        <span class="fc-gray-500 text-line-through fs-7 font-weight-400">₹${proDetails.ogPrice}</span>
                                        <span class="success fs-9 font-weight-bold">${discountPercentage}% off</span>
                                    </div>
                                </div>
                                <div>
                                    <button class="add-to-cart-btn fs-7 font-weight-500">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        
    `
    
    
    productTile.innerHTML = tile;
    
    if(proDetails.usb != ""){
        // console.log(proDetails.attraction)
        const attration = `
            <div >
                <span>
                    <span><i class="fa-solid fa-bolt fs-8" style="color:rgb(255, 102, 0)"></i></span>
                    <span class="fs-8">${proDetails.usb}</span>
                </span>
            </div>
        `

        const attrationContainer = document.createElement('div');
        attrationContainer.classList.add('attraction')
        attrationContainer.innerHTML = attration;
        productTile.append(attrationContainer)
    }

    if(proDetails.colorVariants.length != 0){
        const colorPelletContainer = productTile.getElementsByClassName('color-varient-container')[0];
        
        
        // creating and appending the color pellets
        const innerContainer = document.createElement('div');
        colorPelletContainer.appendChild(innerContainer);
        innerContainer.classList.add('fs-8', 'font-weight-400', 'align-items-end', 'd-flex')

        let colors = "";
        for(let i = 0; i<3 && i<proDetails.colorVariants.length; i++){
            colors += `<span class="coller-pellet" style="background-color: ${proDetails.colorVariants[i]}"></span>`
        }

        innerContainer.innerHTML = colors;

        // the extra color indicator
        if(proDetails.colorVariants.length > 3){
            console.log("what the fuck")
            const extraColor = document.createElement('div');
            extraColor.classList.add('ms-1');
            extraColor.innerHTML = `<span>+${proDetails.colorVariants.length - 3}</span>`
            innerContainer.appendChild(extraColor)
        }
    }

    return productTile;


}


// to calcualte percentage;
function findPercentage(currPrice, ogPrice){
    const onePercentage = ogPrice / 100;
    const amountDiscount = ogPrice - currPrice;
    return  Math.ceil(amountDiscount / onePercentage);
}


// to implement
function showSearchBar(e){console.log(e)}
function showLogoutSection(e){console.log(e)}
function showCart(e){console.log(e)}