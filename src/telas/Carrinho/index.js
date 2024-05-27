import React from "react";
import TelaPadrao from "../../componentes/TelaPadrao";
import { FlatList } from "react-native";
import Item from "../Carrinho/Item";
import StatusCarrinho from "../../componentes/StatusCarrinho";


const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.90,
        descricao: "NÃO DÊ BANHO NO SEU GATO ! Mas se precisar nós damos.",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.90,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas",
        quantidade: 2
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.90,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano",
        quantidade: 1
    }
]



const Carrinho = () => {
  
    const total = servicos.reduce((soma, {preco, quantidade}) =>  soma + (preco * quantidade), 0);

    return (
       <TelaPadrao>
       <StatusCarrinho total={total}/>
            <FlatList
                data={servicos}
                renderItem={({item}) => <Item {...item}/>}
                keyExtractor={({id}) => String(id)}
             />
       </TelaPadrao>
       
    )
}

export default Carrinho;