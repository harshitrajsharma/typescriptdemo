"use client"

import { useState } from 'react';

const Registration = () => {
  const [sellerType, setSellerType] = useState('');
  const [heardAboutUs, setHeardAboutUs] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');

  return (
    <div className="container flex flex-col md:w-[85%] mx-auto px-10 py-8 md:py-12 gap-8">
      <div className=" p-8 shadow-md">
        <h1 className="text-2xl font-bold mb-6">Seller Registration</h1>

        <form className="space-y-8">
          <div className="flex space-x-4">
            <input type="text" placeholder="First Name" className=" border border-white w-1/2 p-3 bg-transparent rounded-lg" />
            <input type="text" placeholder="Last Name" className=" border border-white w-1/2 p-3 bg-transparent rounded-lg" />
          </div>
          <input type="email" placeholder="Email Address" className=" border border-white w-full p-3 bg-transparent rounded-lg" />
          <input type="tel" placeholder="Phone Number" className=" border border-white w-full p-3 bg-transparent rounded-lg" />

          <div className=' flex flex-col gap-6'>
            <label className=" text-2xl font-bold mb-2">Seller Type</label>
            <div className="flex space-x-8">
              {['Individual or Sole Proprietorship', 'Corporation or LLC', 'Partnership', 'Non-profit', 'Other'].map(type => (
                <button
                  key={type}
                  type="button"
                  className={`px-4 py-2 border border-white rounded-lg ${sellerType === type ? 'bg-blue-600' : 'bg-transparent'}`}
                  onClick={() => setSellerType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className=' flex flex-col gap-6'>
            <label className=" text-2xl font-bold mb-2">How Did You Hear About Us?</label>
            <div className="space-y-8">
              {['Search Engine', 'Social Media Ad', 'Influencer', 'Friend or Family', 'Other'].map(option => (
                <label key={option} className="flex items-center space-x-2 border border-white  p-4 rounded-lg">
                  <input
                    type="radio"
                    name="heardAboutUs"
                    value={option}
                    checked={heardAboutUs === option}
                    onChange={() => setHeardAboutUs(option)}
                    className="form-radio bg-transparent "
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className=' flex flex-col gap-6'>
            <label className=" text-2xl font-bold mb-2">Product Information</label>
            <input type="text" placeholder="Product Category" className="w-full border border-white p-3 bg-transparent rounded-lg mb-4" />
            <input type="text" placeholder="Product Subcategory" className="w-full border border-white p-3 bg-transparent rounded-lg" />
          </div>

          <div className=' flex flex-col gap-6'>
            <label className=" text-2xl font-bold mb-2">Experience Level</label>
            <div className="space-y-8">
              {['I\'ve sold on CodeStam before', 'I\'ve sold on other platforms before', 'I\'m new to selling online'].map(option => (
                <label key={option} className="flex items-center space-x-2 border border-white  p-4 rounded-lg">
                  <input
                    type="radio"
                    name="experienceLevel"
                    value={option}
                    checked={experienceLevel === option}
                    onChange={() => setExperienceLevel(option)}
                    className="form-radio"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="agreement" className="form-checkbox" />
            <label htmlFor="agreement">I agree to CodeStam's Seller Agreement, Privacy Policy, and other Terms.</label>
          </div>

          <div className="flex space-x-4 justify-end">
            <button type="reset" className="px-4 py-2 bg-gray-600 rounded-lg">Reset</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
