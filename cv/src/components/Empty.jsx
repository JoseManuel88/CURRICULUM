import React,{usestate} from 'react'

const Empty = () => {
    const [isRaining,setIsRaining] = useState(false);
  return (
    <div>
       Componente Empty
       <h2>El profe sera{props.profe}</h2>
       <button onClick={() => setIsRaining(!isRaining)}>Cambiar con el tiempo</button>
       <h2>El tiempo de hoy es {isRaining ? 'lluvioso' : 'soleado'}</h2>
        </div>
  )
}

export default Empty