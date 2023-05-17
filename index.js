
// min-width: 990px
// max-width: 1480px

const root = $(":root");
const section = $("section");
const themeBtn = $("#theme");
const mobileTheme = $("#mobile-theme");
const leftArrow = $(".fa-arrow-left");
const rightArrow =$(".fa-arrow-right");
const skill = $(".skill");
const menu = $("#menu");
let caretLeft = $("#caret-left");

const certificateEl = {
    title: $("#certificates .title"),
    desc: $("#certificates .desc")
}
const projectEl = {
    title: $("#projects .title"),
    desc: $("#projects .desc")
}

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
   
    mobileTheme.click(function (){
        root.toggleClass("dark");
        if(root.attr("class") === "dark"){
            $("#next-theme").text("Light");
            $("#theme-icon").removeClass("fa-circle-half-stroke").addClass("fa-sun");
            $("#mobile-theme-icon").removeClass("fa-circle-half-stroke").addClass("fa-sun");
        }
        else{
            $("#next-theme").text("Dark");
            $("#theme-icon").removeClass("fa-sun").addClass("fa-circle-half-stroke");
            $("#mobile-theme-icon").removeClass("fa-sun").addClass("fa-circle-half-stroke");
        }
    });

    menu.click(function(){
        $("nav").show();
    });

    caretLeft.click(function() {
        $("nav").hide();
    });

});

class Certificate{
    constructor(name, url, description){
        this.name = name;
        this.url = url;
        this.description = description;
    }
}

class Projects{
    constructor(name, url, description){
        this.name = name;
        this.url = url;
        this.description = description;
    }
}

/* Certificates
inkscape
Office
Portugues
Advanced English
Photoshop
Graphic Design
HTML
Google Drive
*/

const certificates = [
    new Certificate(
        "English",
        "./certificates",
        ""
    )
]