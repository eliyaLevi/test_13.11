import mongoose, { Document, Schema } from "mongoose";
import { IMissile } from "./Missile";

export interface IUser extends Document {
  userName: string;
  password:string,
  organization: "IDF" | "Hezbollah" | "Hezbollah" | "IRGC" | "Houthis"
  location ?: "North" | "South" | "Center" | " West Bank"
  resources?:[IMissile]
  isAdmin: boolean
 
}
const missileSchema:Schema = new Schema({
  resources:[{type:String}],


})
const userSchema: Schema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  organization: { type: String, required: true },
  location:{type:String},
  resources:{type:[{missileSchema}]},
  isAdmin: Boolean
});

export default mongoose.model<IUser>("User", userSchema);