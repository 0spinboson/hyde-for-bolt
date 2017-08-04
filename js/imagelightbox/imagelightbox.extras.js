/* lightbox for images */
function overlayOn(){
    $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
}
function overlayOff(){
    $( '#imagelightbox-overlay' ).remove();
}
function activityIndicatorOn(){ 
    $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
}
function activityIndicatorOff(){
    $( '#imagelightbox-loading' ).remove();
}
