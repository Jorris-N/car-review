import React from 'react'
import Image from 'next/image';

const Feature = () => {
    return (
        <section className=' dark:bg-gray-800 dark:text-gray-100 bg-white w-full py-2'>
          <div className='container mx-auto my-12 space-y-2 lg:text-center items-start padding-x padding-y'>
            <h2 className='text-4xl font-bold'>Quick & easy car rental</h2>
            <p className='text-xl font-bold '>plan your trip now</p>
          </div>
          <div className='container mx-auto grid justify-center gap-4 lg:grid-cols-3 mb-16 padding-x padding-y'>
            <div className='flex flex-col lg:items-center items-start '>
              <h3 className='my-3 text-3xl font-semibold'>Wide Range</h3>
              <div className='space-y-1 leading'>
                <p className='line-clamp-3'>
                  Extensive selection of vehicles to cater to every customer's
                  needs.
                </p>
              </div>
            </div>
    
            <div className='flex flex-col lg:items-center items-start sm:px-16  py-4'>
              <h3 className='my-3 text-3xl font-semibold'>Flexible Booking</h3>
              <div className='space-y-1 leading'>
                <p>
                  Reserve your rental car well in advance or opt for last-minute
                  bookings with ease.
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:items-center items-start sm:px-16  py-4'>
              <h3 className='my-3 text-3xl font-semibold'>Best Price</h3>
              <div className='space-y-1 leading'>
                <p>
                  We guarantee the best prices for your car rental needs. With our
                  competitive rates and transparent pricing.
                </p>
              </div>
            </div>
          </div>
    
          <div className='flex items-center justify-center my-28'>
            <Image
              src='/group-car.png'
              alt='hero'
              width={1000}
              height={100}
              className='object-contain'
            />
          </div>
        </section>
      );
}

export default Feature