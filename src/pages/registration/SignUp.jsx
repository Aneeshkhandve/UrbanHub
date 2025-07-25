import React, { useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDb } from '../../firebase/FirebaseConfig';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const signup = async () => {
        
        if(name === "" || email==="" || password===""){
            toast.error("All fields required")
            return;
        }
        console.log(name,email,password)
        try{
            setLoading(true)
            const users = await createUserWithEmailAndPassword(auth,email,password);
            var user = {
                name : name,
                uid : users.user.uid,
                email : users.user.email,
                timestamp : Timestamp.now()
            }
            const userRef = collection(fireDb,"user");
            await addDoc(userRef,user);
            setName("")
            setEmail("")
            setPassword("")
            toast.success("Successfully registered")
            
        }catch(error){
            console.log(error)
            toast.error("Signup failed")
            
        }finally{
            setLoading(false);
        }
    }
    return (
        <Layout>
            <div className='container h-screen w-full mx-auto px-5 flex items-center justify-center'>
                {loading && <Loader />}
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg w-full md:w-1/2 lg:w-1/3 p-8 shadow-md flex flex-col items-center justify-center max-w-[360px] mx-auto my-12">
                    <h1 className="mb-6 text-xl font-bold text-black dark:text-white">Register with Hoodiehub</h1>

                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder='Name'
                        className='w-full mb-4 px-5 py-3 rounded-md text-sm bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400'
                    />

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Email'
                        className='w-full mb-4 px-5 py-3 rounded-md text-sm bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400'
                    />


                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Password'
                        className='w-full mb-6 px-5 py-3 rounded-md text-sm bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400'
                    />


                    <button 
                    onClick={signup}
                    className='w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition duration-300'>Login</button>

                    <h2 className='mt-3 dark:text-white'>Already a User? Login <Link to={'/login'} className='text-orange-600 font-bold'>here</Link></h2>

                </div>
            </div>
        </Layout>
    )
}

export default SignUp
