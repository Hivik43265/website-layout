const online_lawyers = document.querySelector(".online-lawyers");

const popup = document.querySelector(".popup");

const popup_background = document.querySelector(".popup_background");

const popup_height = getComputedStyle(popup).height.replace("px", "");

const popup_width = getComputedStyle(popup).width.replace("px", "");

const w_height = window.innerHeight;

const w_width = window.innerWidth;

const scrollbarWidth = `${w_width - document.documentElement.clientWidth}`;

const popup_close = document.querySelector(".popup-close");

const popup_body = document.querySelector(".popup-body");

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

        popup_body.style.animationName ="popup-inner-transformate-reverse";
        popup.style.animationName ="popup-transformate-reverse";
       
        setTimeout(function(){

            document.body.style.overflow =""; 
            document.body.style.paddingRight = ""

            popup_background.style.display ="none";
            popup.style.display = "none";  

            popup.style.animationName ="popup-transformate";
            popup_body.style.animationName ="popup-inner-transformate";

        }, 700);
});


const input = document.querySelectorAll("#popup-input");

const feedback_button = document.querySelectorAll(".feedback-button");

popup_close.addEventListener("click", function inputClear(){

    for(let i=0;i<input.length;i++){
        input[i].value = "";
    }
});

const seo_text = document.querySelector(".seo-text-text");

const button_show_text = document.querySelector(".button-show-text");

const show_text = document.querySelector(".show-text");

const text_seo = document.querySelectorAll(".text-from-seo");


button_show_text.addEventListener("click", function showText(){

    let k = 0;

    if (getComputedStyle(seo_text).height == "165px"){

        for(let i = 0; i < text_seo.length; i++){
            k += text_seo[i].clientHeight;
        }
        
        seo_text.style.height =`${k+(16*text_seo.length)}px`;

        show_text.innerHTML = "Скрыть весь текст";

    }else{
        seo_text.style.height = "";
        
        show_text.innerHTML = "Показать весь текст";
    }
});
