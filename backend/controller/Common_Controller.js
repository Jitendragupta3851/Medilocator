import ContactModel from "../model/Contact_Model.js";
import mongoose from "mongoose";

export async function addContact(request, response) {
    // code for contact insertion
    
    const contactObject=request.body
    const{name,email,phone,question}=contactObject  //object destructring

    // console.log(`name is ${name}`);
    // console.log(`email is ${email}`);
    // console.log(`email is ${phone}`);
    // console.log(`question is ${question}`);

    // ---------data insertion in contact insertion--------
    
    try{
        const contactDoc=new ContactModel({name,email,phone,question})
        await contactDoc.save()
        console.log("contact added");
        response.json({"message":"The process has successfully completed"})
    }
    catch(error){
        
        console.log(error);
        
    }
    
}

