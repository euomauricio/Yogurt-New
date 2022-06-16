import FotoDeUmDiaBom from '../Assets/FotoDeUmDiaBom.jpeg'
import Leoncio from '../Assets/Leoncio.gif'

export default function Stories() {



  //Precisa fazer função de buscar stories no back

  function ChamarCardStory() {
    let foto = Leoncio;
    let storie = FotoDeUmDiaBom;
    let nome = 'Boliña de Gorfe'
    return (
      <div class="item">
        <div class="bottom-left">
          <div class="stories-card">
            <img class="stories-card-foto" src={foto} />
            <p> {nome} </p>
          </div>
        </div>
        <img class="storie" src={storie} />
      </div>
    )
  };

  return (


    <div class="wrapper">

      <section id="section1">
        <a href="#section3" class="arrow__btn">‹</a>
        <ChamarCardStory />
        <ChamarCardStory />
        <ChamarCardStory />
        <ChamarCardStory />
        <a href="#section2" class="arrow__btn">›</a>
      </section>

      <section id="section2">
        <a href="#section1" class="arrow__btn">‹</a>
        <ChamarCardStory />
        <ChamarCardStory />
        <ChamarCardStory />
        <ChamarCardStory />
        <a href="#section3" class="arrow__btn">›</a>
      </section>

      <section id="section3">
        <a href="#section2" class="arrow__btn">‹</a>
        <ChamarCardStory />
        <ChamarCardStory />
        <ChamarCardStory />
        <ChamarCardStory />
        <a href="#section1" class="arrow__btn">›</a>
      </section>

    </div>
  )
};