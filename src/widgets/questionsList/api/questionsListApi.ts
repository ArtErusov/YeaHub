import type { QuestionsQueryParams, QuestionsResponse } from "../model/types";
import baseApi from "@/shared/api/baseApi";

const questionsListApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getQuestions: builder.query<QuestionsResponse, QuestionsQueryParams>({
      query: ({ page}) => ({
        url: "/questions/public-questions",
        params: {
          page
         
        },
      }),
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsListApi;
