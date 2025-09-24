import type {
   QuestionsQueryParams,
   QuestionsResponse,
} from '../../../widgets/questionsBlock/model/types';
import baseApi from '@/shared/api/baseApi';

const questionsListApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getQuestions: builder.query<QuestionsResponse, QuestionsQueryParams>({
         query: ({ page, title, skills, rate }) => ({
            url: '/questions/public-questions',
            params: {
               page,
               ...(title ? { title } : {}),
               ...(skills && skills.length > 0 && { skills }),
               ...(rate && rate.length > 0 && { rate }),
            },
         }),
      }),
   }),
});

export const { useGetQuestionsQuery } = questionsListApi;
