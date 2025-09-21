import { useSearchParams } from 'react-router-dom';
import { useGetQuestionsQuery } from '../api/questionsListApi';

export function useQuestions() {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const title = searchParams.get('title') || '';
  const skillParam = searchParams.get('skills');
  const skills = skillParam ? [Number(skillParam)] : [];
  const rateParam = searchParams.get('rate');
  const rate = rateParam ? [Number(rateParam)] : [];

  const { data, isLoading, error } = useGetQuestionsQuery({
    page,
    title,
    skills,
    rate,
  });

  return {
    questions: data?.data || [],
    totalPages: data?.total ? Math.ceil(data.total / 10) : 0,
    isLoading,
    error,
  };
}
