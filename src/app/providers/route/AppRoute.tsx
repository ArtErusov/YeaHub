import AppLayout from '@app/layouts/AppLayout';
import { createBrowserRouter } from 'react-router-dom';
import { Test1, Test2 } from '@/Test';

const router = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout />,
      children: [
         {
            path: 't1',
            element: <Test1 />,
         },
         {
            path: 't2',
            element: <Test2 />,
         },
      ],
   },
]);

export default router;
