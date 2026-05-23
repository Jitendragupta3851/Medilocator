import express from "express";
import { addContact } from "../controller/Common_Controller.js";

const commonRouter=express.Router()
commonRouter.post("/addContact",addContact)





export default commonRouter