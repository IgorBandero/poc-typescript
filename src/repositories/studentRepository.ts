import { db } from '@/database/databaseConection';
import { NewStudent, Student } from '@/protocols/studentProtocol';

async function insertStudent (student: NewStudent){
    return db.query(`INSERT INTO students (name, course) VALUES ($1, $2);`, [student.name, student.course]);
}

async function getStudents(){
    const studentsList = await db.query<Student>(`SELECT * FROM students;`);
    return studentsList.rows;
}

async function putStudentById(newName: string, newCourse: string, id: number){
    return db.query(`UPDATE students SET name = $1, course = $2
                     WHERE id = $3;`, [newName, newCourse, id]);
}

async function deleteStudentById(id: number){
    return db.query(`DELETE FROM students WHERE id = $1;`, [id]);
}


export const studentRepository = { insertStudent, getStudents, putStudentById, deleteStudentById }


