import { STUDENTS } from "./students";
import { SUBJECTS } from "./subjects";

export const SUPPORTS = [
  {
    id: 1,
    studentId: STUDENTS.find((student) => student.name === "Rajde Rafino")?.id,
    subjectId: SUBJECTS.find((student) => student.name === "Neuroanatomia")?.id,
  },
  {
    id: 2,
    studentId: STUDENTS.find((student) => student.name === "Maria Isabela")?.id,
    subjectId: SUBJECTS.find((student) => student.name === "Neuroanatomia")?.id,
  },
  {
    id: 3,
    studentId: STUDENTS.find((student) => student.name === "Evelyn Maria")?.id,
    subjectId: SUBJECTS.find((student) => student.name === "Neuroanatomia")?.id,
  },
];
