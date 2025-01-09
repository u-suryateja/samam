// components/ArticleList.tsx

import { Link } from '@/i18n/routing';

const ArticleList = () => {
    return (
        <div>
            <div>
               
            </div>
            <section>
                <div className="flex justify-center w-full ">
               
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-screen-xl">
                    <div className='col-span-3 '>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-[350px] '>
                                <div className='overflow-hidden col-span-1 sm:col-span-1'>
                                  {/* Image filling the full column width, without exceeding the container */}
                                  <img 
                                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D" 
                                    alt="Mission Image" 
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                </div>
                                <div className='p-4 col-span-1 sm:col-span-1'>
                                  <h2 className='text-xl font-bold'>Our Mission</h2>
                                  <p className='mt-2'>
                                    Our mission is to make a positive impact in the world by providing high-quality solutions and services that meet the needs of our clients.
                                  </p>
                                  <Link href='/services' className='text-blue-500 mt-4 inline-block'>
                                    Explore Our Services
                                  </Link>
                        
                                  
                                </div>
                              </div>
                        </div>
                        <div className='col-span-3'>
                        <h1 className='text-4xl'>More artciles</h1>
                        </div>
                        {/* Article 1 */}
                        <div className="w-[350px] col-span-3 sm:col-span-2 lg:col-span-1">
                            <img
                                src="https://images.unsplash.com/photo-1736266602950-765dbdcfb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" // Replace with your image URL
                                alt="Article 1"
                                width={500}
                                height={300}
                                className="object-cover w-full h-48 rounded-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900">Article 1</h3>
                                <p className="text-gray-700 mt-2">This is a short description of Article 1.</p>
                                <button className="mt-4 text-blue-500 hover:underline">Read More</button>
                            </div>
                        </div>

                        {/* Article 2 */}
                        <div className="w-[350px] col-span-3 sm:col-span-2 lg:col-span-1">
                            <img
                                src="https://images.unsplash.com/photo-1736266602950-765dbdcfb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" // Replace with your image URL
                                alt="Article 2"
                                width={500}
                                height={300}
                                className="object-cover w-full h-48 rounded-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900">Article 2</h3>
                                <p className="text-gray-700 mt-2">This is a short description of Article 2.</p>
                                <button className="mt-4 text-blue-500 hover:underline">Read More</button>
                            </div>
                        </div>

                        {/* Article 3 */}
                        <div className="w-[350px] col-span-3 sm:col-span-2 lg:col-span-1">
                            <img
                                src="https://images.unsplash.com/photo-1736266602950-765dbdcfb9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" // Replace with your image URL
                                alt="Article 3"
                                width={500}
                                height={300}
                                className="object-cover w-full h-48 rounded-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900">Article 3</h3>
                                <p className="text-gray-700 mt-2">This is a short description of Article 3.</p>
                                <button className="mt-4 text-blue-500 hover:underline">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArticleList;
