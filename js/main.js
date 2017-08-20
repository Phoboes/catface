let timer;

const animateSequencer = function( id ){
  let layer = document.querySelector( `#${ id }` );
  // Fuzzy selector due to illustrator name clashes on IDs. IE, #linework might be #linework_2_.
  if( layer.querySelector( "[id^='linework']" ) ){
    animate( layer.querySelector( "[id^='linework']" ).querySelectorAll('path') );
    window.setTimeout( function(){
      animate( layer.querySelector( "[id^='tones']" ).querySelectorAll('path') );
    }, 800 );
  } else {
    animate( layer.querySelectorAll('path') );
  }
}

const animate = function( paths ){
  for( let i = paths.length - 1; i >= 0; i-- ){
    window.setTimeout( function(){
      paths[i].classList.add('animate');
      paths[i].style.animationPlayState = 'running';
      paths[i].style.display = "block"
    }, ( i ) );
  }
};

const clearBoard = function(){
  clearTimeout( timer );
  const paths = document.querySelectorAll('path');

  for (var i = 0; i < paths.length; i++) {
    paths[i].classList.remove('animate');
    paths[i].style.animationPlayState = 'paused';
    paths[i].style.display = "none";
    paths[i].style.fillOpacity = 0;
    paths[i].style.strokeDashArray = 2324;
    paths[i].style.strokeDashOffset = 2324;
  }
};

const setAnim = function(){
  if( this.innerText === 'clear' ){
    clearBoard();
  } else if ( this.innerText === "all" ) {
    animateSequencer( 'skull' );
    timer = window.setTimeout( function(){
      animateSequencer( 'flesh' );
      timer = window.setTimeout( function(){
        animateSequencer( 'eyes' );
        animateSequencer( 'nose' );
      }, 1200 );
    }, 5000 );

    timer = window.setTimeout( function(){
      animateSequencer( 'skin' );
    }, 10000 );

  } else {
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
  const paths = document.querySelector('#skull').querySelectorAll('path');
  const buttons = document.querySelectorAll('button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener( 'click', setAnim, false );
  }

};
