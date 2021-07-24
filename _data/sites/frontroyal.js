module.exports = {
    name: "frontroyalband.com", // optional, falls back to object key
    description: "Front Royal",
    skip: true, // I don't know why this is taking so long to build each time, but the scores aren't that bad...
    options: {
        frequency: 60 * 23, // (in minutes), 23 hours
    },
    urls: [
        "https://www.frontroyalband.com/",
        "https://www.frontroyalband.com/about/"
    ]
};