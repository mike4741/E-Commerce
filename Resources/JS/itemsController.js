class ItemsController{

    constructor(){
        this.items =[];
     };
     

    
    addItem(name,description,imageUrl,price){
    
        const product = {name,description,imageUrl,price};                
      
        fetch('http://localhost:8080/api/items', {
              method: 'POST', // or 'PUT'
              headers: {
               'Content-Type': 'application/json',
                },
              
              body: JSON.stringify(product),
                })
                .then(response => response.json())
                .then(product => {
                console.log('Success:', product);
                })
                .catch((error) => {
                console.error('Error:', error);
                });
    };
               
    
   
     getItem(){
        fetch('http://localhost:8080/api/items')
        .then((response)=>{
            if(!response.ok){
               throw new error("network response error");
            }else{
                
                return response.json();
            }
        })
        .then(data =>{

            const html = data.map(item =>{
                return  '<div class="card h-100" >\n' +
            '    <img src="'+item.imageUrl +'" class="card-img-top" alt="'+item.name+'" width="600rem" height="350rem">\n' +
            '    <div class="card-body text-center">\n' +
            '        <h5 class="card-title">$ '+item.price+'</h5>\n' +
            '        <p class="card-text">'+'</p>\n' +
            '        <a href="#" class="btn btn-success btn-lg">add to cart</a>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<br/>'});

                
             document.querySelector("#list-items").insertAdjacentHTML("afterbegin",html)

        
        })
        .catch((error)=>console.error("FETCH ERROR", error));
        
    }

}   

    
 // console.log("call get item");
                // var delayInMilliseconds = 1000; //1 second

                // setTimeout(function() {
                //    getItem();
                // }, delayInMilliseconds);