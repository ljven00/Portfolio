import { navItems, projects } from "./App.js";

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
const leftArrow = $(".fa-angle-left");
const rightArrow =$(".fa-angle-right");
const menu = $("#menu");
let skills;
let certificates;
let currCertificate = 0;
let dropdown;
let windowWidth = window.innerWidth;

/** fetching skills data */
fetch("./skills.json")
    .then(response => response.json())
    .then(data => {
        skills = data;
        updateSkills();
        dropdown.click(function (){
            let el = $(this).find(".dropdown-items");
            el.toggle();
            if(el.css("display") === "block"){
                $(".fa-angle-down").css("transform", "rotate(-180deg)");
            }else{
                $(".fa-angle-down").css("transform", "rotate(0deg)");
            }
        });
    })

/** fetching certificates data */
fetch("./certificates.json")
    .then(response => response.json())
    .then(data => {
        certificates = data;
        updateCertificate(currCertificate);
    })

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
 * 
 * @param {string} name title of the docu
 * @param {string} base the base url
 * @param {string} ext the extension file
 * @returns string path to the file
 */
function getPath(name, base, ext){
    let path = name.toLowerCase().replaceAll(" ", "-");
    return `${base}${path}.${ext}`
}

/** 
 * this function updates the content of
 * the certificate element
 * @param {int} index to fetch
 * the img path and the certificate name
*/
function updateCertificate(index){
    let path = getPath(certificates[index].name, "./certificates/", "jpg");
    let name = certificates[index].name;
    certificateEl.name.text(name);
    certificateEl.img.attr("src", path);
    certificateEl.img.attr("alt", name);
    certificateEl.link.attr("href", path);
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
    root.toggleClass("cool");
    if(root.hasClass("cool"))
        $("#next-theme").text("Classic");
    else
        $("#next-theme").text("Cool");
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
