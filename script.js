"use strict";

const nav = document.querySelector(".nav");

//website loop
let websiteLoop = setInterval(() => {
    const scrollTop = document.querySelector("html").scrollTop;
    if (scrollTop > 400) {
        nav.classList.add("sticky__nav")
    } else {
        nav.classList.remove("sticky__nav")
    }
}, 3);

const projects = [
    {
        link: "https://public.tableau.com/app/profile/ayush.shastry/viz/dashboardSubmit/AyushShastrysDashboard?publish=yes",
        image: "hero.jpg",
        openInNewTab: true,
        title: "Relationship between GDP per Capita and Life Expectancy Sorted by Social Support Score",
        description: "This project was built using Tableau"
    },
    {
        link: "https://ayushshastry.github.io/",
        image: "viz.jpeg",
        openInNewTab: true,
        title: "Narrative Visualization of Police Arrests",
        description: "This visualization was made using HTML, CSS and D3.js"
    },
    {
        link: "file:///Users/ayushshastry/Desktop/Defects.pdf",
        image: "hero.jpg",
        openInNewTab: true,
        title: "Market Capper",
        description: "A finance trivia game that uses dynamic webscraping. Developed with JS/CSS/HTML and Python for the CS124 Honors project"
    },
]

const projectHTML = document.querySelector(".projects_content");


displayProjects();
function displayProjects() {
    projectHTML.innerHTML = '';

    for (let i = 0; i < projects.length - 1; i += 2) {
        const html = `<div class="row">
        <div class="item">
            <div class="image__container">
                <a href="${projects[i].link}">
                    <img src="${projects[i].image}">
                </a>
            </div>
            <a href="${projects[i].link}">
                <h2 class="disable-select">${projects[i + 1].title}</h2>
            </a>
            <p>${projects[i].description}</p>
        </div>
        <div class="item">
            <div class="image__container">
                <a href="${projects[i+1].link}">
                    <img src="${projects[i].image}">
                </a>
            </div>
            <a href="${projects[i+1].link}">
                <h2 class="disable-select">${projects[i+1].title}</h2>
            </a>
            <p>${projects[i+1].description}</p>
        </div>
    </div>`;
        projectHTML.insertAdjacentHTML("beforeend", html);
    }

    let left = projects.length % 2;
    if (left == 1) {
        const html = `
        <div class="row">
            <div class="item">
                <div class="image__container">
                    <a href="${projects[projects.length - 1].link}">
                        <img src="${projects[projects.length - 1].image}">
                    </a>
                </div>
                <a href="${projects[projects.length - 1].link}">
                    <h2 class="disable-select">${projects[projects.length - 1].title}</h2>
                </a>
                <p>${projects[projects.length - 1].description}</p>
            </div>
        </div>`
        projectHTML.insertAdjacentHTML("beforeend", html);
    }
}

