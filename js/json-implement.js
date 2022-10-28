window.addEventListener('load', () => {
    fetchLeague();
    fetchColection();
    fetchSingleProduct();
    fetchPopularProducts()
});


// async function fetchPopularProducts(){
//     let res;
//     res = await fetch('https://camiestas-futbol.effectstudios.co/api/v1/popular-products');


//     let popularProd = await res.json();
//     console.log(popularProd.products.data[0].variants[0].price)

//     var output = document.getElementById('popular-products');
    
//     for (var i = 0; i < popularProd.products.data.length; i++){
//       var productList = 
//       `
//       <div class="product-item bg-light mb-4 mr-3">
//       <div class="product-img position-relative overflow-hidden">
//           <img class="img-fluid w-100" src="img/product-1.jpg" alt="">
//           <div class="product-action">
//               <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
//               <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
//               <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
//               <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
//           </div>
//           <div class="discount-sale">
//             <p>Save 67%</p>
//           </div>
//       </div>
//       <div class="text-left py-4 pl-4">
//           <a class="h6 text-decoration-none text-truncate" href="#">Product Name Goes Here</a>
//           <div class="d-flex text-left pl-0 mt-2">
//               <h5>$${popularProd.products.data[0].variants[0].price}</h5><h6 class="text-muted ml-4 py-1-5"><del>$123.00</del></h6>
//           </div>
//       </div>
//   </div>
      
//       `
    
//       output.innerHTML += productList;
  
//     }
// }

async function fetchLeague(){
    let res;
    res = await fetch('https://camiestas-futbol.effectstudios.co/api/v1/product-category');


    let output = await res.json();
    console.log(output.categories.data[0].content)


    var category1 = document.getElementById('country-leagues')
    for (var i = 0; i < output.categories.data.length; i++){
      var leagues = `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div class="cardd">
                            <img src="${output.categories.data[i].image}" alt="">
                            <div class="card-body">
                                <p class="textt">${output.categories.data[i].title}</p>
                            </div>
                        </div>
                    </div>`

     category1.innerHTML += leagues
  
    }
}

async function fetchColection(){
    let res;
    res = await fetch('https://camiestas-futbol.effectstudios.co/api/v1/product-category/parent');


    let output = await res.json();
    console.log(output.categories.data[9].sub_categories[0].title)


    var category2 = document.getElementById('other-collections')
    for (var i = 0; i < output.categories.data.length; i++){
      var collections = `<div class="col-lg-3 col-md-4 col-sm-6 pb-1 mb-3">
                            <div id="card" style="background-image: url(${output.categories.data[9].sub_categories[i].image});">
                                <div class="card-info">               
                                    <div class="card-info-section">
                                    <div class="card-info-button">${output.categories.data[9].sub_categories[i].title}</div>
                                    <div class="card-info-button"><i class="fa fa-chevron-right"></i></div>
                                    </div>
                                </div>
                                </div>
                        </div>`

     category2.innerHTML += collections
  
    }
}

async function fetchSingleProduct(){
    let res;
    res = await fetch('https://camiestas-futbol.effectstudios.co/api/v1/popular-products');


    let output = await res.json();
    console.log(output.products.data[1].variants[0].compare_at_price)


    var prodDetail = document.getElementById('product-detail')

      var prod = ` <div class="product-image col-sm-12 col-md-6 col-lg-5">
  <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img class="d-block w-100" src="${output.categories.data[9].sub_categories[i].title}" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${output.categories.data[9].sub_categories[i].title}" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${output.categories.data[9].sub_categories[i].title}" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${output.categories.data[9].sub_categories[i].title}" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="${output.categories.data[9].sub_categories[i].title}" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    <ol class="carousel-indicators">
      <li data-target="#carousel-thumb" data-slide-to="0" class="active"> <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg"
          class="img-fluid"></li>
      <li data-target="#carousel-thumb" data-slide-to="1"><img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg"
          class="img-fluid"></li>
      <li data-target="#carousel-thumb" data-slide-to="2"><img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg"
          class="img-fluid"></li>
      <li data-target="#carousel-thumb" data-slide-to="3"><img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg"
          class="img-fluid"></li>
      <li data-target="#carousel-thumb" data-slide-to="4"><img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg"
          class="img-fluid"></li>
    </ol>
  </div>
      </div>
      <div class="col-lg-7 h-auto mb-30">
          <div class="h-100 bg-secondary p-30">
          <div class="product-desc">

              <div class="desc-header">

                  <h1>Manchester United 21-22 Home Shirt</h1>

                  <div class="price">
                      <div>
                          <span class="price-new">£30.00</span>
                          <span class="price-old">£89.00</span>
                          <span class="price-discount">Save 67%</span>
                      </div>
                      <div>
                          <span class="add-fav btn btn-outline-dark"><i class="fa fa-heart"></i>&nbsp; Add to Favourites</span>
                      </div>
                  </div>
              </div>

              <div class="product-type">
                  <div class="item product-type-color mb-3">
                      <label class="col-md-5" for="product-type-color">Color</label>
                      <select id="product-type-color" name="color" class="col-md-12 mw-100">
                          <option>Any</option>
                          <option selected>Dark Steel</option>
                          <option>Matt Black</option>
                      </select>
                      <a href="#"class="col-md-5 btn btn-sm btn-dark ml-3 justify-content-center text-center">VIEW CHART</a>
                  </div>

                  <div class="item product-type-color mb-3">
                      <label class="col-md-5" for="product-type-color">Name</label>
                      <input id="product-type-color" name="color" class="col-md-12 mw-100" placeholder="What name would you want on the shirt?">
                  </div>

                  <div class="item product-type-color mb-3">
                      <label class="col-md-5" for="product-type-color">Number on Shirt</label>
                      <input id="product-type-color" name="color" class="col-md-12 mw-100" placeholder="Enter a number between 0 and 99">
                  </div>

                  <div class="item product-type-size mb-3">
                      <label  class="col-md-5" for="product-type-size">Patch</label>
                      <select id="product-type-size" name="size" class="col-md-12 mw-100">
                          <option selected disabled>Select a patch</option>
                          <option>40 cm</option>
                          <option>50 cm</option>
                      </select>
                  </div>

                  <div class="item product-type-qty">
                      <label for="product-type-qty" class="col-md-5">Qty</label>
                      <select id="product-type-qty" name="qty" class="col-md-2">
                          <option selected>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </select>
                  </div>

              </div>

              <div class="product-add-to-cart">
                  <button class="btn btn-sm btn-primary w-100">ADD TO CART <i class="fa fa-chevron-right"></i></button>
              </div>

           </div>
          </div>
      </div>`
                prodDetail.innerHTML += prod
  
    }



//     output.map(result => {
//         const htmlString = `<img src="${result.categories.data[0].image}" class="img">
//             <div class="info-display">
//                 <h5>Name: ${result.categories.data[0].content}</h5>
//                 <hr>
//                 <h6>Actor Name: <span>${result.name}</span></h6>
//                 <h6>Nickname: <span>${result.nickname}</span></h6>
//                 <h6>Birthday: <span>${result.birthday}</span></h6>
//                 <h6>Status: <span>${result.status}</span></h6>
//             </div>`;
            
    
//     let outputString = document.createElement('div');
//     outputString.classList.add('col-md-3', 'mb-3', 'img-info');
//     outputString.innerHTML = htmlString;
//     output.appendChild(outputString);
//     });
// }