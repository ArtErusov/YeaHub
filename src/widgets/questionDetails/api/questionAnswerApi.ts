import type { QueryParams, Question } from "../model/types";
import baseApi from "@/shared/api/baseApi";

const questionAnswerApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAnswer: builder.query<Question, QueryParams>({
      query: ({ id }) => `/questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetAnswerQuery } = questionAnswerApi;
