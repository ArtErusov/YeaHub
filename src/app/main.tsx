import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router, store } from './providers';

const rootElement = document.getElementById('root') as HTMLDivElement | null;

if (!rootElement) {
   throw new Error('Root Element is not defined!');
}

const root = createRoot(rootElement);
root.render(
   <StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </StrictMode>,
);
