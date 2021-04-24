const contenedor = document.querySelector('.card-body');

const [...articulos] = contenedor.children

console.log(articulos);
let newClick =  '',
lastClick = '';

articulos.map(({ children }) => {
  // seleccionar la etiqueta details
  const [...detailsTag] = children;
  const contenedorEvento = detailsTag[0]

  contenedorEvento.addEventListener('click', e => {
    if(lastClick === ''){
      newClick = e.target.parentElement;
      lastClick = newClick;
    } else if(newClick !== e.target.parentElement) {
      lastClick = newClick;
      newClick = e.target.parentElement;
      lastClick.removeAttribute('open')
    }
    // console.log(newClick, lastClick);
  })
})