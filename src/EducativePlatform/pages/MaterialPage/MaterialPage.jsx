import { useParams } from 'react-router-dom';

import { useFetch } from '../../../hooks';
import { Loading } from '../../../UI';
import { MaterialCard } from '../../components';

export const MaterialPage = () => {
  const { id_capitulo } = useParams();
  const url = `http://142.93.203.113:3001/api/chapters/${id_capitulo}/material`;
  const { content } = useFetch(url, "GET");
  const { isLoading, hasError } = content;
  const { descripcion_material, titulo_material, material } = content.data;
  console.log(content.data);
  return (
    <div className="mt-3">
      {isLoading? <Loading />:

      <>
        <h3>{titulo_material}</h3>
        <p>{descripcion_material}</p>
        {material.length>0?
        material.map((item)=><MaterialCard key={item.id_archivo} data={item}/>) :<>no hay material disponible</>   }
      </>
      
      }

    </div>
  );
};

{/* <div className="card ">
<div className="card-header">Featured</div>
<div className="card-body">
  <h5 className="card-title">Special title treatment</h5>
  <p className="card-text">
    With supporting text below as a natural lead-in to additional
    content.
  </p>

  <a href="#" className="btn btn-primary">
    Go somewhere
  </a>

</div>
</div>
</div> */}