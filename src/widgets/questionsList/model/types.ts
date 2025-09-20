import type { Question } from "@/shared/ui/types";


export interface QuestionsResponse {
  data: Question[];
}

export interface QuestionsQueryParams {
  page: number;
}

