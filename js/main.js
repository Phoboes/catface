// document.querySelector('#skull').children
let timer;
const animate = function( id ){
  let layer = document.querySelector( `#${ id }` ).querySelectorAll('path');
  // debugger
  for( let i = layer.length - 1; i >= 0; i-- ){
  // for( let i = 0; i < layer.length; i++ ){
    // debugger
    window.setTimeout( function(){
      // debugger
      // debugger
      layer[i].classList.add('animate');
      layer[i].style.animationPlayState = 'running';
      // let length = Math.round( layer[i].getTotalLength() );
      // layer[i].style.strokeDasharray = `${ length }`;
      layer[i].style.display = "block"
    }, ( i ) );
    // console.log(layer[i])
  }
};

const clearBoard = function(){
  clearTimeout( timer );
  const paths = document.querySelectorAll('path');

  for (var i = 0; i < paths.length; i++) {
    // debugger
    paths[i].classList.remove('animate');
    paths[i].style.animationPlayState = 'paused';
    paths[i].style.display = "none";
    paths[i].style.fillOpacity = 0;
    paths[i].style.strokeDashArray = 2324;
    paths[i].style.strokeDashOffset = 2324;
  }
};

const setAnim = function(){
  // debugger
  if( this.innerText === 'clear' ){
    clearBoard();
  }  else {
    // clearBoard();
    animate( `${ this.innerText }` );
    if( this.innerText !== 'skull' ){
      timer = window.setTimeout( function(){
        animate( 'eyes' );
        animate( 'nose' );
      }, 900 );
    }
  }
};

window.onload = function(){
  // console.log("Loaded.")
  const paths = document.querySelector('#skull').querySelectorAll('path');
  const buttons = document.querySelectorAll('button');
  // animate( paths );

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener( 'click', setAnim, false );
  }

};
