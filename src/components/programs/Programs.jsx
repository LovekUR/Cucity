import './Programs.css'
import React from 'react'
import program_1 from '../../assets/edusity_assets/program-1.png'
import program_2 from '../../assets/edusity_assets/program-2.png'
import program_3 from '../../assets/edusity_assets/program-3.png'
import program_icon_1 from '../../assets/edusity_assets/program-icon-1.png'
import program_icon_2 from '../../assets/edusity_assets/program-icon-2.png'
import program_icon_3 from '../../assets/edusity_assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt=''></img>
        <div className="caption">
          <img src={program_icon_1}></img>
          <p> Undergraduate Programs</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt=''></img>
        <div className="caption">
          <img src={program_icon_2}></img>
          <p>Postgraduate Programs</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt=''></img>
        <div className="caption">
          <img src={program_icon_3}></img>
          <p>Ph.D Programs</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
