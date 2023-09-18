import { Student } from "@/protocols/studentProtocol";
import Joi from "joi";

export const studentSchema = Joi.object<Student>({
	name: Joi.string().required(),    
	course: Joi.string().required()
});