
class ProductController {
    constructor(currentId = 0) {
        this.item = [];
        this._currentId = currentId
    }
    addItem(name, description, imgUrl) {
        let product = {
            _id: this._currentId++,
            _name: name,
            _description: description,
            _img: imgUrl,
            _createdAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
        }
        this.item.push(product);
    }

}
// let p = new ProductController()
// console.log(p.item)
// p.addItem("a0", "asd", "asd");
// p.addItem("a0", "asd", "asd");
// p.addItem("a0", "asd", "asd");
// p.addItem("a0", "asd", "asd");

// console.log(p.item)
// console.log(p.addItem());
// console.log(p.addItem("prod1,","decription about","https://item","asdf"));