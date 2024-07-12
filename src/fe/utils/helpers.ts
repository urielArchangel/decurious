import crypto from 'crypto'

export const trauncateStringMiddle=(a?:string |`0x${string}`)=>{
    if(a){
    const start = a.slice(0,5)
    const end = a.slice(a.length - 5,a.length)
    const newString = start +"...."+ end
    return newString
    }
}

export const passwordHasher=(password:string)=>{
    return crypto.createHash('sha256').update(process.env.PASSWORD_SALT!+password+process.env.PASSWORD_SALT!).digest('hex')
}

