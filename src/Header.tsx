import { useState } from 'react';
import './style.css'


export const Header=({infoFn}:any)=>{
    const [valor, setValor] = useState<string>('');
    const handleInput=(event:any)=>{
        setValor(event.target.value);
        
    }
    const handleClick=()=>{
        infoFn(valor,true)
        setValor('')
    }
    return (
        <header className="topo">
            NOTICIAS
            <div>
            <input type="text" name="pesquisa" id="" placeholder='Pesquisar' value={valor} onChange={handleInput}/>
            <button onClick={handleClick}>Pesquisar</button>
            </div>
        </header>
    )
}