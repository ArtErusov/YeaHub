import { useSearchParams } from 'react-router-dom';
import { useGetQuestionsQuery } from '../api/questionsListApi';
import { QUESTIONS_PER_PAGE } from '@/shared/config/pagination';

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

    const totalPages = data?.total ? Math.ceil(data.total / QUESTIONS_PER_PAGE) : 0;

  return {
    questions: data?.data || [],
    totalPages,
    isLoading,
    error,
  };
}
