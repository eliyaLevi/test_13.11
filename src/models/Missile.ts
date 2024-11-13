import mongoose, { Document, Schema } from "mongoose";

export interface IMissile extends Document {
  name: string; 
description:string,
speed: number,
intercepts: [{type:string}]
price:number
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    speed: { type: Number, required: true },
    intercepts:[{type:String}],
    price: {type: Number}
});

export default mongoose.model<IMissile>("Missile", userSchema);