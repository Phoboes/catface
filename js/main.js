window.onload = function(){
  // console.log("Loaded.")
  const paths = document.querySelectorAll('path');

  for( let i = 0; i < paths.length; i++ ){
    // debugger
    window.setTimeout( function(){
      // debugger
      paths[i].classList.add('animate');
    }, i );
    // console.log(paths[i])
  }
}
