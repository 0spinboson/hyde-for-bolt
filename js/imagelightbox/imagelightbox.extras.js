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

function captionOn(){
    var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' );
    if( description && description.length > 0 ){
        $( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
    }
}
function captionOff(){
    $( '#imagelightbox-caption' ).remove();
}
