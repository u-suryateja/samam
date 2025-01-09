import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function AboutPage() {
  return (
    <div className="flex justify-center w-full">
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-screen-xl w-full">
        <div className="col-span-3 p-4 relative">
          {/* Image with explicit height and width */}
          <img
            src="/assets/samam-logo.png"
            alt="Samam Logo"
            className="h-[450px] w-[700px] object-contain mx-auto opacity-30"
          />
          {/* Text overlay on top of the image */}
          <div className="absolute inset-0 flex items-center justify-center flex-col text-black border-4 border-red-200 rounded-lg">
          <h3 className="text-3xl font-semibold text-black">సత్యాన్వేషణ మండలి</h3>
            <p className=" mt-2 text-black">
              A journey to discover truth, wisdom, and societal harmony.
            </p>
          </div>
        </div>

        <div>
        <div className="col-span-3 sm:col-span-2 lg:col-span-1 mx-auto">
    <img
      src="https://images.unsplash.com/photo-1529665730773-4f3fda31a5f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Founder Image"
      className="rounded-lg w-full object-cover h-auto "
    />
    <h1 className="text-center">Founder</h1>
  </div>
</div>

        <div className="col-span-3 sm:col-span-2 lg:col-span-2 mx-auto">
          <p className="text-lg text-gray-800 leading-relaxed">hellow this surya Lorem ipsum dolor sit amet consectetur adipiscing elit dictum bibendum penatibus pretium nunc at, venenatis morbi faucibus pharetra mauris dapibus netus hac leo mollis sociis nascetur.</p>
        </div>
        <div className="col-span-3">
          <div >
          <h1 className='text-center text-2xl'>Members of organization</h1>

          </div>
          
        </div>
        <div className='col-span-3'>
          <div className='grid grid-cols-4  lg:grid-cols-3'>

          
        <div className="w-[350px]  border-4 border-red-200 rounded-lg m-2 col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1  p-4 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1736266602950-765dbdcfb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" // Replace with your image URL
            alt="Article 2"
            width={500}
            height={300}
            className="object-cover w-full h-48 rounded-lg"
          />
          <h1 className="text-center">member-1</h1>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900">Article 2</h3>
            <p className="text-gray-700 mt-2">This is a short description of Article 2.</p>
          </div>
          <div className='flex space-x-4 ml-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='text-black' size={20} />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='text-black' size={20} />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='text-black' size={20} />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-black' size={20} />
            </a>
          </div>
        </div>



        <div className="w-[350px]  border-4 border-red-200 rounded-lg   m-2  col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 p-4 mx-auto">
        
          <img
            src="https://images.unsplash.com/photo-1736266602950-765dbdcfb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" // Replace with your image URL
            alt="Article 2"
            width={500}
            height={300}
            className="object-cover w-full h-48 rounded-lg"
          />
          <h1 className="text-center">member-1</h1>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900">Article 2</h3>
            <p className="text-gray-700 mt-2">This is a short description of Article 2.</p>
          </div>
          <div className='flex space-x-4 ml-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='text-black' size={20} />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='text-black' size={20} />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='text-black' size={20} />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-black' size={20} />
            </a>
          </div>
        </div>



        <div className="w-[350px]  border-4 border-red-200 rounded-lg  m-2  col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 p-4 mx-auto">
        
        <img
          src="https://images.unsplash.com/photo-1736266602950-765dbdcfb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" // Replace with your image URL
          alt="Article 2"
          width={500}
          height={300}
          className="object-cover w-full h-48 rounded-lg"
        />
        <h1 className="text-center">member-1</h1>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">Article 2</h3>
          <p className="text-gray-700 mt-2">This is a short description of Article 2.</p>
        </div>
        <div className='flex space-x-4 ml-4'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='text-black' size={20} />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='text-black' size={20} />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-black' size={20} />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='text-black' size={20} />
          </a>
        </div>
      </div>



      <div className="w-[350px]  border-4 border-red-200 rounded-lg   m-2  col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 p-4 mx-auto">
        
        <img
          src="https://images.unsplash.com/photo-1736266602950-765dbdcfb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" // Replace with your image URL
          alt="Article 2"
          width={500}
          height={300}
          className="object-cover w-full h-48 rounded-lg"
        />
        <h1 className="text-center">member-1</h1>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">Article 2</h3>
          <p className="text-gray-700 mt-2">This is a short description of Article 2.</p>
        </div>
        <div className='flex space-x-4 ml-4'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='text-black' size={20} />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='text-black' size={20} />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='text-black' size={20} />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='text-black' size={20} />
          </a>
        </div>
      </div>





        </div>
        </div>



        
        
        
        
        
      </div>
    </div>
  );
}
