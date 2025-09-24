import type { QueryParams, Question } from "../model/types";
import baseApi from "@/shared/api/baseApi";

const getQuestionApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getQuestion: builder.query<Question, QueryParams>({
      query: ({ id }) => `/questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetQuestionQuery } = getQuestionApi;
