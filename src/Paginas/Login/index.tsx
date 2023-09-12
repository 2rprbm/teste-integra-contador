import { Box, Paper, TextField, Button } from "@mui/material";
import { useUsuarioContext } from "Contextos/Usuario/UsuarioContext";
import { useNavigate } from "react-router-dom";

function Login() {

    const {nomeUsuario, setNomeUsuario} = useUsuarioContext()
    const navegacao = useNavigate()
    return (
        <Box sx={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#404040'}}>
            <Paper elevation={13} sx={{backgroundColor: '#181818', padding: '5rem 8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '2rem'}}>
                <TextField onChange={(evento) => setNomeUsuario(evento.target.value)} value={nomeUsuario} type="text" label="Usuário" placeholder="Digite o nome do usuário" sx={{width: '360px', display: 'flex', flexDirection: 'column', rowGap: '1rem', backgroundColor: '#B3B3B3'}}></TextField>
                <Button onClick={() => navegacao('/home-interna')}>Avançar</Button>
            </Paper>
        </Box>
    )
}

export default Login;