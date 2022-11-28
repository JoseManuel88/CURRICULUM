import React from 'react'
import "./Experience.css";
export const Experience = ({experience}) => {
    console.log(experience);
  return (
  <div>
    <div className='expe_2'>
    <div className='expe'>Experience</div>
  <div>
 <p>{experience[0].name}</p>
 <p>{experience[0].date}</p>
 <p>{experience[0].where}</p>
 <p>{experience[0].description}</p>
 </div>
 <div>
 <p>{experience[1].name}</p>
 <p>{experience[1].date}</p>
 <p>{experience[1].where}</p>
 <p>{experience[1].description}</p>
 </div>


 </div>
 
 
 
  </div>
   
  )
}

export default Experience