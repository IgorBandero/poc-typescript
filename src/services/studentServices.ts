import { NewStudent, Student } from "@/protocols/studentProtocol";
import { studentRepository } from "@/repositories/studentRepository";

async function createStudent(student: NewStudent){
    return await studentRepository.insertStudent(student);
}

async function getStudents(): Promise<Student[]>{
    const students = studentRepository.getStudents();
    return students;
}

async function updateStudent(newName: string, newCourse: string, id: number){
    return await studentRepository.putStudentById(newName, newCourse, id);
}

async function deleteStudent(id: number){
    return await studentRepository.deleteStudentById(id);
}


export const studentService = { createStudent, getStudents, updateStudent, deleteStudent }; 
