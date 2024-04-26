import React from 'react';

function Body() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex'>
        <div className='w-full md:w-1/2 mt-12 md:mt-32'>
          <div className="space-y-12">
            <h1 className="text-4xl text-slate-100 font-bold">
              Welcome To <span className='text-orange-600'>HIJLI COLLEGE</span>
            </h1>
            <p className='text-2xl text-slate-100 font-semibold'> 
              (NAAC Accredited) <br />
              Recognized by UGC under section 2(f) and 12-B and <br />
              Affiliated to Vidyasagar University
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen">
         <img src="/images/Hijli-College-Logo.png" className="w-80 h-80" alt="Logo" />


        </div>
      </div>
    </>
  );
}

export default Body
