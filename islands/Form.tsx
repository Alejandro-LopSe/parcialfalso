

import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type Contact = {
    name: string
    email: string
}


export const Form: FunctionComponent = ()=> {
    const [name,setname] = useState<string>("")
    const [email,setemail] = useState<string>("")
    const [contacts,setcontacts] = useState<Contact[]>([])
    const [error,seterror] = useState<string>("")
    console.log(contacts,name,email);
    

    const addcontact = ()=>{

        const exist = contacts.some((e)=>{
            if(e.email===email)return false
            return true
        })

        
        if((name==="") || (email==="") || (email.includes("@"))===false || (email.includes("."))===false || (exist)){



                    seterror("error")

        }
        if(email===""){
            console.log("no email");
            
        }
        if(!email.includes("@")){
            console.log("no yert");
            
        }
        if(exist){
            console.log("exist");
            
        }
        if(error===""){
            setcontacts([...contacts,{name: name,email: email}])
            seterror("")
        }
    }
    return (
        <div >
                {contacts && <ul>{
                    contacts.map((elem)=>{
                    return(
                    <p>
                        <p>{elem.name}</p>
                        <p>{elem.email}</p>
                    </p> )
                })}
                </ul>}
            <div class="add">
                <h2>Add new contact</h2>
                <input type="text" placeholder="Name" onBlur={(e)=>{
                    setname(e.currentTarget.value)
                }} onChange={(e)=>{
                    seterror("")
                }}/>
                <input type="text" placeholder="Email" onBlur={(e)=>{
                    setemail(e.currentTarget.value)
                }} onChange={(e)=>{
                    seterror("")
                }}/>
                <button type="button" onClick={(e)=>{addcontact()}}>Add contact</button>
                {error}
            </div>
        </div>
    )
}