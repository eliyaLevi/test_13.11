import { generateUserPassword } from "../../helpers/helpers";
import dataUser, { IUser } from "../models/user";
import dataMissile, { IMissile } from "../models/Missile";
import dataOrg, { Iorganization } from "../models/organization";

interface buyUserDtop {
  name: string;
  amount: string;
}

const getAllMissile = async () => {
  
  const users = dataMissile.find();

  
  return users;
};
const buyNewMissille = async (buy: buyUserDtop, id: any) => {
  try {
    
    const user:any = await dataUser.findById({ _id: id.id });

    const missile: any = await dataMissile.findOne({ name: buy.name }); 
   
    const org: any = await dataOrg.findOne({name:user?.organization})

    const resources = org!.resources.find( (res: { name: any; }) => res.name === missile.name)
    if(resources)  {
      resources.amount += buy.amount
      return await org.save()
    }
    org.resources.push({name:missile.name,amount:buy.amount}) 
    await org.save()

    return resources
  } catch (error) {
    return console.log("buy not Found");
  }
};

export { getAllMissile, buyNewMissille };
