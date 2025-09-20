import type { QuestionsQueryParams, QuestionsResponse } from "../model/types";
import baseApi from "@/shared/api/baseApi";

const questionsListApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getQuestions: builder.query<QuestionsResponse, QuestionsQueryParams>({
      query: ({ page, title}) => ({
        url: "/questions/public-questions",
        params: {
          page,
         ...(title ? { title } : {}),
        },
      }),
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsListApi;
