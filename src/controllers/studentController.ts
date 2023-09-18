import { Request, Response } from "express";
import { studentService } from "@/services/studentServices";
import { NewStudent, Student } from "@/protocols/studentProtocol";
import httpStatus from "http-status";

async function createStudent(req: Request, res: Response) {
    const student = req.body as NewStudent; 
    await studentService.createStudent(student);
    res.sendStatus(httpStatus.CREATED);
}

async function getStudents(req: Request, res: Response) {
  const students = await studentService.getStudents();
  res.send(students).status(httpStatus.OK);
}

function updateStudent(req: Request, res: Response){
    const { id } = req.params;
    const { name, course } = req.body as NewStudent;
    const idNumber = parseInt(id);
    studentService.updateStudent(name, course, idNumber);
    res.sendStatus(httpStatus.NO_CONTENT);
}

function deleteStudentById(req: Request, res: Response){
    const { id } = req.params;
    const idNumber = parseInt(id);
    studentService.deleteStudent(idNumber);
    res.sendStatus(httpStatus.NO_CONTENT);
}

const studentController = {
  createStudent, 
  getStudents,
  updateStudent,
  deleteStudentById
}

export default studentController;