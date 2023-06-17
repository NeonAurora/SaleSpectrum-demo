import mongoose from "mongoose";

const CustomTradeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    address: {
      type: String,
      required: true,
      max: 50,
    },
    city: String,
    zipCode: String,
    assignedAgent: String,
    type: String,
    price: String,
    arv: String,
    roof: String,
    tenants: String,
    mortgage: String,
    monthlyPayments: String,
    timeToSell: String,
    comps: String,
    acquisition: String,
    performance: String,
    phoneNumber: String,
    url: String,
    audioMetadata: {
      title: String,
      duration: Number,
      format: String,
      bitrate: Number,
      sampleRate: Number,
      channels: Number,
      fileSize: Number,
      fileUrl: String,
    },
  },
  { timestamps: true }
);

const CustomTrade = mongoose.model("CustomTrade", CustomTradeSchema);
export default CustomTrade;
