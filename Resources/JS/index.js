const itemsController = new ItemsController();
const element = document.getElementById('list-items');
element.addEventListener('load',itemsController.getItem());