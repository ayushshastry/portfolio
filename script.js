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
        image: "images/map.jpeg",
        openInNewTab: true,
        title: "Tableau Dashboard",
        description: "This project looks at the relationship between GDP per Capita and Life Expectancy"
    },
    {
        link: "https://ayushshastry.github.io/",
        image: "images/viz.jpeg",
        openInNewTab: true,
        title: "Narrative Visualization of Police Arrests",
        description: "This visualization was made using HTML, CSS and D3.js and the dataset is from Kaggle"
    },
    {
        link: "https://github.com/ayushshastry/housing/blob/main/Housing.pdf",
        image: "images/housing.jpeg",
        openInNewTab: true,
        title: "Housing Predictions",
        description: "Leveraged multiple machine learning models such as Gradient Boosting, Adaptive Boosting and Random Forest"
    },
    {
        link: "https://github.com/ayushshastry/defects/blob/main/Defects.pdf",
        image: "images/forest.png",
        openInNewTab: true,
        title: "Predicting Manufacturing Defects using Random Forest",
        description: "Data Analytics on Kaggle Dataset using Pandas, Seaborn and Plotly.px. Random Forest model was implemented using RandomForestClassifier()"
    }
]

const projectHTML = document.querySelector(".projects_content");


const toggleProjectsBtn = document.getElementById("toggle-projects-btn");

let showAllProjects = false;

function displayProjects() {
    projectHTML.innerHTML = '';
    const projectsToDisplay = showAllProjects ? projects : projects.slice(0, 3);

    for (let i = 0; i < projectsToDisplay.length - 1; i += 2) {
        const html = `<div class="row">
            <div class="item">
                <div class="image__container">
                    <a href="${projectsToDisplay[i].link}" target="${projectsToDisplay[i].openInNewTab ? '_blank' : '_self'}">
                        <img src="${projectsToDisplay[i].image}" alt="${projectsToDisplay[i].title}">
                    </a>
                </div>
                <a href="${projectsToDisplay[i].link}" target="${projectsToDisplay[i].openInNewTab ? '_blank' : '_self'}">
                    <h2 class="disable-select">${projectsToDisplay[i].title}</h2>
                </a>
                <p>${projectsToDisplay[i].description}</p>
            </div>
            <div class="item">
                <div class="image__container">
                    <a href="${projectsToDisplay[i + 1].link}" target="${projectsToDisplay[i + 1].openInNewTab ? '_blank' : '_self'}">
                        <img src="${projectsToDisplay[i + 1].image}" alt="${projectsToDisplay[i + 1].title}">
                    </a>
                </div>
                <a href="${projectsToDisplay[i + 1].link}" target="${projectsToDisplay[i + 1].openInNewTab ? '_blank' : '_self'}">
                    <h2 class="disable-select">${projectsToDisplay[i + 1].title}</h2>
                </a>
                <p>${projectsToDisplay[i + 1].description}</p>
            </div>
        </div>`;
        projectHTML.insertAdjacentHTML("beforeend", html);
    }

    let left = projectsToDisplay.length % 2;
    if (left === 1) {
        const html = `
        <div class="row">
            <div class="item">
                <div class="image__container">
                    <a href="${projectsToDisplay[projectsToDisplay.length - 1].link}" target="${projectsToDisplay[projectsToDisplay.length - 1].openInNewTab ? '_blank' : '_self'}">
                        <img src="${projectsToDisplay[projectsToDisplay.length - 1].image}" alt="${projectsToDisplay[projectsToDisplay.length - 1].title}">
                    </a>
                </div>
                <a href="${projectsToDisplay[projectsToDisplay.length - 1].link}" target="${projectsToDisplay[projectsToDisplay.length - 1].openInNewTab ? '_blank' : '_self'}">
                    <h2 class="disable-select">${projectsToDisplay[projectsToDisplay.length - 1].title}</h2>
                </a>
                <p>${projectsToDisplay[projectsToDisplay.length - 1].description}</p>
            </div>
        </div>`;
        projectHTML.insertAdjacentHTML("beforeend", html);
    }

    toggleProjectsBtn.textContent = showAllProjects ? 'Show Less Projects' : 'Show All Projects';
}

toggleProjectsBtn.addEventListener('click', () => {
    showAllProjects = !showAllProjects;
    displayProjects();
});

displayProjects();