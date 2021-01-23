import React, { useState } from "react";

function Contatos(prop) {

  const {contatos} = prop
  console.log(contatos)

  const [botao, apertaBotao] = useState(false)

  const mostraContato = () => {
    apertaBotao(true)
  }

  return (
    <>
      <h3>Contatos</h3>

      <button onClick={mostraContato}>Mostrar Contatos</button>

      {botao && 
        <div className="lista-de-contatos">
          {contatos.map(item => (
            <div key={item.id} className="item-contato">
              <h4>{item.tipo}</h4>
              <p>{item.contato}</p>
            </div>
          ))}
        </div>
      }
    </>
  )
}

export default Contatos