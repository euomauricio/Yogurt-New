 
export default function Bio({id, nickName, nameUser, biografia}) {

    function showDivConfig() {
        document.getElementById("divConfig").style.display = "block";
    }

    return (
        <div className="bio">
            <div className="imageBio"></div>
            <div className="textBio">
                <div className="d-flex justify-content-between w-100"> 
                    <div className="names">
                        <div className="nickName">Cristina Pri</div>
                        <div className="nameUser">@cris_pri</div>
                    </div>

                    <div>
                        <button id="btn_Connect" type="button" className="btn button btnConnect">Conectar-se</button>
                        <div onClick={showDivConfig} className="btnConfig"></div>
                    </div>
                </div>
                
                <div className="biografia">A cristina é muito fofa e nada grossa :* bjs aaaaaaaaaaaaaaaaaaaaaa</div>
            </div>

            <div id="divConfig">
                <div>
                    <label>Foto</label>
                    <input type="file" name="Escolher foto" accept="image/*"  />
                    <label>Nome </label>
                    <input type="text"   />
                    <label>Senha</label>
                    <input type="password"   />
                    <label>Descrição da biografia</label>
                    <textarea rows="4" cols="40" maxlength="200"></textarea>

                </div>
            </div>
        </div>
    )
}