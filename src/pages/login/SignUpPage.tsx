import { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Signup() {

  type signUpProps ={
    name:string,
    email: string,
    password: string
  }

  const [name, setName] = useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword] = useState('')

  const signUp =async({name, email, password}: signUpProps)=>{
    console.log(email, name, password)

    // try {
    //   const uniqueID = ID.unique()
    //   const response = await account.create(uniqueID, email, password, name);
    //   await account.createEmailPasswordSession({
    //     email,
    //     password
    //   });
    //   await databases.createDocument(
    //   import.meta.env.VITE_APPWRITE_DATABASE_ID,
    //   import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    //   uniqueID, // use the same uniqueID as document ID
    //   {name,
    //   email
    // }
    // );
    //   dispatch(addUser({$id: uniqueID,name,email, password}))
    //   navigate('/')
    //   toast('Sucessful login')
  
    //   return response;
    // } catch (error) {
    //   toast('Error creating account')
    //   throw error;
    // }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Create a Name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">email</label>
          <input
            type="text"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Create a email"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Create a password"
          />
        </div>

        <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primaryDark transition"
        onClick={() =>signUp({name, email, password})}>
          Create Account
        </button>

        <p className="text-center mt-5 text-secHeader">
          Already have an account?{" "}
          <Link to="/login" className="text-primaryDark hover:underline">
            Login
          </Link>
        </p>
            <p className="text-center mt-2 text-secHeader">
          Back to {" "}
          <Link to="/" className="text-primaryDark hover:underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}