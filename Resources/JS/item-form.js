
const itemsController = new ItemsController();
const element = document.getElementById('list-items');

element.addEventListener('load',itemsController.getItem());


const newItemForm = document.querySelector('#newItemForm');

newItemForm.addEventListener('submit',(e)=>{
 e.preventDefault();

 const newItemName = document.querySelector('#itemName');
 const newItemDescription = document.querySelector('#itemDecription');
 const newItemImageUrl = document.querySelector('#imageURL');
 const newItemPrice = document.querySelector('#itemPrice');


 const _name = newItemName.value;
 const _description = newItemDescription.value;
 const _imgUrl = newItemImageUrl.value;
 const _price = newItemPrice.value;


 itemsController.addItem(_name,_description,_imgUrl,_price);

});


