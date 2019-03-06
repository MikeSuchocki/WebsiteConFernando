const navIcon = document.querySelector(".navIcon");



//to get the list of the navBar



navIcon.addEventListener("click", nav);

let count = 1;

function nav() { // function to open the nav

    count++

    if(count % 2 == 0){
    document.querySelector(".mobileNav").style.height="100%";
        }else{
            document.querySelector(".mobileNav").style.height="0";
        }
};
