import certificates from "./certificates.js";

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
    desc: $("#certificates .desc"),
    img: $("#certificates .img")
}
const projectEl = {
    title: $("#projects .title"),
    desc: $("#projects .desc"),
    img: $("#projects .img")
}

certificateEl.title.text(certificates[0].name)
certificateEl.desc.text(certificates[0].desc)
certificateEl.img.attr("src", certificates[0].url)

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

    skill.click(function(){
        let el = $(this).find(".skill-list");
        el.toggle();
        if(el.css("display") === "block"){
            $(".fa-angle-down").css("transform", "rotate(-180deg)");
        }else{
            $(".fa-angle-down").css("transform", "rotate(0deg)");
        }
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
inkscape *
Office *
Portuguese I *
Portuguese II *
Advanced English *
Photoshop *
Graphic Design *
HTML *
Google Drive *
Gestion de Projet *
Rep Telefonico *
*/

