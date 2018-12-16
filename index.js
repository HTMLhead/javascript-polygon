let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function calcSquare() {
  let height = document.getElementById('values-square-height').value
  let width = document.getElementById('values-square-width').value
  let result = height * width
  document.getElementById('square-result').innerHTML = '결과<br>' + result
}

function calcCircle() {
  let radius = document.getElementById('values-circle-radius').value
  let result = (radius * radius * Math.PI).toFixed(2)
  document.getElementById('circle-result').innerHTML = '결과<br>' + result
}

function calcTriangle() {
  let width = document.getElementById('values-triangle-width').value
  let height = document.getElementById('values-triangle-height').value
  let result = (width * height) / 2
  document.getElementById('triangle-result').innerHTML = '결과<br>' + result
}

function calcTrapezoid() {
  let height = document.getElementById('values-trapezoid-height').value
  let topline = Number(document.getElementById('values-trapezoid-topline').value)
  let bottomline = Number(document.getElementById('values-trapezoid-bottomline').value)
  let result = ((topline + bottomline) * height) / 2
  document.getElementById('trapezoid-result').innerHTML = '결과<br>' + result
}