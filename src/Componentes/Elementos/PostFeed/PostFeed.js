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
                    <div className="textoDaPostagem"><p>{textoDaPostagem}</p>
                    </div>
                    <div className="midiaDaPostagem d_flex justify_content_center align_items_center"><img src={IMG2}></img></div>
                </div>
                <div className="reacoesDaPostagem d_flex justify_content_spacebetween align_items_center">
                    <div className="d_flex justify_content_spacebetween align_items_center">
                        <div className="like d_flex justify_content_spacebetween align_items_center">
                            <ThumbUpOffAltIcon />
                            <p>156</p>
                        </div>
                        <div className="dlike d_flex justify_content_spacebetween align_items_center">
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

