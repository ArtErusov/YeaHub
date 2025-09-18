import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/app/layouts/AppLayout';

const router = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout />,
      children: [
         {
            path: '/',
            element: <p>Тест элемент</p>,
         },
      ],
   },
]);

export default router;
