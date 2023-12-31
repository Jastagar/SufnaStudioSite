"use client"
import React, {useRef} from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faGithub, faInstagram, faLinkedin, faTwitter, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';
// import {faMapLocation, faMessage} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';


function EachInput({label,...props}){
  
  return(
    <div className='grow p-4'>
        <div className='eachTD py-3'>
          <label htmlFor={'InputIdFor'+label}>{label}:</label>
        </div>
        <div className='eachTD'>
          <input {...props} className='text-2xl w-full text-black border border-white bg-transparent' id={'InputIdFor'+label} />
        </div>
    </div>
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
        <div className='p-8 w-full'> 
          <h3 className='text-xl text-start font-semibold pl-8'>Contact Form</h3>
        </div> 
        <form ref={form} className='MainForm' onSubmit={handleSubmit}>
          <div className='flex'>
            <EachInput required={true} maxLength={30} name={'from_name'} type='text'  label={'Your name'} />
            <EachInput required={true} maxLength={40} name={'subject'} type='email'  label={'Your Email'} />
          </div>
          <div className='p-4'>
            <div className='eachTD'>
              <label htmlFor={'InputIdForMessage'}>Message:</label>
            </div>
            <div className='eachTD'>
              <textarea required={true} maxLength={200} name={'message'} className='text-2xl w-full text-black border border-white bg-transparent' id={'InputIdForMessage'}></textarea>
            </div>
          </div>
          <div className='text-end'>
            <button className='text-black text-lg font-bold bg-white py-2 px-4 hover:bg-primary-700 hover:cursor-pointer'>
              Send a Message
            </button>
          </div>
        </form>
      <div>
        
      </div>
    </div>
  )
}


function GhostDiv(){
  return(
    <div className='h-[19dvh]'>

    </div>
  )
}


export default function ContactUs({data}) {
  return (
    <>
    <GhostDiv />
    <section id='contact' className='absolute w-full bottom-0 ContactUsBG text-white'>
      <div className='flex p-12'>
        <div className='w-[50%] p-5'>
          <h1 className='text-4xl font-semibold py-5'>
              Contact Us
          </h1>
          <div className='py-6'>
            <h3 className='text-2xl font-semibold'>
              Our Address
            </h3>
            <p className='py-8'>
              28A 28B HSIDC<br/>
              DELHI PULL SIRSA,<br/>
              HARYANA 125055 
            </p>
            <ul className='list-disc pl-4'>
              <li>Business@sufnaproduction.com</li>
              <li>Sufna.productions</li>
              <li>+91-97794-26400</li>
            </ul>
          </div>
        </div>

        <div className='grow'>
          <ContactMeFrom data={data} />
        </div>

      </div>
      <div className='mainContact'>
        {/* <SocialLinks /> */}

      </div>
    </section>
    </>
  )
}
