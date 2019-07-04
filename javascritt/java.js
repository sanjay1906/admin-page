
            /*dropdown*/

$('.dropdown-trigger').dropdown({
    coverTrigger: false, 
    hover: true,
    autoTrigger: true,
    alignment: 'right',
    constrainWidth: true,
    container: null,
    id:'left',
    isScrollable:true,
    focusedIndex:200,
    isOpan:true,
    closeOnClick: true,
    inDuration: 300,
    outDuration:225,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  }
);


       /*sidenav*/

$('.sidenav').sidenav({
    edge: 'left',
    draggable: false,
    inDuration:0,
    outDuration:1000,
    onOpenStart:null,
    onOpenEnd:null, 
    onCloseStart:null,
    onCloseEnd:null,
    preventScrolling:true,
    isDragged:true,
    isOpen:false,

});
        
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
       
