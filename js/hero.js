const mainTitle = document.querySelector('.hero__title');

mainTitle.addEventListener("mouseover", function() {
  this.style.color = "rgb(140, 158, 138)"; 
  this.style.transition = "color 0.3s";
});

mainTitle.addEventListener("mouseout", function() {
  this.style.color = ""; 
});

const linkShop = document.querySelector('.hero__text a');

linkShop.addEventListener('mouseover', function() {
  this.style.fontSize = "30px";
  this.style.transition = "font-size 0.3s";
})

linkShop.addEventListener('mouseout', function() {
  this.style.fontSize = "";
})