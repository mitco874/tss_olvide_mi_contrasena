import { useParams } from 'react-router-dom';

import { MaterialCard } from '../';
import { useFetch } from '../../../hooks';
import { Loading } from '../../../UI';

export const ForoLayout = () => {
  const { id_capitulo } = useParams();
  const url = `http://142.93.203.113:3001/api/chapters/1/forum${id_capitulo}/forum`;
  const { content } = useFetch(url, "GET");
  const { isLoading, hasError } = content;
  const { descripcion_foro, titulo_foro, mensajes:[id_mensaje, autor, mensaje] } = content.data;
  console.log(content.data);
  return (
    <div className="mt-3">
      {isLoading? <Loading />:

      <>
        <h3>{titulo_foro}</h3>
        <p>{descripcion_foro}</p>
        {mensajes.length>0?
        mensajes.map((item)=><MaterialCard key={item.id_mensaje} data={mensaje}/>) :<>no hay mensajes</>   }
      </>
      
      }

    </div>
  );
};