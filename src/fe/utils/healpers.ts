export const trauncateStringMiddle=(a?:string |`0x${string}`)=>{
    if(a){
    const start = a.slice(0,5)
    const end = a.slice(a.length - 5,a.length)
    const newString = start +"...."+ end
    return newString
    }
}