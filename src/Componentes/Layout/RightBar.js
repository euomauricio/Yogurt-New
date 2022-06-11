import dog from '../../Assets/dog.png';
import skate from '../../Assets/skate.png';
import livro from '../../Assets/livro.png';
import disponivel from '../../Assets/disponivel.png';

export default function RightBar() {
    return (
        <div className="rightBar">
           <h3>Amigos</h3>
            <div>
            
                <div className="comunidades">
                <img className="dog" src={dog}></img><h5>Cristina Priester</h5>
                </div>

                <div className="amizades">
                    <img  className="disponivel" src={disponivel}></img>
                    
                    <div className="amigos">                
                    <img src={skate}></img> <h5>Mauricio</h5>
                    </div>
                </div>
                

                <div className="comunidades">
                <img classname="dog" src={livro}></img><h5>João</h5>
                </div>

                <div className="comunidades">
                <img classname="dog" src={livro}></img><h5>Alexandre</h5>
                </div>

                <div className="comunidades">
                <img classname="dog" src={livro}></img><h5>Matheus</h5>
                </div>

                <div className="comunidades">
                <img classname="dog" src={livro}></img><h5>Leandro</h5>
                </div>

                <div className="comunidades">
                <img classname="dog" src={livro}></img><h5>Rodrigo</h5>
                </div>

                <div className="comunidades">
                <img classname="dog" src={livro}></img><h5>Vanessa Lopes</h5>
                </div>
                
            </div> 
        </div>
    )
}

