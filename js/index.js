fetch("https://fakestoreapi.com/products")
    .then(responde => responde.json())
    .then(data => {
        let productos = ``

        for(let producto of data){
            productos += `
            <div class="col-lg-3 col-sm-12 mb-3">
                <div class="card shadow bg-body-tertiary rounded" style="min-height: 600px;">
                    <img src="${producto.image}" class="card-img-top p-3 mx-auto" alt="..." >
                    <div class="card-body">
                        <h5 class="card-title">${producto.title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${producto.category}</h6>
                        <p class="card-text" style="font-size: smaller;">${producto.description}</p>
                    </div>
                  </div>
            </div> 
            `
        }
        document.getElementById("tabla").innerHTML = productos
        
    })