class ProductDetails{
    constructor(name, ogPrice, currPrice, rating, colourArray, usb, attraction, imgLink){
        this.id = Date.now();
        this.name = name;
        this.ogPrice = ogPrice;
        this.currPrice = currPrice;
        this.rating = rating;
        this.colorVariants = colourArray;
        this.usb = usb;
        this.attraction = attraction;
        this.imgLink = imgLink;

    }
}

const dummyData = [];
dummyData.push(new ProductDetails("Airdopes 131", 2990, 999, 4.8, ["#000000","#d48f87", "#c5b898", "lightblue", "lightgreen", "blue", "green"],"Super Saver" ,"60 Hours Playback", "./assets/daily-deals/bd-1.jpg"))
dummyData.push(new ProductDetails("Rockerz 235 V2", 2990, 999, 4.8, [ "#000000", "#6b8e23", "#24249c", "blue"],"Super Saver" ,"8 Hours Playback", "./assets/daily-deals/bd-3.jpg"))
dummyData.push(new ProductDetails("Wave Lite", 6990, 1799, 4.9, ["#ff0000","#000000", "#001cff", "red", "blue"],"Super Saver" ,"Health Monitoring", "./assets/daily-deals/bd-4.jpg"))
dummyData.push(new ProductDetails("Storm Call",7999 , 1799, 4.7, ["#000000", "#ff0000", "#24249c"],"Super Saver" ,"BT Calling", "./assets/daily-deals/bd-2.jpg"))

dummyData.push(new ProductDetails("Ultima Cennect Max", 8999, 2199, "Be the first to review", ["#000000", "#1c2238", "#a08e80"],"New Launch" ,"BT Calling", "./assets/new-launches/p1.jpg"))
dummyData.push(new ProductDetails("Ultima Call Max", 8499, 2499, "Be the first to review", ["#000000", "#939393", "#e2cec0"],"New Launch" ,"BT Calling", "./assets/new-launches/p2.png"))
dummyData.push(new ProductDetails("Rockerz 255 touch",2999 ,1499, "Be the first to review", ["#000000", "#003eff", "#79afb4"],"New Launch" ,"30 HOURS PLAYBACK", "./assets/new-launches/p3.png"))
dummyData.push(new ProductDetails("Aavante Bar Chord", 21999, 9499, "Be the first to review", ["#000000", "#003eff", "#79afb4"],"New Launch" ,"Wireless Subwoofer", "./assets/new-launches/p4.png"))

dummyData.push(new ProductDetails("Immortal 121", 3499, 1699, "4.8", ["#000000", "#d7d7d7"],"" ,"40 Hours Playback", "./assets/best-of-boat/b1.gif"))
dummyData.push(new ProductDetails("Airdopes 115", 2990, 1499, "4.9", ["#d7d7d7", "#003EFF", "#DC3545"],"Super Saver" ,"Clear Callingg", "./assets/best-of-boat/b2.jpg"))
dummyData.push(new ProductDetails("Airdopes 131 PRO", 2990, 1299, "4.9", ["#393939", "#b77a8d", "#003EFF"],"" ,"45 Hours Playback", "./assets/best-of-boat/b3.webp"))
dummyData.push(new ProductDetails("Airdopes 161", 2490, 1099, "4.9", ["#657286","#d7d7d7", "#000000"],"" ,"17 Hours Playback", "./assets/best-of-boat/b4.jpg"))


const dailyDeals = ["Airdopes 131","Storm Call", "Rockerz 235 V2" ,"Wave Lite"]
const newLaunches = ["Ultima Cennect Max", "Ultima Call Max","Rockerz 255 touch","Aavante Bar Chord"]
const bestOfBoat = ["Immortal 121","Airdopes 115","Airdopes 131 PRO","Airdopes 161"]

