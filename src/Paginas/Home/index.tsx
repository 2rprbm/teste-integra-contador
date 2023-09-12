import { useUsuarioContext } from "Contextos/Usuario/UsuarioContext";
import axios from "axios";


function Home() {

    const {nomeUsuario} = useUsuarioContext()

    axios.post('https://autenticacao.sapi.serpro.gov.br/authenticate', {
        header: {
            "Authorization": "Basic M1g3dEhBa0xEdVVkUFVJaHlqSWVfOGZMdk04YTpBYm80aTJiX01vclNDa0hSZXdHcExmMTNQa1Vh",
            "role-type": "TERCEIROS",
            "content-type": "application/x-www-form-urlencoded"
        }    
    }).then(resposta => console.log(resposta))

    return(
        <h1>Olá, bem vindo {nomeUsuario}</h1>
    )
}

export default Home;