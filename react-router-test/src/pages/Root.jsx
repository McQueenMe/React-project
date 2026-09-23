// Временно закомментируй импорт:
// import Header from "../components/header";
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

function RootPage() {


   return (
      <div>
         {/* Временно закомментируй сам тег: */}
         <Header />

         <div>
            Root is it
         </div>

         <main>
            <Outlet />
         </main>
      </div>
   );
}

export default RootPage;
