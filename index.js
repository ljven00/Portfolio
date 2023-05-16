
// min-width: 990px
// max-width: 1480px
const root = $(":root");
const section = $("section");
const themeBtn = $("#theme");
const leftArrow = $(".fa-arrow-left");
const rightArrow =$(".fa-arrow-right");
const skill = $(".skill");

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

