import type { SkillType } from '../model/types';
import baseApi from '@/shared/api/baseApi';

const skillsApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getSkills: builder.query<SkillType[], void>({
         query: () => '/skills',
         transformResponse: (response: { data: SkillType[] }) => response.data,
      }),
   }),
});

export const { useGetSkillsQuery } = skillsApi;
