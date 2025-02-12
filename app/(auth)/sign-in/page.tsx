import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-white">Sign In</h1>
        <p className="text-sm text-gray-400">Enter your details below to sign in to your account</p>
        <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-white">Email</label>
                <input type="email" id="email" className="input-field" />
            </div>
        </form>
    </div>
  )
}

export default page