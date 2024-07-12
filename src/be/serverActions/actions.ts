'use server'

import { signJWT } from "../db/auth/jwt";
import { authQuery } from "../db/queries/query";

export const authenticateAction = async(email:string,password:string)=>{
    if(!email) return [null,'Invalid email address'];
    if(!password) return [null,'Invalid password']


   const res = await authQuery(email,password)
   if(res[1]){
    return [null,res[1]]
   }
   signJWT(email)
   return [res[0],null]
}