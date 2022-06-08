import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Bichao from '../../../Assets/bichao.jpg'




export default function PostFeed({publication}) {

    let nome = "Nome do Mandrião"
    let data = "25/03/2002"
    console.log(publication)

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
                    <div className="textoDaPostagem">
                        <p>{publication.legenda}</p>
                    </div>
                    <div className="midiaDaPostagem">
                          <img src={publication.arquivos[0]?.conteudo} />
                    </div>
                    <div className="reacoesDaPostagem">
                        <div className="curtidasDaPostagem">
                            <div className="like">
                                <ThumbUpOffAltIcon />
                                <p>{publication.curtidas}</p>
                            </div>
                            <div className="dlike">
                                <ThumbDownOffAltIcon />
                                <p>{publication.curtidas}</p>
                            </div>
                        </div>
                        <div className="comentariosDaPostagem"><p>127 comentarios</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
