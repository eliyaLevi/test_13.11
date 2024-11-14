import mongoose, { Document, Schema } from "mongoose";

export interface Iorganization extends Document {
  name: string;
  resources: [{name:string, amount: number }];
  budget: number;
}

const orgSchema: Schema = new Schema({
  name: { type: String, required: true },
  resources: { type: [{ name: String,
    amount: Number}], required: true },
  budget: { type: Number, required: true },
});

export default mongoose.model<Iorganization>("organization", orgSchema);


