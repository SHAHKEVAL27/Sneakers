const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const sliderItems = document.querySelectorAll(".sliderItem");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    menuItem.classList.add("active");
  });
});

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

function search() {
  const searchInput = document.querySelector(".searchInput");
  const searchResults = document.getElementById("searchResult");
  const navItems = document.querySelectorAll(".menuItem");
  const sliderItems = document.querySelectorAll(".sliderItem");

  searchResults.innerHTML = "";

  const matchingProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  console.log(matchingProducts, "matchingProducts");
  if (matchingProducts.length > 0 && searchInput.value.trim() !== "") {
    matchingProducts.forEach((product) => {
  const brandTitle = document.createElement("p");
  brandTitle.classList.add("brandTitle");
  searchResults.appendChild(brandTitle);

  const additionalText = document.createTextNode("You are looking for  ");
  brandTitle.appendChild(additionalText);

  const brandName = document.createElement("span");
  brandName.style.color = "blue";
  brandName.textContent = `"${product.title}"`;
  brandTitle.appendChild(brandName);
});


    sliderItems.forEach((item) => {
      const title = item.textContent.toLowerCase();
      if (
        matchingProducts.some(
          (product) => product.title.toLowerCase() === title
        )
      ) {
        item.classList.add("active");
        searchInput.value = item.textContent;
      } else {
        item.classList.remove("active");
      }
    });
    navItems.forEach((item, index) => {
      const title = item.textContent.toLowerCase();
      if (
        matchingProducts.some(
          (product, index) => product.title.toLowerCase() === title
        )
      ) {
        item.classList.add("active");
        searchInput.value = item.textContent;
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColors.forEach((color, index) => {
          color.style.backgroundColor = choosenProduct.colors[index].code;
        });
      } else {
        item.classList.remove("active");
      }
    });
  } else {
    const notFoundMsg = document.createElement("p");
    notFoundMsg.textContent = "Search result not found";
    notFoundMsg.classList.add("notFoundMessage");
    searchResults.appendChild(notFoundMsg);
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
  }
}

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
