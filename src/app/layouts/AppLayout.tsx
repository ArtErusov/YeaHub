import { Outlet } from 'react-router-dom';
import Footer from '@/widgets/footer';
import { Header } from '@/widgets/header';

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
