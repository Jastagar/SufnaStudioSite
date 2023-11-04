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
          <input {...props} className='rounded text-xl m-4 w-full p-2' id={'InputIdFor'+label} />
        </td>
    </tr>
  )
}

export function ContactMeFrom({data}){
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
    <div className='flex flex-col items-center p-10'>
        <div className='p-8'> 
          <h3 className='text-xl font-semibold'>{data.subheading}</h3>
        </div> 
        <form ref={form} className='MainForm' onSubmit={handleSubmit}>
          <table>
            <tbody>
              <EachInput placeholder="Your name" required={true} maxLength={30} name={'from_name'} type='text'  label={'Name'} />
              <EachInput placeholder="What can we do for you?" required={true} maxLength={40} name={'subject'} type='text'  label={'Subject'} />
              <tr>
                <td className='eachTD'>
                  <label htmlFor={'InputIdForMessage'}>Message:</label>
                </td>
                <td className='eachTD'>
                  <textarea placeholder='Wanna describe more?' required={true} maxLength={200} name={'message'} className='rounded text-xl m-4 w-full p-2' id={'InputIdForMessage'}></textarea>
                </td>
              </tr>
            </tbody>
          </table>
            <button className='text-white text-xl rounded-md px-6 py-1 bg-primary-300 hover:bg-primary-700 hover:cursor-pointer'>
              Send
            </button>
        </form>
      <div>
        
      </div>
    </div>
  )
}

export default function ContactMe({data}) {
  return (
    <section id='contact' className='bg-primary-500 text-white h-auto'>
      <h1 className='text-6xl font-bold text-center p-5'>
          {data.heading}
      </h1>
      <div className='mainContact'>
        {/* <SocialLinks /> */}
        <ContactMeFrom data={data} />
      </div>
    </section>
  )
}
