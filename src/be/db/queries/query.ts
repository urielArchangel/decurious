import { passwordHasher } from "@/src/fe/utils/helpers"
import EventAdmin from "../schema/EventAdmin"
import { IEventAdminModel } from "@/decarations"
import {connectMongo} from '@/connection'




export const authQuery = async (email:string,password:string)=>{

    try {
        await connectMongo()
        const hash = passwordHasher(password)

            const user=await EventAdmin.findOne({email}) as IEventAdminModel
            if(user){
                if(user.passwordHash == hash) return ["Sign in successful",null]
                return [null,"Invalid credentials"]
            }
            await EventAdmin.create({email,passwordHash:hash})
            return ['Account created successfully',null]
            

    } catch (error:any) {
        console.log(error.message)
        return [null, error.message]
    }
}