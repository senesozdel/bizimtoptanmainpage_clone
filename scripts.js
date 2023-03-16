// JavaScript Document
var images = document.getElementsByClassName("images");
var index = 0;
slide();
function slide() {
  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  for (i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }
  images[index].classList.add("active");
}
function forward() {
  index++;
  slide();
}
function back() {
  index--;
  slide();
}
function stop() {
  clearInterval(timefunction);
}
function start() {
  timefunction = setInterval(forward, 3500);
}
timefunction = setInterval(forward, 3500);

const sliderActions = (containerNames) => {
  containerNames.forEach((className) => {
    const imgContainer = document.querySelector(`.${className}`);
    let section = 0;

    function scrollLeft() {
      imgContainer.scrollBy(-304, 0);
      if (section > 0) {
        section--;
        imgContainer.scrollBy(
          section * (window.innerWidth - 217) + section * 10,
          0
        );
      }
    }

    function scrollRight() {
      imgContainer.scrollBy(304, 0);
      if (section < 2) {
        section++;
        imgContainer.scrollBy(
          section * (window.innerWidth - 217) + section * 10
        );
      }
    }

    let Arrowleft = document.getElementById("left-" + className);
    let ArrowRight = document.getElementById("right-" + className);

    Arrowleft.addEventListener("click", scrollLeft);
    ArrowRight.addEventListener("click", scrollRight);
  });
};

const prepareProductSlider = (data, containerName) => {
  var products = "";

  data.forEach(function (product) {
    products += `
	  <div class="product-card">
	  <div class="product-content">
		<img
		  src=${product.imageUrl}
		/>
		<div class="product-discount">Sepette %20 indirim</div>
		<h2>${product.name}</h2>
		<p>${product.price}</p>
	  </div>
	  <button>Sepete Ekle</button>
	</div>
	  `;
  });

  document.querySelector(containerName).innerHTML = products;
};

///datas
const specialForBizimToptan = [
  {
    name: "Calgon Kireç Önleyici 500 g",
    price: "38,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1788881_0.jpeg",
  },
  {
    name: "Besler Ayçiçek Yağı Teneke 5 L",
    price: "174,90 TL",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1816283_0.jpeg",
  },
  {
    name: "Ülker Bizim Makarna Burgu 500 g",
    price: "7,75 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1776248_0.png",
  },
  {
    name: " Balküpü Gold Küp Şeker 360'lı 1 kg",
    price: "26,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1813602_0.png",
  },
  {
    name: "Mehmet Efendi Türk Kahvesi 25x100 g",
    price: "481,25 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1813391_0.jpeg",
  },
  {
    name: " Alpella Harby Karamelli Bisküvi 25 g 24'lü",
    price: "46,80 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1545495_0.png",
  },
  {
    name: " Çaykur Edt Altınbaş Çay 2 kg ",
    price: "179,90 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1813215_0.jpeg",
  },
  {
    name: " Ülker Biskrem Kakaolu Bisküvi 100 g 18'li ",
    price: "93,60 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1789704_0.jpeg",
  },
];

const popularProducts = [
  {
    name: "Dolphin Nitril Pudrasız Siyah L Eldiven Adet",
    price: "114,96 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
     "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1790478_0.jpeg",
  },
  {
    name: "Ülker Bizim Un Baklavalık ve Böreklik 5 kg",
    price: "66,90 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1778334_0.png",
  },
  {
    name: "Falım Nane Aromalı Stick Sakız 5'li 20 Adet",
    price: "37 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1545397_0.png",
  },
  {
    name: " Ülker Bizim Yerli Osmancık Pirinç 1 kg ",
    price: "30,90 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1629699_0.png",
  },
  {
    name: "Ülker Çizi Kraker 70 g 24'lü",
    price: "86,40 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1547005_0.png",
  },
  {
    name: "Besler Toz Şeker 3 kg",
    price: "72,90 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1813549_0.jpeg",
  },
  {
    name: " Lipton Doğu Karadeniz Demlik Poşet Çay 100x3,2 g",
    price: "52,45 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1778263_0.jpeg",
  },
  {
    name: " Kristal Riviera Zeytinyağı Cam 1 L",
    price: "90,45 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1777246_0.jpeg",
  },
  {
    name: "Kristal Natural Sızma Dolgun Güçlü Zeytinyağı Cam 1 L",
    price: "104,90 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1786183_0.jpeg",
  },
  {
    name: " Red Bull Enerji İçeceği 355 ml 24'lü",
    price: "450 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1546566_0.jpeg",
  },
];

const specialForYou = [
  {
    name: "Calgon Kireç Önleyici 500 g",
    price: "38,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1788881_0.jpeg",
  },
 {
    name: "Besler Ayçiçek Yağı Teneke 5 L",
    price: "174,90 TL",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1816283_0.jpeg",
  },
  {
    name: "Ülker Bizim Makarna Burgu 500 g",
    price: "7,75 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1776248_0.png",
  },
  {
    name: " Balküpü Gold Küp Şeker 360'lı 1 kg",
    price: "26,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1813602_0.png",
  },
  {
    name: "Mehmet Efendi Türk Kahvesi 25x100 g",
    price: "481,25 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1813391_0.jpeg",
  },
  {
    name: " Alpella Harby Karamelli Bisküvi 25 g 24'lü",
    price: "46,80 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1545495_0.png",
  },
  
  {
    name: "Calgon Kireç Önleyici 500 g",
    price: "38,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1788881_0.jpeg",
  },
];

