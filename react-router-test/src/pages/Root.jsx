// Временно закомментируй импорт:
// import Header from "../components/header";
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

function RootPage() {


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

export default RootPage;
