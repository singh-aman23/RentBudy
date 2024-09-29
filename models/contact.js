import mongoose, { models, Schema } from "mongoose";

const contactSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contact = models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;