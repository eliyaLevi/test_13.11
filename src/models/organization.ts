import mongoose, { Document, Schema } from "mongoose";

export interface Iorganization extends Document {
  name: string;
  resources:[{type:string}],
  budget: number

}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    resources: { type:[{String}], required: true },
    budget: { type: Number, required: true }
});

export default mongoose.model<Iorganization>("organization", userSchema);