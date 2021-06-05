window.onscroll = scroll;

function scroll() {
  var scrollTop = window.pageYOffset;
  if (scrollTop > 30){
      document.getElementById('nav-antes').id = 'nav-depois'
	  document.getElementById('nav-itens-antes').id = 'nav-itens-depois'
  } else {
      document.getElementById('nav-depois').id = 'nav-antes'
	  document.getElementById('nav-itens-depois').id = 'nav-itens-antes'
  }
}








