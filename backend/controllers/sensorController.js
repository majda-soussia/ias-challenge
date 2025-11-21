import Sensor from "../models/Sensor.js";

export const getSensors = async (req, res) => {
  try {
    const sensors = await Sensor.find();
    res.json(sensors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createSensor = async (req, res) => {
  try {
    const sensor = new Sensor(req.body);
    const savedSensor = await sensor.save();
    res.status(201).json(savedSensor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
