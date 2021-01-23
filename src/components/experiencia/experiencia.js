import React from "react";
import ItemExperiencia from './item-experiencia/item-experiencia'

function Experiencia(props) {

  const {experiencia} = props.respostaExperiencia
  console.log(experiencia)

  return (
    <div className="experience">
      <h2>Experiência Profissional</h2>

      {experiencia.map(item => (
        <ItemExperiencia key={item.id} experiencia={item} />
      ))}
    </div>
  )
}

export default Experiencia