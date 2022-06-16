
import dog from '../../../Assets/dog.png';
import skate from '../../../Assets/skate.png';
import livro from '../../../Assets/livro.png';

export default function LeftBar() {
    return (
        <div className="leftBar">
            <h3>Suas Comunidades</h3>
            <div>
            
                <div className="comunidades">
                    <img className="dog" src={dog}></img><h5>Dog lovers</h5>
                </div>
                
                <div className="comunidades">
                    <img className="dog" src={skate}></img><h5>Skatistas</h5>
                </div>

                <div className="comunidades">
                    <img className="dog" src={livro}></img><h5>Amantes de Romance</h5>
                </div>

               
            </div>
        </div>
    )
}

