import ConfigProfile from '../ConfigProfile/ConfigProfile'

export default function Bio({id, nickName, nameUser, biografia}) {
    return (
        <div className="bio d_flex f_row">
            <div className="imageBio"></div>
            <div className="textBio">
                <div className="d_flex justify-content-between w-100"> 
                    <div className="names d_flex f_column align_content_spacearound">
                        <div className="nickName">Cristina Pri</div>
                        <div className="nameUser">@cris_pri</div>
                    </div>

                    <div>
                        <button id="btn_Connect" type="button" className="btn button btnConnect">Conectar-se</button>
                        <ConfigProfile />
                    </div>
                </div>
                
                <div className="biografia">yo soy mui..</div>
            </div>

            
        </div>
    )
}