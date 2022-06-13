import usuario1 from '../../Assets/usuario1.png';
import usuario2 from '../../Assets/usuario2.png';
import usuario3 from '../../Assets/usuario3.png';
import usuario4 from '../../Assets/usuario4.png';
import usuario5 from '../../Assets/usuario5.png';
import usuario6 from '../../Assets/usuario6.png';
import usuario7 from '../../Assets/usuario7.png';
import usuario8 from '../../Assets/usuario8.png';
import disponivel from '../../Assets/disponivel.png';


export default function RightBar() {
    return (
        <div className="rightBar">
           <h3>Amigos</h3>
            <div>
            
            <div className="amizades">
                    <img  className="disponivel" src={disponivel}></img>
                    
                    <div className="amigos">                
                    <img src={usuario1}></img> 
                    </div>
                    <h5>Cristina Priester</h5>
                </div>

                <div className="amizades">
                    <img  className="disponivel" src={disponivel}></img>
                    
                    <div className="amigos">                
                    <img src={usuario2}></img> 
                    </div>
                    <h5>Mauricio Luiz</h5>
                </div>

                <div className="amizades">
                    <img  className="disponivel" src={disponivel}></img>
                    
                    <div className="amigos">                
                    <img src={usuario8}></img> 
                    </div>
                    <h5>Vanessa Lopes</h5>
                </div>

                 <div className="amizades">
                    <img  className="disponivel" src={disponivel}></img>
                    
                    <div className="amigos">                
                    <img src={usuario3}></img> 
                    </div>
                    <h5>João Marcos</h5>
                </div>

                <div className="amizades">
                    <img  className="disponivel" src={disponivel}></img>
                    
                    <div className="amigos">                
                    <img src={usuario4}></img> 
                    </div>
                    <h5>Alexandre Hausmann</h5>
                </div>

                <div className="amizades">
                    <img  className="disponivel" src={disponivel}></img>
                    
                    <div className="amigos">                
                    <img src={usuario5}></img> 
                    </div>
                    <h5>Matheus Petri</h5>
                </div>

                <div className="amizades">
                    <img  className="disponivel" src={disponivel}></img>
                    
                    <div className="amigos">                
                    <img src={usuario6}></img> 
                    </div>
                    <h5>Leandro Schmitt Elias</h5>
                </div>

                <div className="amizades">
                    <img  className="disponivel" src={disponivel}></img>
                    
                    <div className="amigos">                
                    <img src={usuario7}></img> 
                    </div>
                    <h5>Rodrigo Leonardo da Silva</h5>
                </div>

                
                
            </div> 
        </div>
    )
}

