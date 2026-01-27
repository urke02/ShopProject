import React from 'react'

export default function ContactUsForm() {
  return (
    <>
        <div className="flex justify-center mt-20">
          <form className=''>
              <label for="FirstName" className='block text- m-1'>First Name:</label>
              <input type="text" id="FirstName" name="FirstName" className="border-b border-black-300 m-1 w-full"/>
              <label for="LastName" className='block text-left m-1'>Last Name:</label>
              <input type="text" id="LastName" name="LastName" className="border-b border-black-300 m-1 w-full"/>
              <label for="Email" className='block text-left m-1'>E-mail:</label>
              <input type="email" id="Email" name="Email" className="border-b border-black-300 m-1 w-full"/>
              <label for="Phone" className='block text-left m-1'>Phone:</label>
              <input type="tel" id="Phone" name="Phone" className="border-b border-black-300 m-1 w-full"/>
              <label for="Message" className='block text-left m-1'>Message:</label><br/>
              <textarea id="Message" name="Message" rows="4" cols="50" className="border border-black-300 m-1 w-full"></textarea>
              <button type="submit" className="bg-purple-700 text-white font-bold py-2 px-4 rounded m-1 hover:bg-purple-900">Submit</button>
          </form>
        </div>
    </>
  )
}
