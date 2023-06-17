import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    userId: String,
    cost: String,
    products: [
      {
        id: Number,
        productID: String,
      },
    ],
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

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
