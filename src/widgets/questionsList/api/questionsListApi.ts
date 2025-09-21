import type { QuestionsQueryParams, QuestionsResponse } from "../model/types";
import baseApi from "@/shared/api/baseApi";

const questionsListApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getQuestions: builder.query<QuestionsResponse, QuestionsQueryParams>({
      query: ({ page, title, skills}) => ({
        url: "/questions/public-questions",
        params: {
          page,
         ...(title ? { title } : {}),
         ...(skills && skills.length > 0 && { skills }),
        },
      }),
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsListApi;
