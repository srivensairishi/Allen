import './TestSeries.css';
import { use, useState } from 'react';

function TestSeries() {

    const [count, setCount] = useState(1);
    function increase() {
        if (count<1){
            setCount(count=>count + 1);
        }else{
            useState(1);
        }
    }

    return(
        <>
            <div className='ts-blue-box'>
                <img className='alarm-clock-icon' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1748259288/mgdwn6mv7zfwxiopuntt.png_anwkbo.avif"  />
                <p className='text-yellow-400 font-bold'>LAST CHANCE✨</p>
                <p className='text-white  font-bold'>Win up to 90% AOSAT Scholarship. Register now!</p>
            </div>
            <div className='ts-con'>
                <div className='flex justify-center pt-10 align-center'>
                <div className='flex justify-center bg-[#82a9e8] w-200 h-12 rounded-xl'>
                    <p className='font-bold'>Start Early , Rank Higher! JEE <span className='bg-pink-300 text-purple-500'>FUll-Year Test Series (Phase 2)</span>begins <span className='text-purple-500'>8th june</span></p>
                    <button className='bg-white rounded  mt-1 font-bold text-darkgreem h-10'>Buy now</button>
                </div>
                </div>
                <h3 className='m-5'>JEE Courses for class 11th</h3>
                <div className='flex justify-around'>
                    <div className='h-12 w-26 bg-[#aec9f5] rounded flex justify-end align-center'><button className='bg-blue-500 text-white h-8 w-8 rounded mt-2 me-2 '> {count}</button></div>
                    <button className='h-12 w-36 bg-[#aec9f5] rounded font-bold'>Session:2025-26</button>
                    <button className='h-12 w-26 bg-[#aec9f5] rounded font-bold'>Live</button>
                    <button className='h-12 w-26 bg-[#aec9f5] rounded font-bold'>Recorded</button>
                    <button className='h-12 w-26 bg-[#aec9f5] rounded font-bold'>Practice</button>
                    <button className='h-12 w-26 bg-[#aec9f5] rounded font-bold' onClick={increase}>Online Test Series</button>
                </div> 
                <h3 className='m-5'>Test Series - JEE Main</h3>
                <hr></hr>

                <div className="flex flex-col md:flex-row gap-6 p-6  min-h-screen">
      
                <div className="bg-white p-6 rounded-2xl shadow-md w-40 h-120 md:w-1/2">
                    <div className="inline-block bg-black text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">ONLINE TEST SERIES</div>
                     <h2 className="text-xl font-semibold mb-2">JEE Main – Nurture Test Series</h2>
                     <p className="text-gray-600 mb-4">All India Test Series - ONLINE mode</p>
                   <ul className="text-gray-700 space-y-2 mb-6 list-disc list-inside">
                      <li>20 (part + full) syllabus tests</li>
                      <li>Detailed solutions of all questions</li>
                      <li>Exclusive ALLEN's Question Bank</li>
                   </ul>
                      <div className="flex items-center justify-between">
                          <p className="text-lg font-semibold">₹7,200 <span className="text-sm text-gray-500">+ Taxes applicable</span></p>
                          <a href="#" className="text-blue-600 font-medium hover:underline">Know more &rarr;</a>
                      </div>
                     </div>

    
                  <div className="bg-white p-6 rounded-2xl shadow-md w-40 h-120 md:w-1/2">
        <div className="inline-block bg-black text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
          OFFLINE TEST SERIES
        </div>
        <h2 className="text-xl font-semibold mb-2">JEE Main – Nurture Test Series (Allen DLP)</h2>
        <p className="text-gray-600 mb-4">All India Test Series - CBT + PEN & PAPER mode</p>
        <ul className="text-gray-700 space-y-2 mb-6 list-disc list-inside">
          <li>19 (part + full) syllabus tests</li>
          <li>Access largest network of 300+ test centers</li>
        </ul>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">₹11,017 <span className="text-sm text-gray-500">+ Taxes applicable</span></p>
          <a href="#" className="text-blue-600 font-medium hover:underline">Know more &rarr;</a>
        </div>
      </div>
    </div>
    <img className='w-250 ml-30' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1748264746/jkdhgenvc4emawkjenoa.png_k1x1cr.avif"  />
            </div>
            
        </>
    )
}


export default TestSeries;