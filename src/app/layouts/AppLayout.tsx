import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/Test';

function AppLayout() {
   return (
      <div>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}

export default AppLayout;
