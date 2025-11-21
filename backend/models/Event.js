import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String },
  sensor: { type: mongoose.Schema.Types.ObjectId, ref: "Sensor" },
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);
