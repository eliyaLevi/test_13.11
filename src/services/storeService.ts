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
  console.log(buy);
  console.log(id);
  
  
  if (!id || !buy.name || !buy.amount)
    return console.log("חסר או איידי או באדי");
  // אם אין אחד מהפרמטרים  - החזר שגיאה

  const user = await dataUser.findById({ _id: id }); 
  if (!user) return console.log("user not found");

  const org: any = await dataOrg.findOne({ name: buy.amount });
  const missile = await dataMissile.findOne({ name: buy.name }); 

  if (!missile) return console.log("missile not found");

  if (org.budget < missile.price) return console.log("אין מספיק תקציב לארגון");

  const organization = await dataOrg.findOne({ name: user.organization }); // מצא את הארגון של המשתמש לפי ההשתייכות שלו

  if (!organization) return console.log("organization not found");

  const resources = organization.resources; // חלץ את המערך של הנשקים של הארגון
  console.log(resources);
  
  const isMissileExists = resources.find(
    (resource) => resource.name === buy.name
  ); // בדוק האם הנשק כבר קיים בארגון

  if (isMissileExists) {
    resources.map((resource) =>
      resource.name === buy.name
        ? (resource.amount += Number(buy.amount))
        : resource
    );
  } else {
    resources.push({name: buy.name, amount: Number(buy.amount)});
  }

  organization.resources = resources
  await organization.save();
  org.budget -= missile.price * Number(buy.amount)
  await user.save(); //שמור את הנתונים החדשים של המשתמש

  return buy

  
} catch (error) {
  
  return console.log("buy not Found");
  
}
 
};

export { getAllMissile, buyNewMissille };




