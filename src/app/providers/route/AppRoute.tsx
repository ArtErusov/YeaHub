import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/app/layouts/AppLayout';
import { QuestionDetailsPage } from '@/page/questionDetailsPage';
import { QuestionsPage } from '@/page/questionsPage';

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
            element: <QuestionDetailsPage />,
         },
      ],
   },
]);

export default router;
