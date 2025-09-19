import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/app/layouts/AppLayout';
import QuestionsPage from '@/page/questionsPage';

const router = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout />,
      children: [
         {
            path: '/',
            element: <QuestionsPage />,
         },
      ],
   },
]);

export default router;
