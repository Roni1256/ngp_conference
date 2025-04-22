import React from 'react'

const Home = () => {
   return (
     <div className='py-20 bg-white'>
       <div className='max-w-7xl mx-auto px-4'>
         <h1 className='text-3xl lg:text-6xl text-neutral-800 font-bold text-center w-full leading-tight'>Welcome to NGP Conference 2025</h1>
         <h2 className='text-md md:text-2xl lg:text-3xl mt-4 text-center text-neutral-600'>International Conference on Advanced Technologies</h2>
         <div className='flex flex-col items-center mt-6 space-y-2'>
           <p className='font-bold text-center text-neutral-700 text-xl'>Dr. N. G. P. Arts and Science College</p>
           <p className='text-neutral-700'>Coimbatore, Tamil Nadu, India</p>
           <p className='text-2xl font-bold text-center mt-4 text-neutral-800'>12th - 15th May 2025</p>
         </div>

         <div className="flex w-full items-center justify-center mt-8">
           <img src="/ngplogo.png" alt="NGP logo" className='max-w-[400px] shadow-lg rounded-lg' />
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
           <div className='bg-neutral-50 p-6 rounded-lg shadow-sm'>
             <h3 className='text-2xl font-bold text-neutral-800 mb-4'>About the Conference</h3>
             <p className='text-neutral-700 leading-relaxed'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quo cupiditate facilis reprehenderit vitae, alias, ipsam laboriosam aliquam quidem cumque voluptatem modi! Accusamus voluptates similique totam fugit, harum aliquam quisquam?
             </p>
           </div>

           <div className='bg-neutral-50 p-6 rounded-lg shadow-sm'>
             <h3 className='text-2xl font-bold text-neutral-800 mb-4'>Key Dates</h3>
             <ul className='space-y-3 text-neutral-700'>
               <li>• Paper Submission Deadline: March 1, 2025</li>
               <li>• Acceptance Notification: April 1, 2025</li>
               <li>• Early Bird Registration: April 15, 2025</li>
               <li>• Conference Dates: May 12-15, 2025</li>
             </ul>
           </div>
         </div>

         <div className='mt-16 bg-neutral-50 p-8 rounded-lg shadow-sm'>
           <h3 className='text-2xl font-bold text-neutral-800 mb-6'>Conference Highlights</h3>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
             <div className='text-center'>
               <div className='text-4xl font-bold text-neutral-800 mb-2'>50+</div>
               <p className='text-neutral-600'>Expert Speakers</p>
             </div>
             <div className='text-center'>
               <div className='text-4xl font-bold text-neutral-800 mb-2'>200+</div>
               <p className='text-neutral-600'>Research Papers</p>
             </div>
             <div className='text-center'>
               <div className='text-4xl font-bold text-neutral-800 mb-2'>30+</div>
               <p className='text-neutral-600'>Countries</p>
             </div>
           </div>
         </div>

         <div className='mt-16 prose max-w-none'>
           <h3 className='text-2xl font-bold text-neutral-800 mb-6'>Conference Details</h3>
           <p className='text-neutral-700 leading-relaxed'>
             Veritatis rerum perferendis eveniet. Ratione voluptatibus praesentium iure harum id sapiente veritatis ex quae porro corporis a delectus vitae, voluptatum, reiciendis hic culpa dolorem quisquam repudiandae mollitia ipsum officiis saepe!
           </p>
           <p className='text-neutral-700 leading-relaxed mt-4'>
             Commodi hic porro est sunt consequuntur sint deserunt totam et. Veniam enim voluptate delectus repellendus tempora. Deserunt consequatur dignissimos sequi sint temporibus! Soluta sit velit, totam accusantium iure nihil natus.
           </p>
           <p className='text-neutral-700 leading-relaxed mt-4'>
             Perferendis, ipsa nulla. Modi soluta quibusdam fuga quia atque doloribus enim inventore impedit, exercitationem optio natus. Doloribus similique illum quae, enim maxime distinctio nobis harum explicabo alias accusantium, ipsa doloremque.
           </p>
         </div>

         <div className='mt-16 bg-neutral-50 p-8 rounded-lg shadow-sm'>
           <h3 className='text-2xl font-bold text-neutral-800 mb-6'>Contact Information</h3>
           <div className='text-neutral-700'>
             <p>Conference Secretariat</p>
             <p>Dr. N. G. P. Arts and Science College</p>
             <p>Coimbatore, Tamil Nadu, India</p>
             <p className='mt-4'>Email: conference2025@ngp.edu.in</p>
             <p>Phone: +91 123 456 7890</p>
           </div>
         </div>
       </div>
     </div>
   )
}

export default Home