let productsShowcase = [
  {
    name: "Calgon Kireç Önleyici 500 g",
    price: "38,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1788881_0.jpeg",
  },
 {
    name: "Besler Ayçiçek Yağı Teneke 5 L",
    price: "174,90 TL",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1816283_0.jpeg",
  },
  {
    name: "Ülker Bizim Makarna Burgu 500 g",
    price: "7,75 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1776248_0.png",
  },
  {
    name: " Balküpü Gold Küp Şeker 360'lı 1 kg",
    price: "26,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1813602_0.png",
  },
  {
    name: "Mehmet Efendi Türk Kahvesi 25x100 g",
    price: "481,25 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1813391_0.jpeg",
  },
  {
    name: " Alpella Harby Karamelli Bisküvi 25 g 24'lü",
    price: "46,80 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1545495_0.png",
  },
  {
    name: "Calgon Kireç Önleyici 500 g",
    price: "38,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1788881_0.jpeg",
  },
  {
    name: "Calgon Kireç Önleyici 500 g",
    price: "38,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1788881_0.jpeg",
  },
];

const bestSellers = [

	{
    name: "Ülker Çizi Kraker 70 g 24'lü",
    price: "86,40 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1547005_0.png",
  },
  {
    name: "Besler Toz Şeker 3 kg",
    price: "72,90 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1813549_0.jpeg",
  },
  {
    name: " Lipton Doğu Karadeniz Demlik Poşet Çay 100x3,2 g",
    price: "52,45 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1778263_0.jpeg",
  },
  {
    name: " Kristal Riviera Zeytinyağı Cam 1 L",
    price: "90,45 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1777246_0.jpeg",
  },
{
    name: "Dolphin Nitril Pudrasız Siyah L Eldiven Adet",
    price: "114,96 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
     "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1790478_0.jpeg",
  },
  {
    name: "Ülker Bizim Un Baklavalık ve Böreklik 5 kg",
    price: "66,90 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1778334_0.png",
  },
];

const newProducts = [

	{
    name: "Calgon Kireç Önleyici 500 g",
    price: "38,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1788881_0.jpeg",
  },
 {
    name: "Besler Ayçiçek Yağı Teneke 5 L",
    price: "174,90 TL",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1816283_0.jpeg",
  },
  {
    name: "Ülker Bizim Makarna Burgu 500 g",
    price: "7,75 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1776248_0.png",
  },
  {
    name: " Balküpü Gold Küp Şeker 360'lı 1 kg",
    price: "26,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1813602_0.png",
  },
  {
    name: "Mehmet Efendi Türk Kahvesi 25x100 g",
    price: "481,25 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1813391_0.jpeg",
  },
  {
    name: " Alpella Harby Karamelli Bisküvi 25 g 24'lü",
    price: "46,80 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1545495_0.png",
  },
 
  {
    name: "Calgon Kireç Önleyici 500 g",
    price: "38,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1788881_0.jpeg",
  },
];

const opportunityProducts = [

	{
    name: "Calgon Kireç Önleyici 500 g",
    price: "38,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1788881_0.jpeg",
  },
 {
    name: " Kristal Riviera Zeytinyağı Cam 1 L",
    price: "90,45 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1777246_0.jpeg",
  },
{
    name: "Dolphin Nitril Pudrasız Siyah L Eldiven Adet",
    price: "114,96 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
     "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1790478_0.jpeg",
  },
  {
    name: "Ülker Bizim Un Baklavalık ve Böreklik 5 kg",
    price: "66,90 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1778334_0.png",
  },
  {
    name: "Mehmet Efendi Türk Kahvesi 25x100 g",
    price: "481,25 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1813391_0.jpeg",
  },
  {
    name: " Alpella Harby Karamelli Bisküvi 25 g 24'lü",
    price: "46,80 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/400/400/Content/Images/Originals/1545495_0.png",
  },
  {
    name: "Calgon Kireç Önleyici 500 g",
    price: "38,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/980/980/Content/Images/Originals/1796696_0.jpeg",
  },
  {
    name: "Calgon Kireç Önleyici 500 g",
    price: "38,95 TL",
    discount: "Sepette %20 indirim",
    imageUrl:
      "https://img-bizimtoptan.mncdn.com/mnresize/980/980/Content/Images/Originals/1796696_0.jpeg",
  },
];

const filters = [
  {
    key: "bestSellers",
    label: "Çok Satanlar",
  },
  {
    key: "newProducts",
    label: "Yeni Çıkan Ürünler",
  },
  {
    key: "opportunityProducts",
    label: "Fırsat Ürünleri",
  },
];

const preparePage = () => {
  let tabs = "";

  filters.forEach(function (filter) {
    tabs += `<div id=${filter.key} class="tab">${filter.label}</div>`;
  });

  document.querySelector(".filters").innerHTML = tabs;

  prepareProductSlider(specialForBizimToptan, ".special-for-bizim-toptan");
  prepareProductSlider(popularProducts, ".popular-products");
  prepareProductSlider(specialForBizimToptan, ".special-for-you");
  prepareProductSlider(productsShowcase, ".products-showcase");

  sliderActions([
    "special-for-bizim-toptan",
    "popular-products",
    "special-for-you",
    "products-showcase",
  ]);
};

preparePage();

/// Products Showcase
let selectedTabKey = "newProducts";
let tabs = document.querySelectorAll(".tab");
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    let prevActiveTab = document.querySelector(".tab-active");
    const tabId = event.target.id;
    if (tabId === "bestSellers") productsShowcase = bestSellers;
    else if (tabId === "newProducts") productsShowcase = newProducts;
    else productsShowcase = opportunityProducts;

    let activeTab = document.getElementById(tabId);
    activeTab.classList.add("tab-active");
    if (prevActiveTab) prevActiveTab.classList.remove("tab-active");
    prepareProductSlider(productsShowcase, ".products-showcase");
  });
}
