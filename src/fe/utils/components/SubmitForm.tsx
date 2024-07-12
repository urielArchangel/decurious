import React from 'react'

interface P{
    value:string;
    className?:string;
    disabled?:boolean;
    click?:React.MouseEventHandler<HTMLInputElement>
}

function SubmitForm({value,className,disabled,click}:P) {
    
  return (
<section>
<input type="submit" value={value}className={className} disabled={disabled} onClick={click} />
</section>  )
}

export default SubmitForm