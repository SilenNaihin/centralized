import React from "react";
import Googleauth from 'components/Auth/Gauth';
import Link from 'next/link';


export default function Login(): JSX.Element {

  return (
    <>
      <div className="flex justify-center mt-14 mb-6 h-20 items-center">
        <div className="bg-gray-300 h-px w-1/6"></div>
        <h1 className="text-center text-4xl mx-4">Centralized</h1>
        <div className="bg-gray-300 h-px w-1/6"></div>
      </div>
      <p className="text-center mb-14"> Create and maintain relationships</p>
      <div className="bg-white mx-auto w-1/3 rounded-lg py-6 custom_shadow">
        <input
          className="block mx-auto border-b border-black mb-8 w-4/5"
          type="text"
          placeholder="Email"
        />
        <input
          className="block mx-auto border-b border-black mb-4 w-4/5"
          type="text"
          placeholder="Password"
        />
        <button type="submit" className="focus:outline-none flex bg-gradient-to-r from-blue-400 to-blue-800 justify-center items-center w-1/2 h-9 rounded-xl mx-auto text-gray-50">
          <p>Continue with email</p>
        </button>
        <div className="focus:outline-none flex mb-6 underline text-xs justify-center">
           <Link href="./signup">
                <button className="mr-2" >Sign Up</button>
            </Link>
            <Link href="./resetpass">
                <button className="ml-2">Reset Password</button>
            </Link>
        </div>
        <Googleauth>
            <img className="mr-3 h-6" src="/images/Google.png" />
            <div className="text-center">Continue with Google</div>
        </Googleauth>
        <button>
        </button>
      </div>
    </>
  )
}
