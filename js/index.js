const online_lawyers = document.querySelector(".online-lawyers");

const popup = document.querySelector(".popup");

const popup_background = document.querySelector(".popup_background");

const popup_height = getComputedStyle(popup).height.replace("px", "");

const popup_width = getComputedStyle(popup).width.replace("px", "");

const w_height = window.innerHeight;

const w_width = window.innerWidth;

const scrollbarWidth = `${w_width - document.documentElement.clientWidth}`;

const popup_close = document.querySelector(".popup-close");


online_lawyers.addEventListener("click", function showPopup(){

    popup.style.left = `${((w_width - popup_width)/2)}px`;
    popup.style.top = `${((w_height - popup_height)/2) + scrollY}px`;
    popup_background.style.top = `${scrollY}px`;

    if(getComputedStyle(popup).display=="none") {

        popup_background.style.display ="block";
        popup.style.display = "block"; 
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;

    }
});

popup_close.addEventListener("click", function hidePopup(){


        document.body.style.overflow ="";
        document.body.style.paddingRight = ""
        popup_background.style.display ="none";
        popup.style.display = "none";   



});

