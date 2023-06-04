class ProductDetails{
    constructor(name, ogPrice, currPrice, rating, colourArray, usb, attraction){
        this.id = Date.now();
        this.name = name;
        this.ogPrice = ogPrice;
        this.currPrice = currPrice;
        this.rating = rating;
        this.colorVariants = colourArray;
        this.usb = usb;
        this.attraction = attraction;

    }
}


