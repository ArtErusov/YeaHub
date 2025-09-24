import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '@/app/layouts/AppLayout';
import { QuestionsPage } from '@/page/questionsPage';
import { Skeleton } from '@/shared/ui/skeleton';

const QuestionDetailsPage = lazy(() => import('@/page/questionDetailsPage'));

const router = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout />,
      children: [
         {
            path: '/',
            element: <QuestionsPage />,
         },
         {
            path: 'questions/:id',
            element: (
               <Suspense fallback={<Skeleton />}>
                  <QuestionDetailsPage />
               </Suspense>
            ),
         },
      ],
   },
]);

export default router;
