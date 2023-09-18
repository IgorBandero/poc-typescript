export type Student = {
    id: number;
    name: string;
    course: string;
}

export type NewStudent = Omit<Student, "id">;