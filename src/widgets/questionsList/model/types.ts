import type { Question } from "@/shared/types/QuestionType";


export interface QuestionsResponse {
  total: number;
  data: Question[];
}

export interface QuestionsQueryParams {
  page: number;
  title?: string;
}

