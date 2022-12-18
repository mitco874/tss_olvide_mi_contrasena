import './LandingPage.css';

import { PaginaPrincipal } from '../PaginaPrincipal/PaginaPrincipal';

export const LandingPage = () => {
  

  return (
    <main className="d-flex flex-column ">
      <section className="d-flex flex-row w-100 h-100 justify-content-around mb-5">
        
        <PaginaPrincipal/>
      </section>
    </main>
  );
};
