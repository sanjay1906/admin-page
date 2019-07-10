
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
       
/*kishan code here*/

let isOPen = false;

function openslidemenu() {
    isOPen = !isOPen;
    if (isOPen === true) {
        document.getElementById('side-menu').style.width = "120px";

        document.getElementById("cancel").innerHTML = "arrow_back";

    } else {
        document.getElementById('side-menu').style.width = "0px";

        document.getElementById("cancel").innerHTML = "menu";
    }
}

//first Dropdown Menu

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.drop-down');
    var instances = M.Dropdown.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.drop-menu');
    var instances = M.Dropdown.init(elems, {});
});