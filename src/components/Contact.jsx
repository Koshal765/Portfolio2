import React from 'react'

const Contact = () => {
  return (
  <section
  id='contact' className='flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'>

    <div className='text-center mb-16'>
      <h2 className='text-4xl font-bold text-white'>Contact</h2>
      <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
      <div>
        <p className='text-gray-400 mt-4 text-lg font-semibold mb-10'>
         I'do love to hear from uou-reach out for any opportinities or queries!</p>
      </div>
      </div>

      {/* Contact form */}
 <div className='mt-8 w-full max-w-md p-6 rounded-lg shadow-lg border border-gray-700'>
    <h3 className='text-xl font-semibold text-white text-center'>Connect with me </h3>

<form className='mt-4 flex flex-col space-y-4'>
<input type='email' name='user_email' placeholder='Your Email' required className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 outline-none focus:border-purple-500
'></input>
<input type='text' name='user_name' placeholder='Your Name' required className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 outline-none focus:border-purple-500
'></input>
<input type='text' name='subject' placeholder='Subject' required className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 outline-none focus:border-purple-500
'></input>
<textarea name='message' placeholder='Message' rows='4' className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 outline-none focus:border-purple-500'></textarea>

</form>

 </div>

  </section>
  )
}

export default Contact