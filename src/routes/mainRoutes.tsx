import { createBrowserRouter } from 'react-router-dom';
import { App, One, Two } from '@/components/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'one', element: <One /> },
      { path: 'two', element: <Two /> },
    ],
  },
]);

export default router;
