import { Link } from 'react-router-dom';

import contenido from '../PaginaPrincipal/fotos/contenido.png';
import oferta1 from '../PaginaPrincipal/fotos/oferta1.webp';
import plataformaEducativa
  from '../PaginaPrincipal/fotos/plataformaEducativa.jpg';
import quienesSomos from '../PaginaPrincipal/fotos/quienesSomos.webp';
import styles from './PaginaPrincipal.module.css';

export const PaginaPrincipal = () => {
  return (
    <div>
      <div class="col-12 col-md-8">
      <div class="row" className={styles.Inicio}>
      <h1>Plataforma Educativa de Simulacion de Sistemas</h1>

        <div className={styles.Cuadro}>
          <img src={plataformaEducativa} alt="" className={styles.fotoCuadro} />
          <p>Amplia tus conocimientos en Simulacion de Sistemas</p>
          <Link to={`/registro`}>
            <p>Registrate</p>
          </Link>
        </div>

       <div></div>
       <div class="col-12 col-md-4" className={styles.Left}><section class="">
       <h2>Nuestro contenido base</h2>
       <img src={contenido} alt="" className={styles.fotoCuadro} />

          <p>Introduccion a la Simulacion de Sistemas</p>
          <p>Gereración de Números Rectangulares</p>
          <p>Pruebas Estadísticas para Números Pseudoaleatorios</p>
          <p>Generación de Variables Aleatorias No-Uniformes.</p>
          <p>Aplicaciones de Simulación</p>
          </section>  </div>
          <div class="col-12 col-md-4" className={styles.Right}>

        <h2>Quienes somos?</h2>
        <div >
          <img src={quienesSomos} alt="" className={styles.fotoCuadro} />
          <div bgcolor="#FF0000">
          <p>Somos un grupo con el objetivo de </p>
          <p> hacer que el material de Simulacion de Sistemas</p>
          <p>sea accesible para todo publico, sin importar </p>
          <p> la edad, desarrollando oportunidades para que tanto </p>
          <p> docente y estudiante tengan una plataforma gratuita donde puedan</p>
          <p>intercambiar conocimiento, de forma didactica y simple.</p>
          </div>
        </div></div>
        <h2>Que ofrecemos?</h2>
        
        <div className={styles.Titulo}>
                <div >
              </div>
              <img src={oferta1} alt="" className={styles.fotoCuadro2} />        

              <div className={styles.Class}>

                <h2>Material disponible 24/7</h2>
                <p>
                  Tendras el material accesible todo el dia, todos los dias.
                </p>
              </div>
              <div className={styles.Class}>
                <h2>Aprende en comunidad</h2>
                <p>
                Conecta con otros estudiantes, comparte tus proyectos y tus dudas.
                </p>
              </div>
              </div> 

              <div className={styles.Titulo}>
                <div >
              </div>
              <img src={oferta1} alt="" className={styles.fotoCuadro2} />        

              <div className={styles.Class}>

                <h2>Material disponible 24/7</h2>
                <p>
                  Tendras el material accesible todo el dia, todos los dias.
                </p>
              </div>
              <div className={styles.Class}>
                <h2>Aprende en comunidad</h2>
                <p>
                Conecta con otros estudiantes, comparte tus proyectos y tus dudas.
                </p>
              </div>
              </div> 
              </div>    
    </div>
      
    </div>    
   
    

  );
};
