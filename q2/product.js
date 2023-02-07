const { append } = require("express/lib/response");

let product = class Product{
    constructor(name, description, price, pic){
        this.name = name;
        this.description = description;
        this.price = price;
        this.pic = pic;
    }

    getPic(){
        return this.pic;
    }
    getDescription(){
        return this.description;
    }
    getPrice(){
        return this.price;
    }
    getPic(){
        return this.pic;
    }
}

module.exports = product;