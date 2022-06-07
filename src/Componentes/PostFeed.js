import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import IMG2 from '../Assets/img2.jpg'

export default function FeedPost() {

    let textoDaPostagem = "deu certo! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue lobortis arcu, vitae euismod nunc vulputate at. Proin ac dui eget mauris vehicula tristique id ultrices libero."
    let nome = "Nome do Mandrião"
    let data = "25/03/2002"




    return (
        
        <div className="postFeed">
            <div className="userBlockCOLLUM">
                <div className="userBlockROW">
                    <AccountCircle />
                    <div className="userBlockCOLLUM">
                        <h5 className="infoPost">{nome}</h5>
                        <h6 className="infoPost">{data}</h6>
                    </div>
                </div>
                <div className="conteudoDaPostagem">
                    <div className="textoDaPostagem"><p>{textoDaPostagem}</p>
                    </div>
                    <div className="midiaDaPostagem"><img src={IMG2}></img></div>
                </div>
                <div className="reacoesDaPostagem">
                    <div className="curtidasDaPostagem">
                        <div className="like">
                            <ThumbUpOffAltIcon />
                            <p>156</p>
                        </div>
                        <div className="dlike">
                            <ThumbDownOffAltIcon />
                            <p>25</p>
                        </div>
                    </div>
                    <div className="comentariosDaPostagem"><p>127 comentarios</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

