import React from 'react'
import './contact.css'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import location_icon from '../../assets/edusity_assets/location-icon.png'
import white_arror from '../../assets/edusity_assets/white-arrow.png'

const Contact = () => {
   

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa0eaaf4-6ec1-4455-8d77-adeedccffde3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a message <img src={msg_icon} alt='' /></h3>
        <p>Feel free to reach out through conatct form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li><img src={mail_icon} alt=''/>General Inquiries: info@cumail.in​<br></br>
                  Admissions: admissions@cumail.in​  <br></br>
                  Registrar: registrar@cumail.in</li>
          <li><img src={phone_icon} alt='' />1800 257 1800​ <br></br>
                    Toll-Free: 1800 1212 88800​</li>
          <li><img src={location_icon} alt=''/>NH-05 Chandigarh-Ludhiana Highway, Mohali, Punjab, India</li>
        </ul>
      </div>
      <div className="contact-col">

      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type='text' name='name' placeholder='Enter you name' required></input>
        <label>Phone Number</label>
        <input type='tel' name='phone' placeholder='Enter your Moblie number' required></input>
        <label>Write your message here</label>
        <textarea name='message' rows="4" placeholder='Enter your message' required ></textarea>
        <button type='sumbit' className='btn dark-btn'>Submit Now<img src={white_arror} alt=''/></button>
      </form>
      <span>{result}</span>
      </div>
      
    </div>
  )
}

export default Contact
