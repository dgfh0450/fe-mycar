const path = require("path");

exports.getModels = async (req, res) => {
    const cars = await readData();

    const models = cars.models;

    const thumbnails = models.forEach(async (el) => await processing(el));
    console.log(thumbnails)

    res.status(200).json(cars);
};
