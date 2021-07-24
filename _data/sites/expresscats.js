module.exports = {
    name: "express-cats", // optional, falls back to object key
    description: "Showcase of my cats",
    options: {
        frequency: 60 * 23, // (in minutes), 23 hours
    },
    urls: [
        "https://express-cats-app.herokuapp.com/",
        // "https://express-cats-app.herokuapp.com/cats/sophie",
        // "https://express-cats-app.herokuapp.com/cats/remi"
    ]
};