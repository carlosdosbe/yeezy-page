const imgBox = document.querySelector('.imgBox');
const slides = imgBox.getElementsByTagName('img');
var i = 0;

function next()
{
  slides[i].classList.remove('active');
  i = (i + 1) % slides.length;
  slides[i].classList.add('active');
}

function prev()
{
  slides[i].classList.remove('active');
  i = (i - 1 + slides.length) % slides.length;
  slides[i].classList.add('active');
}

const contentBox = document.querySelector('.contentBox');
const textSlides = contentBox.getElementsByTagName('div');
var x = 0;

function nextText()
{
  textSlides[x].classList.remove('active');
  x = (x + 1) % textSlides.length;
  textSlides[x].classList.add('active');
}

function prevText()
{
  textSlides[x].classList.remove('active');
  x = (x - 1 + textSlides.length) % textSlides.length;
  textSlides[x].classList.add('active');
}
