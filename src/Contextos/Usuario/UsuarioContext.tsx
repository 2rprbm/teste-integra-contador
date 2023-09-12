import {ReactHTMLElement, ReactNode, createContext, useContext, useState} from 'react'


interface IPropsContexto {
    nomeUsuario: string,
    setNomeUsuario: React.Dispatch<React.SetStateAction<string>>
}

interface IPropsChildren {
    children: React.ReactNode
}

const UsuarioContext = createContext<IPropsContexto>({
    nomeUsuario: "",
    setNomeUsuario: () => ""
});

export const useUsuarioContext = () => {
    return useContext(UsuarioContext)
}


function UsuarioContextProvider ({children}: IPropsChildren) {

    const [nomeUsuario, setNomeUsuario] = useState<string>("");
    const propsContexto = {nomeUsuario, setNomeUsuario}

    return (
        <UsuarioContext.Provider value={propsContexto}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContextProvider;