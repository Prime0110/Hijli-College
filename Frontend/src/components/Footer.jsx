import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
  <nav>
    <h3 className="footer-title text-lg">Useful <span className='text-orange-400 '>Links</span></h3> 
    <a href="https://www.vidyasagar.ac.in/" className="link hover:text-orange-500"> Vidyasagar University</a>
    <a href='http://www.naac.gov.in/index.php/en/' className="link hover:text-orange-500"> NAAC</a>
<a href='https://ndl.iitkgp.ac.in/' className="link hover:text-orange-500"> National Digital Library</a>
<a href='https://www.ugc.gov.in/' className="link hover:text-orange-500"> U.G.C.</a>
    <a href='https://wbscc.wb.gov.in/' className="link hover:text-orange-500"> Student Credit Card</a>
  </nav> 
  <nav>
    <h4 className="footer-title text-lg"> Quick <span className='text-orange-500'> Links</span></h4> 
    <a href='https://hijlicollege.ac.in/index.php?option=com_content&view=article&id=145&Itemid=0' className="link hover:text-orange-500"> Subject Combinations</a>
    <a href='' className="link hover:text-orange-500"> Fees Structure</a>
    <a href='https://hijlicollege.ac.in/pdf/Holiday_List_2023.pdf' className="link hover:text-orange-500"> Holiday List</a>
    <a href='https://hijlicollege.ac.in/index.php?option=com_content&view=article&id=185&Itemid=0' className="link hover:text-orange-500"> General Rules</a>
    <a href='' className="link hover:text-orange-500"> Archive</a>
  </nav> 
  <nav>
    <h3 className="footer-title text-lg">Contact <span className='text-orange-400' >INFO</span> </h3> 
    <p>
        <strong  className='text-amber-300'>Post :</strong> Hijli Co-operative, Kharagpur <br />
        <strong  className='text-amber-300'>Pin :</strong>721 306, Dist. Paschim Medinipur,West Bengal <br />
        <strong  className='text-amber-300'>Phone : </strong>+919126458311 <br />
        <strong  className='text-amber-300'>E-mail :</strong> hijlicollegekgp@gmail.com <br />
        <strong  className='text-amber-300'></strong>
    </p>
  </nav> 
  <form>
    <h4 className="footer-title text-lg text-blue-500">Google MAPS</h4> 
   
      <label className="label">
        <h4>College <span className="label-text">Location</span> </h4>
        
        </label> 
      
   
  </form>
</footer>
      
    </div>
  )
}

export default Footer
