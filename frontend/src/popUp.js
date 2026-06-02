import axios from 'axios'

function LoginPopUp({showPopUp, closePopUp}){
    const postLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login',{
                // nome: "Teste",
                email: 'teste@email.com',
                senha: '12345',
            },{
        })
        console.log(response);
        closePopUp()
        } catch (error) {
           return null 
        }
    }

    if(!showPopUp) {return null}
    return(
        <div className="PopUp">
            <label>Login</label>
            <input className="inputPopUp" placeholder="login"></input>
            <label>Senha</label>
            <input className="inputPopUp" placeholder="senha"></input>
            <div className="buttonLine">
                <button className="login" onClick={() => {postLogin()}}>Logar</button>
                <button className="close" onClick={closePopUp}>Cancelar</button>
            </div>
        </div>
    )
}

export default LoginPopUp;