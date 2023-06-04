import { navItems, skills, certificates, projects } from "./App.js";

const angleDown = `<i class="fa-solid fa-angle-down"></i>`;
const certificateEl = {
    name: $("#certificate-name"),
    img: $("#certificate-img"),
    link: $(".gallery a")
};
const root = $(":root");
const section = $("section");
const themeBtn = $("#theme");
const modeBtn = $("#mode");
const mobileMode = $("#mobile-mode");
const leftArrow = $(".fa-arrow-left");
const rightArrow =$(".fa-arrow-right");
const menu = $("#menu");
let currCertificate = 0;
let dropdown;
let windowWidth = window.innerWidth;



/** 
 * Assigning the nav items 
 * The function loads the elements
 * of the array as list items
 */
function updateNav(){
    let htmlContent = "";
    navItems.forEach((element) => {
        htmlContent += `
        <li>
        <a href="#${element.toLowerCase()}">
        ${element}
        </a>
        </li>`;
    });
    $(".nav-items").prepend(htmlContent);    
}

/** 
 * Assigning the skill items 
 * The function loads the elements
 * of the array as list items to update
 * the skills-wrapper element
 */
function updateSkills(){
    let htmlContent = "";
    for(let skill in skills){
        let item = `<ul class="dropdown-items">`
        for(let s of skills[skill]){
            item += `<li 
            id="${s.includes(" ") ? 
            s.slice(0, s.indexOf(" ")).toLowerCase(): 
            s.toLowerCase()}">${s}
            </li>`;
        }
        item += "</ul>";
        htmlContent += `
        <li class="dropdown-box">
        ${skill} Skills ${angleDown} ${item}
        </li>`;
    }
    $(".skills-wrapper").prepend(htmlContent);
    dropdown = $(".dropdown-box");
}

/** 
 * this function updates the content of
 * the certificate element
 * @param {int} index to fetch
 * the img path and the certificate name
*/
function updateCertificate(index){
    certificateEl.name.text(certificates[index].name);
    certificateEl.img.attr("src", certificates[index].url);
    certificateEl.link.attr("href", certificates[index].url);
}

function updateMode(){
    root.toggleClass("dark");
    if(root.hasClass("dark")){
        $("#next-mode").text("Light");
        $(".mode-icon").removeClass("fa-circle-half-stroke").addClass("fa-sun");
    }
    else{
        $("#next-mode").text("Dark");
        $(".mode-icon").removeClass("fa-sun").addClass("fa-circle-half-stroke");
    }
}

function updateTheme(){
    root.toggleClass("classic");
    if(root.hasClass("classic"))
        $("#next-theme").text("Cool");
    else
        $("#next-theme").text("Classic");
}

window.addEventListener("resize", function(){
    windowWidth = window.innerWidth;
    if(windowWidth >= 780 ){
        $(".main-nav").show()
    }else{
        $(".main-nav").hide()
    }
});

updateNav();
updateSkills();
updateCertificate(currCertificate);

$(document).ready(function(){
    /* Toggle active class for each section */
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

    modeBtn.click(function (){
        updateMode();
    });

    mobileMode.click(function (){
        updateMode();
    });

    themeBtn.click(function (){
        updateTheme();
    });

    dropdown.click(function (){
        let el = $(this).find(".dropdown-items");
        el.toggle();
        if(el.css("display") === "block"){
            $(".fa-angle-down").css("transform", "rotate(-180deg)");
        }else{
            $(".fa-angle-down").css("transform", "rotate(0deg)");
        }
    });

    rightArrow.click(function() {   
        if(currCertificate < certificates.length - 1){
            currCertificate++;
            updateCertificate(currCertificate);
        }else if(currCertificate == certificates.length - 1){
            updateCertificate(currCertificate);
        }else{
            return;
        }
    });

    leftArrow.click(function() {
        if(currCertificate == 0){
            updateCertificate(currCertificate);
        }else if(currCertificate >= 1){
            currCertificate--;
            updateCertificate(currCertificate);
        }else{
            return;
        }
    });

    menu.click(function(){
        const mainNav = $(".main-nav");
        if(mainNav.css("display") === "none")
            mainNav.css("display", "flex");
        else
            mainNav.css("display", "none");
    });

});
