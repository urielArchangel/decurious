
import { UserJWTData } from '@/decarations'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { deletecookie } from './cookie'
export const signJWT=(email:string)=>{
    const expiry = (Date.now()+804000)
const token = jwt.sign({email,expiry},process.env.JWT_SECRET!+expiry.toString())
cookies().delete("auth_0")
cookies().set("auth_0",token,{
    maxAge:804000,
    secure:true,
    httpOnly:true
})
}


export const verifyJWT = (token:string)=>{
    const {expiry} = jwt.decode(token) as UserJWTData
    if(Date.now() > expiry){
        deletecookie()
        return
    }
    const userdata = jwt.verify(token,process.env.JWT_SECRET!+expiry.toString())
    return userdata as UserJWTData
}