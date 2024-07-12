import { cookies } from "next/headers"

export const deletecookie=()=>{
    cookies().delete("auth_0")
}