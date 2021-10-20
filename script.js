const getMake = async () => {
    try {
      const url = `http://makeup-api.herokuapp.com/api/v1/products.json/`;
      const res = await fetch(url);
      const makeup = await res.json();
      createMakeUpCard(makeup);
      // console.log(makeup);
    } catch (error) {
      console.log(error);
    }
  };
  
  function createMakeUpCard(makeup) {
    console.log(makeup);
    const html = makeup
      .map((user) => {
        return `
        <div class="made">
        <div class='makeup'>
        <p > <img src="${user.image_link}" alt="${user.name}" srcset="" class='img-container'></p>
        <div class="info">
        <p class="text"><b>Id </b> :${user.id} </p>
        <p class="type"><b>Brand </b>:  ${user.brand} </p>
        <p class="name"><b>Name </b>:  ${user.name} </p>
        <p class="number"><b>Price</b> :  ${user.price} </p>
        <p class="name"><b>Currency</b> : ${user.currency} </p>
        <p class="name"><b>Rating</b> : ${user.rating} </p>
       <p><b>Description </b>:  ${user.description}</p>
        </div>
        <p><b>Product-link </b>:  <a href="${user.product_link}" target="_blank"> ${user.product_link}</a></p>
        
        </div>
        
        </div>
        `;
      })
      .join("");
    console.log(html);
    document.querySelector("#app").innerHTML = html;
  }
  
  getMake();
