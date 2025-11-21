import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number },
  unit: { type: String },
}, { timestamps: true });

export default mongoose.model("Sensor", sensorSchema);
