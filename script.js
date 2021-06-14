window.onscroll = scroll;

function scroll() {
  var scrollTop = window.pageYOffset;
  if (scrollTop > 30){
      document.getElementById('nav-before').id = 'nav-after'
	  document.getElementById('nav-itens-before').id = 'nav-itens-after'
  } else {
      document.getElementById('nav-after').id = 'nav-before'
	  document.getElementById('nav-itens-after').id = 'nav-itens-before'
  }
}