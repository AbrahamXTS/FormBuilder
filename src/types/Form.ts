import { Question } from "./Question";

export interface Form {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}
