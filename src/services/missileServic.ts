
import data, {} from "../models/Missile"

const getAllMissiles = async () => {
  const missiles = data.find();
  return missiles;
};

const getMissile = (id: string) => {
  const missileSingel = data.findById(id);
  return missileSingel;
};


export { getAllMissiles, getMissile};