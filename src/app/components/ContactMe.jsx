"use client"
import React, {useRef} from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faGithub, faInstagram, faLinkedin, faTwitter, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';
// import {faMapLocation, faMessage} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';


function EachInput({label,...props}){
  
  return(
    <tr>
        <td className='eachTD'>
          <label htmlFor={'InputIdFor'+label}>{label}:</label>
        </td>
        <td className='eachTD'>
          <input {...props} className='formInput' id={'InputIdFor'+label} />
        </td>
    </tr>
  )
}

export function ContactMeFrom(){
  const form = useRef()

  function handleSubmit(e){
    e.preventDefault();
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    form.current.from_name.value = ''
    form.current.from_name.placeholder = '//   Sent   //'
    form.current.subject.value = ''
    form.current.subject.placeholder = '//   Send another?   //'
    form.current.message.value = ''
  }
  return(
    <div className='ContactFormContainer'>
        <div className='FormHeading'> 
          <h3>Drop a Message?...</h3>
        </div> 
        <form ref={form} className='MainForm' onSubmit={handleSubmit}>
          <table>
            <tbody>
              <EachInput required='true' maxLength={30} name={'from_name'} type='text'  label={'Name'} />
              <EachInput required='true' maxLength={40} name={'subject'} type='text'  label={'Subject'} />
              <tr>
                <td className='eachTD'>
                  <label htmlFor={'InputIdForMessage'}>Message:</label>
                </td>
                <td className='eachTD'>
                  <textarea required='true' maxLength={200} name={'message'} className='formInput' id={'InputIdForMessage'}></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='sendButtonDiv'>
            <button className='sendButton'>
              <div>Send</div>
            </button>
          </div>
        </form>
      <div>
        
      </div>
    </div>
  )
}

function ContactMeHeading(){
  return(
    <div className='ContactMeHeading'>
        Contact Me
    </div>

  )
}

export default function ContactMe() {
  return (
    <section id='contact'>
      <ContactMeHeading />
      <div className='mainContact'>
        {/* <SocialLinks /> */}
        <ContactMeFrom />
      </div>
    </section>
  )
}
