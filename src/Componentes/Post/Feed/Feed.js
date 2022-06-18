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
        <div className="postFeed d_flex justify_content_center align_items_center">


            <div className="userBlockCOLLUM d_flex f_column justify_content_center">
                <div className="userBlockROW d_flex f_row align_items_center">
                    <AccountCircle />
                    <div className="userBlockCOLLUM d_flex f_column justify_content_center">
                        <h5 className="infoPost">{nome}</h5>
                        <h6 className="infoPost">{data}</h6>
                    </div>
                </div>
                <div className="conteudoDaPostagem d_flex f_column justify_content_center align_items_center">
                    <div className="textoDaPostagem">
                        <p>{publication.legenda}</p>
                    </div>
                    <div className="midiaDaPostagem d_flex justify_content_center align_items_center">
                          <img src={publication.arquivos[0]?.conteudo} />
                    </div>
                    <div className="reacoesDaPostagem d_flex justify_content_spacebetween align_items_center">
                        <div className="d_flex justify_content_spacebetween align_items_center">
                            <div className="like d_flex justify_content_spacebetween align_items_center">
                                <ThumbUpOffAltIcon />
                                <p>{publication.curtidas}</p>
                            </div>
                            <div className="dlike d_flex justify_content_spacebetween align_items_center">
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
