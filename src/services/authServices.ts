import { CookieOptions, Response } from "express";
import { comparePassword, generateUserPassword } from "../../helpers/helpers"
import { generateAuthToken } from "../../helpers/jwt"
import data, { IUser } from "../models/user"

const cookieConfig: CookieOptions = {
    httpOnly: true,          // הגנה מפני XSS - הקוקי לא נגיש דרך JavaScript בצד הלקוח
    secure: true,            // שליחת הקוקי רק בחיבור HTTPS
    sameSite: 'strict',      // הגנה מפני CSRF
    maxAge: 24 * 60 * 60 * 1000  // תוקף של יום אחד (במילישניות)
};
interface userDTO {
    userName:string,
    password:string
}
interface LoginDTO{
    _id: string,
      isAdmin: boolean 
}

const login = async (user: userDTO, res:Response) => {
    try {
        console.log(1);
        
        const foundUser = await data.findOne({ userName: user.userName })
        
        console.log(2);
        console.log(user);
        
        if (!foundUser) return  console.log ("User not found")
            console.log(user.password, foundUser.password);
            
            const isPasswordCorrect = await comparePassword(user.password, foundUser.password)    
        if (!isPasswordCorrect) return console.log("Incorrect password or Email");
        console.log(3);
        
        const {_id,isAdmin} = foundUser
        const token = generateAuthToken({_id,isAdmin});
        res.cookie('auth_token', token, cookieConfig);
        console.log(4);
        
        return {foundUser , token};
        
    } catch (error) {
        throw new Error("Failed to login")
    }
}


const logout = (res: Response): void => {
    try {
        res.clearCookie("auth_token", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });
            } catch (error) {
console.log(error);
    }
};

const AddUser = async (userData: IUser) => {
    try {
      const newUser = new data(userData);
      newUser.password = generateUserPassword(newUser.password)
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error("Failed to add new user");
    }
  };
  
export {
    login,
    logout,
    AddUser
}


