import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mt-10 p-10">
      <div className="border-2 border-red-400 rounded-4xl p-8 max-w-md w-full shadow-[0_0_20px_rgba(239,68,68,0.6)] bg-red-950 text-white backdrop-blur-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Get in touch</h2>
        <div className='mb-4 border-1 border-red-400 p-2 rounded-2xl text-center'><span className='mr-3 text-red-400'>Name:</span> Mahesh Varakala</div>
        <div className='mb-4 border-1 border-red-400 p-2 rounded-2xl text-center'><span className='mr-3 text-red-400'>Email: </span>mahesh_varakala@yahoo.com</div>
        <div className='mb-4 border-1 border-red-400 p-2 rounded-2xl text-center'>
          <span className='mr-3 text-red-400'>LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/mahesh-varakala-14702a75"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-300 underline text-sm hover:text-red-500"
          >
            www.linkedin.com/in/mahesh-varakala-14702a75
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact