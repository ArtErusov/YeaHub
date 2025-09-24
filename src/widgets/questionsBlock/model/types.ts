import type { QuestionType } from '@/shared/types/QuestionType';

export interface QuestionsResponse {
   total: number;
   data: QuestionType[];
}

export interface QuestionsQueryParams {
   page: number;
   title?: string;
   skills?: number[];
   rate?: number[];
}
