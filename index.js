
// min-width: 990px
// max-width: 1480px
const root = $(":root");
const section = $("section");
const themeBtn = $("#theme");
const home = $("#home");

$(document).ready(function(){
    
    section.on({
        mouseenter: function(){
            let id = $(this).attr("id");
            let currentEl = $(`[href="#${id}"]`);
            currentEl.addClass("active");
        },
        mouseleave: function(){
            let id = $(this).attr("id");
            let currentEl = $(`[href="#${id}"]`);
            currentEl.removeClass("active");
        }
    });

    themeBtn.click(function (){
        root.toggleClass("dark");
        if(root.attr("class") === "dark"){
            $("#next-theme").text("Light");
            $("#theme-icon").removeClass("fa-circle-half-stroke").addClass("fa-sun");
        }
        else{
            $("#next-theme").text("Dark");
            $("#theme-icon").removeClass("fa-sun").addClass("fa-circle-half-stroke");
        }
    });
   

});
