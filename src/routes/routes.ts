import studentController from "@/controllers/studentController";
import { validateSchema } from "@/middlewares/validationSchema";
import { studentSchema } from "@/schemas/studentSchema";
import { Router } from "express";

const router = Router();

router.post("/aluno", validateSchema(studentSchema), studentController.createStudent);
router.get("/alunos", studentController.getStudents);
router.put("/aluno/:id", studentController.updateStudent);
router.delete("/alunos/:id", studentController.deleteStudentById);

export default router;



