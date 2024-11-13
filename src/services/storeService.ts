import { generateUserPassword } from "../../helpers/helpers";
import dataUser, { IUser } from "../models/user";
import dataMissile, {IMissile} from "../models/Missile"
import dataOrg, {Iorganization} from "../models/organization"

interface buyUserDtop{
  missile:string,
  org:string,
}


const getAllMissile = async () => {
  const users = dataMissile.find()
  return users;
};

const buyNewMissille = async (buyUser : buyUserDtop) => {
  const missile = await dataMissile.findOne({name:buyUser.missile})
  const org = await dataOrg.findOne({name:buyUser.org})
  const priceMissile = missile?.price
  const orgBudget =  org?.budget

  console.log(missile);

  // const user = await data1.findByIdAndUpdate(id, updateUser, { new: true });
  // return user;
};

export { getAllMissile, buyNewMissille };
