/**
 * this file initiate some content of the dom 
 * to avoid some repetition in the HTML file
 */


/* nav item*/
const navItems = [
    "Home",
    "About",
    "Skills",
    "Certificates",
    "Projects",
    "Contact"
];

/* Skills Item */
const skills = {
    "Soft": [
        "Leadership",
        "Problem Solving",
        "Time Management",
        "Empathy",
        "Communication Skills",
        "Multitasking"
    ],
    "Office": [
        "Microsoft Office Suite (Word, Excel, PowerPoint, Teams)",
        "GSuite (Docs, Sheet, Forms, Meet)"
    ],
    "Programming": [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Java",
        "Bash",
        "Git",
        "mySQL"
    ],
    "Design": [
        "Photoshop",
        "Inkscape",
        "Figma"
    ],
};

/* Certificates Data*/
const certificates = [
    {
        "name": "Advanced English",
        "url": "./certificates/advanced-english.jpg"
    },
    {
        "name": "Project Management",
        "url": "./certificates/project-management.jpg"
    },
    {
        "name": "Graphic Design",
        "url": "./certificates/graphic-design.jpg"
    },
    {
        "name": "Inkscape",
        "url": "./certificates/inkscape.jpg"
    },
    {
        "name": "Photoshop",
        "url": "./certificates/photoshop.jpg"
    },
    {
        "name": "HTML",
        "url": "./certificates/html.jpg"
    },
    {
        "name": "Office",
        "url": "./certificates/office.jpg"
    },
    {
        "name": "Portuguese I",
        "url": "./certificates/portuguese-1.jpg"
    },
    {
        "name": "Portuguese II",
        "url": "./certificates/portuguese-2.jpg"
    },
    {
        "name": "Google Drive",
        "url": "./certificates/google-drive.jpg"
    },
    {
        "name": "Telephone Representative",
        "url": "./certificates/telephone-representative.jpg"
    }
]

const projects = [
	{
		title: "Weather App",
		url: "",
		desc: ""
	},
	{
		title: "Recipe Finder",
		url: "",
		desc: ""
	},
	{
		title: "Task Manager",
		url: "",
		desc: ""
	},
	{
		title: "Fruits Count",
		url: "",
		desc: ""
	},
	{
		title: "Etch a Sketch",
		url: "",
		desc: ""
	},
	{
		title: "E-commerce Website",
		url: "",
		desc: ""
	},
	{
		title: "Password Generator",
		url: "",
		desc: ""
	},
]


export {navItems, skills, certificates, projects};



