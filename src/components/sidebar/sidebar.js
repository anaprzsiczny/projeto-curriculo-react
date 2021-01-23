import React from "react";
import Contatos from './contatos/contatos'
import Educacao from './educacao/educacao'

function Sidebar(prop) {

  const {contatos, educacao} = prop.respostaSidebar
  console.log(contatos)
  console.log(educacao)

  return (
    <aside>
      <div className="sidebar">
        <Contatos contatos={contatos}/>
      </div>
          
      <div className="sidebar">  
        <Educacao educacao={educacao} />
      </div>        
    </aside>
  )
}

export default Sidebar