import React from "react";
import { TouchableOpacity, Text } from "react-native";
import funcaoEstilosPadrao from '../Botao/estilos';

const Botao = ({pequeno = false, invertido = false,valor, acao, estilos}) => {

    const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);

    return (
        <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilos]}>
            <Text style={estilosPadrao.valor}>{valor}</Text>
        </TouchableOpacity>
    )
}

export default Botao;