

/*    main script file....
      the code are divided in to modules i.e functions based on their functionality
      and they are called immediately after the page has finished loading (in the window.onload 
      function)
 */


 window.onload = () => {
 
       goldenStorePage.sideBarFunc();
       goldenStorePage.closeSideBarFunc();
       goldenStorePage.pageAnimationFunc();
       goldenStorePage.advertImages();
       goldenStorePage.purchaseContainer();
       goldenStorePage.selectItemSize();
 }

 // all global variables

 let navIcon = document.querySelector('.fa-bars'),
     sideBar = document.querySelector('nav'),
     closeSideBar = document.querySelector('.close > span'),
     pageAnimation = document.querySelector('.animation');
    
    class goldenStorePage{

 // display sidebar when navigation icon is clicked.

           static sideBarFunc(){
                 navIcon.addEventListener('click', () => {
                       sideBar.style.display = 'block';
                 })
           }

//  close side bar when cancel icon is clicked.

           static closeSideBarFunc(){
                 closeSideBar.addEventListener('click', () => {
                          sideBar.style.display = 'none'             
                 })
           }

// page animation function

            static pageAnimationFunc(){
                 let plane = document.querySelector('.fa-plane'),
                     freeShipping = document.querySelector('.free-shipping'),
                     shopNow = document.querySelector('.animation-shop-now'),
                     counter = 0  ;
               
                 // time in milli seconds

                         let time = 20 ;
                         setInterval( () => {
                                        counter += 0.2 ;
                                        plane.style.left = `${counter}%`;
                                            if(counter >= 130){
                                                  freeShipping.style.display = 'block'
                                             }
                                             if(counter >= 160){
                                                   freeShipping.style.display = 'none'
                                                   shopNow.style.display = 'block'
                                             }
                                            if(counter > 190){
                                                   shopNow.style.display = 'none'
                                                   counter = 0 ;
                                            }
                           }, time)
                 }

// advert image.. a function that automatically change the advert image in the page..

             static advertImages(){
                    let  imageSrc = [
                                      './goldenstoreimages/advert1.png',
                                       './goldenstoreimages/advert2.png',
                                       './goldenstoreimages/advert3.png',
                                       './goldenstoreimages/advert4.png',
                                       './goldenstoreimages/advert5.png'
                                    ];
                        let imageIndex = 0 ;
                        let advert = document.querySelector('.advert-images');
                        setInterval( () => {
                              imageIndex++ ;
                           
                              // return to the first image when the array reaches last the element

                               if ( imageIndex > imageSrc.length - 1) {
                                      imageIndex = 0 ;
                               }  
                              advert.src = `${imageSrc[imageIndex]}` ;        
                        },10000);
             }

// purchase container function

             static  purchaseContainer(){

 //multiple variable declaration in one declaration keyword

                             let container = document.createElement('div'),
                             pageFooter = document.querySelector('footer'),
                             body = document.body ,
                             purchaseData = document.createElement('div');

// set an id to the elements. which are styled in the main css file

            purchaseData.id = 'purchase-data'
             container.id = "purchase-section";
             purchaseData.innerHTML = `
                <div class="purchase-header">
                        <span class="fas fa-arrow-left"> </span>
                        <h2> purchase item </h2>
                </div>
                <div class="purchase-body"> 
                      <div class="item-container">
                         <img class="item-image" src="" alt="item image" />
                      </div>    
                      <div class="item-info" >
                           <select class="item-size" name="item-size">
                               <option value = ""> select size</option>
                               <option value = "200x200">200 x 200 inch</option>
                               <option value = "200x300">200 x 300 inch</option>
                               <option value = "200x400">200 x 400 inch</option>
                               <option value = "400x600">400 x 600 inch</option>
                               <option value = "500x500">500 x 500 inch</option>
                               <option value = "500x600">500 x 600  inch</option>
                               <option value = "600x600">600 x 600   inch</option>
                               <option value = "600x500">600 x 500  inch</option>
                           </select>
                           <br>
                           <p id="item-name">beach collar shirt </p>
                           <p id="item-price"> <del>$16.55</del>   $13.74</p>
                           <button class="buy"> Buy </button>
                      </div>
               </div>
                      <h2 class="related-item-header">related items </h2>
                      <div class="related-item">   
                          <img src="./goldenstoreimages/pd20.jpg" alt="item image"/>
                          <img src="./goldenstoreimages/pd2.jpg" alt="item image"/>
                          <img src="./goldenstoreimages/pd40.jpg" alt="item image"/>
                          <img src="./goldenstoreimages/pd29.jpg" alt="item image"/>
                          <img src="./goldenstoreimages/pd41.jpg" alt="item image"/>
                          <img src="./goldenstoreimages/pd42.jpg" alt="item image"/>
                          <img src="./goldenstoreimages/pd30.jpg" alt="item image"/>
                      </div>   
                </div> ` ;

// add the purchased items to a parent container

          container.appendChild(purchaseData)
// add the purchase container before the page footer.

          body.insertBefore(container,pageFooter);

//an anonymous function to display the product card when the user click the product of his choice

    ( function (){
            let addToCard = document.querySelectorAll('.add-to-card'),
                itemsPrice = document.querySelectorAll('.product > .price') ,
                itemsName = document.querySelectorAll('.product > .product-name') ,
                itemsImage = document.querySelectorAll('.product > img'),
                allRelatedImages = document.querySelectorAll('.related-item > img'),
                purchasedItemImage = document.querySelector('.item-image'),
                purchasedItemName = document.querySelector('#item-name'),
                purchasedItemPrice = document.querySelector('#item-price') ;
               
                 // an array of entire page product items.

                let pageProductlist = [];

        // looped through all add to card buttons and attach onclick event to them.

        for(let i = 0 ; i < addToCard.length ; i++){
               addToCard[i].addEventListener('click' , function (){
     
      //  set the price,name,image of the purchased product

                   purchasedItemImage.src = itemsImage[i].src ;
                   purchasedItemName.innerHTML = itemsName[i].innerHTML;
                   purchasedItemPrice.innerHTML = itemsPrice[i].innerHTML;

// filled the above array with page product items.

         for(let i = 0 ; i < itemsImage.length ; i++ ){
                   pageProductlist.push({
                        'item name': itemsName[i].innerHTML ,
                        'item price': itemsPrice[i].innerHTML ,
                        'item image' : itemsImage[i].src
                   })
             };

/* looped through all related item image and give them a random values by every time
   add-to-card button was clicked and display them if user decides and click them */
       
       for(let i = 0 ; i < allRelatedImages.length ; i++ ){

            //  get random product  as related items

  let randomProduct = Math.floor( Math.random() * itemsImage.length) + 0 ;
             allRelatedImages[i].src = pageProductlist[randomProduct]['item image'];
             allRelatedImages[i].addEventListener('click', function (){
                    purchasedItemImage.src = allRelatedImages[i].src;
                    purchasedItemName.innerHTML = pageProductlist[randomProduct]['item name'] ;
                    purchasedItemPrice.innerHTML = pageProductlist[randomProduct]['item price'] ;
             })
       }  

        // prevent the entire page from scrolling if the product card is displayed.

        document.body.style.overflow = 'hidden'
        // display the purchase container 
        document.querySelector('#purchase-section').style.display = 'flex';
                      
               })
        }
    }());

//close the product card if the left arrow is clicked

   document.querySelector('.fa-arrow-left').addEventListener('click', () => {
             document.querySelector('#purchase-section').style.display = 'none';
             document.body.style.overflow = 'auto'        
                 }) ;             
          };

 // a function to allow user to select size of an item bought in the product card.

   static selectItemSize(){
               let itemSize = document.querySelector('.item-size')

// change the size of the product image if user select his choice in the item size dropdown menu

              itemSize.addEventListener('change', function () {

              //the item image in the left side of the purchase container

          let itemImage = document.querySelector('.item-image');
            switch(this.value){
                case '' :
                       itemImage.style.transform = 'scale(1,1)';
                       break;
                case '200x200' : 
                       itemImage.style.transform = 'scale(0.7,0.7)';
                       break;
                case '200x300' : 
                       itemImage.style.transform = 'scale(0.77,0.7)';
                       break;
                case '200x400' : 
                       itemImage.style.transform = 'scale(0.87,0.7)';
                       break;
                case '400x600' : 
                       itemImage.style.transform = 'scale(1,0.7)';
                       break;
                case '500x500' : 
                       itemImage.style.transform = 'scale(1,1)';
                       break;
                case '500x600' : 
                       itemImage.style.transform = 'scale(1.1,0.9)';
                       break;    
                case '600x600' : 
                       itemImage.style.transform = 'scale(1.1,1.1)';
                       break;       
                case '600x500' : 
                       itemImage.style.transform = 'scale(1,1.1)';
                       break;            
            }
     })

      }; 
  } // class end
