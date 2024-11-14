import mongoose, { Document, Schema } from "mongoose";

export interface Iorganization extends Document {
  name: string;
  resources: [{name:string, amount: number }];
  budget: number;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  resources: { type: [{ String }], required: true },
  budget: { type: Number, required: true },
});

export default mongoose.model<Iorganization>("organization", userSchema);
