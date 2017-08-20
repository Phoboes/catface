// document.querySelector('#skull').children
let timer;

const animateSequencer = function( id ){
  let layer = document.querySelector( `#${ id }` );

  if( layer.querySelector( "[id^='linework']" ) ){
    // debugger
    animate( layer.querySelector( "[id^='linework']" ).querySelectorAll('path') );
    window.setTimeout( function(){
      // debugger
      animate( layer.querySelector( "[id^='tones']" ).querySelectorAll('path') );
    }, 800 );
  } else {
    animate( layer.querySelectorAll('path') );
  }
}

const animate = function( paths ){
  // let layer = id.querySelectorAll('path');
  // debugger
  for( let i = paths.length - 1; i >= 0; i-- ){
  // for( let i = 0; i < layer.length; i++ ){
    // debugger
    window.setTimeout( function(){
      // debugger
      // debugger
      paths[i].classList.add('animate');
      paths[i].style.animationPlayState = 'running';
      // let length = Math.round( layer[i].getTotalLength() );
      // layer[i].style.strokeDasharray = `${ length }`;
      paths[i].style.display = "block"
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
  } else if ( this.innerText === "all" ) {
    animateSequencer( 'skull' );
    timer = window.setTimeout( function(){
      animateSequencer( 'flesh' );
      timer = window.setTimeout( function(){
        animateSequencer( 'eyes' );
        animateSequencer( 'nose' );
      }, 900 );
    }, 5000 );

    timer = window.setTimeout( function(){
      animateSequencer( 'skin' );
    }, 10000 );

  } else {
    // clearBoard();
    animateSequencer( `${ this.innerText }` );
    if( this.innerText !== 'skull' ){
      timer = window.setTimeout( function(){
        animateSequencer( 'eyes' );
        animateSequencer( 'nose' );
      }, 1200 );
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
