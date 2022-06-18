
import dog from '../../../Assets/FotoDeUmDiaBom.jpeg';
import skate from '../../../Assets/bichao.jpg';
import livro from '../../../Assets/img/AOdisseiaHomero.jpg';

export default function LeftBar() {
    return (
        <div className="leftBar d_flex f_column justify_content_start align_items_center">
            <h3>Suas Comunidades</h3>
            <div>
                <div className="comunidades d_flex f_row align_items_center justify_content_start">
                    <img className="dog" src={dog}></img><h5>Dog lovers</h5>
                </div>
                
                <div className="comunidades d_flex f_row align_items_center justify_content_start">
                    <img className="dog" src={skate}></img><h5>Skatistas</h5>
                </div>

                <div className="comunidades d_flex f_row align_items_center justify_content_start">
                    <img className="dog" src={livro}></img><h5>Amantes de Romance</h5>
                </div>
            </div>
        </div>
    )
}

