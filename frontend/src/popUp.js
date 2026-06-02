function LoginPopUp({showPopUp, closePopUp}){
    if(!showPopUp) {return null}
    return(
        <div className="PopUp">
            <label>Login</label>
            <input className="inputPopUp" placeholder="login"></input>
            <label>Senha</label>
            <input className="inputPopUp" placeholder="senha"></input>
            <div className="buttonLine">
                <button className="login" onClick={() => {}}>Logar</button>
                <button className="close" onClick={closePopUp}>Cancelar</button>
            </div>
        </div>
    )
}

export default LoginPopUp;