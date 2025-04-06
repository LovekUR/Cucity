import React, { useRef } from 'react'
import './testimonial.css'
import next_icon from '../../assets/edusity_assets/next-icon.png'
import back_icon from '../../assets/edusity_assets/back-icon.png'
import user_1 from '../../assets/edusity_assets/user-1.png'
import user_2 from '../../assets/edusity_assets/user-2.png'
import user_3 from '../../assets/edusity_assets/user-3.png'
import user_4 from '../../assets/edusity_assets/user-4.png'

const Testimonial = () => {
      const slider = useRef();
      let tx=0;

   
    const slideForward = () =>{
      if(tx>-50){
        tx -=25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward =() =>{
      if(tx<-0){
        tx +=25;
      }
      slider.current.style.transform = `translateX(${tx}%)`

    }
  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt='' />
                <div>
                  <h3>Medhavi</h3>
                  <span>West Bengal, IN</span>
                </div>
              </div>
              <p>
              "Practical learning and approach are very important. I’m thankful to Chandigarh University for always emphasizing practical learning along with academics and to the CU faculty, whose proper guidance, direction, motivation have helped me achieve my goals."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt='' />
                <div>
                  <h3>​Geet Dhingra</h3>
                  <span>Himachal Pradesh, IN</span>
                </div>
              </div>
              <p>
              "Chandigarh University has been a transformative journey for me. The campus life here is so good and Cool. Engaging with fellow students and faculty has enriched my perspective,I'm confident that CU has laid the foundation for a bright future."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt='' />
                <div>
                  <h3>Devika</h3>
                  <span>Mohali, Punjab </span>
                </div>
              </div>
              <p>
              "Chandigarh University has taught me a lot more than academics. It has taught me to be resilient, to be determined & brave irrespective of the circumstances. I appreciate my mentors & my university for helping me become a global professional."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt='' />
                <div>
                  <h3>Ajay</h3>
                  <span>Gujrat, IN</span>
                </div>
              </div>
              <p>
              "Practical learning and approach are very important. I’m thankful to Chandigarh University for always emphasizing practical learning along with academics and to the CU faculty, whose proper guidance, direction, and motivation have helped me achieve my goals."
              </p>
            </div>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Testimonial
