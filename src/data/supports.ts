import { STUDENTS } from "./students";
import { SUBJECTS } from "./subjects";

export const SUPPORTS = [
  {
    id: 0,
    studentId: STUDENTS.find((student) => student.name === "Rajde Rafino")?.id,
    subjectId: SUBJECTS.find((student) => student.name === "Neuroanatomia")?.id,
    status: "accepted",
    visible: true,
  },
  {
    id: 1,
    studentId: STUDENTS.find((student) => student.name === "Maria Isabela")?.id,
    subjectId: SUBJECTS.find((student) => student.name === "Neuroanatomia")?.id,
    status: "accepted",
    visible: true,
  },
];
