import React from "react";
import Project from "./Project";

const Projectlist = [
    {
        id: 1,
        name: "Film Finder",
        language: "JavaScript,Html,Css,Bootsrap",
        description: "A way to find and save your favorite movies for later use or watch trailers.",
        image:"./Screenshot 2023-02-17 at 10.08.33 PM.png",
        url: "https://mikewebprint.github.io/movie-wishlist/"
    },
    {
        id: 2,
        name: "GRIMS",
        language: "JavaScript,Html,Css,Bootsrap,MySQL, Express, Handlebars, and Node.js.",
        description: "G.R.I.M.S is a web-based inventory management system that allows users to create, edit, and delete products. This application is designed to be used by a small business owner who wants to keep track of their inventory. The user can view products organized by different departments, select a product to either edit its information or delete it from the inventory, and add new products. The application utilizies a cloud image hosting solution called Cloudinary. We integrated Cloudinary to allow users to upload images of their products directly from the application because we felt that this would be a more user-friendly solution than having users manually enter a URL for their product images.",
        image:"./Screenshot 2023-02-17 at 10.19.35 PM.png",
        url: "https://grims-inventory.herokuapp.com/login" 
    },
    {
        id: 3,
        name: "Weather Dashboard",
        language:"javascript,html,css,bootstrap,openweather,api",
        description: "A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. It will use the OpenWeather API to retrieve weather data for cities. It will also feature a search history so that users can access their past search terms.",
        image:"./Screenshot 2023-02-17 at 10.24.37 PM.png",
        url: "https://afrema90.github.io/Server-Side-APIs-Challenge-Weather-Dashboard/"
    },
    {
        id: 4,
        name: "Work Day Scheduler",
        language:"javascript,html,css,bootstrap,jquery",
        description: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
        image:"./Screenshot 2023-02-17 at 10.27.23 PM.png",
        url: "https://afrema90.github.io/Third-Party-APIs-Challenge-Work-Day-Scheduler/"
    },
];

function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
            <div className="row">
                {Projectlist.map((project) => (
                    <Project
                        key={project.id}
                        name={project.name}
                        language={project.language}
                        description={project.description}
                        image={project.image}
                        className="imgSize"
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;