import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Fim } from "./footer";
import './style.css'

export const App = () => {
  type info = {
    id: number;
    tipo: string;
    titulo: string;
    introducao: string;
    link: string;
    data_publicacao:string;
  };
  const informacao = (a:string,b:boolean)=>{
    setIntro(a)
    setDecisao(b)
    
  }

  const [dado, setDado] = useState<info[]>([]);
  let aux: info[] = [];
  const [intro,setIntro] = useState<string>('');
  const [decisao,setDecisao] = useState<boolean>(false);

  
 

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=5&introsize=2000&busca="+intro)
      .then((response) => response.json())
      .then((a) => {
        a.items.map((item: any) => {
          aux.push(item);
          setDado(aux);
          
        });
      });
  }, [intro]);

  return (
    <div>
      <Header infoFn={informacao}/>
      {dado.map((item) => (
        <div key={item.id} className="corpo">
          <h2>{item.titulo}</h2>
          <p>{item.data_publicacao}</p>
          <p>{item.introducao}</p>
          <p>
            <a href={item.link} target="_blank">
              Acessa a informação
            </a>
          </p>
        </div>
      ))}
      <Fim/>
    </div>
  );
};
export default App;
