import './LoginPage.css';
import React, { useState } from 'react';
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 


const centerClasses = "w-full flex items-center justify-center";

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const userCredential = await signInWithEmailAndPassword(
                auth,
                username, // email
                password
            );

            const user = userCredential.user;
            alert("LOGIN SUCCESS! WELCOME " + user.email);
            navigate("/dashboard");
             
        } catch(error){
            alert("LOGIN FAILED. " + error.message); 
            console.log(import.meta.env.VITE_FIREBASE_API_KEY);
        }

    };

    return(<div id="login-container" className={`min-h-screen ${centerClasses}`}>
        <form
            onSubmit={handleSubmit}
            className="bg-blue-100 p-7 rounded-xl shadow-md w-80"
        >
            <h2 className="text-2xl font-bold text-center">
                LOGIN
            </h2>

            <div>
                <label className="block mb-1 text-sm font-medium">
                    Username
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
            </div>

            <div className="mb-6">
                <label className="block mb-1 text-sm font-medium">
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
                Login
            </button>
        </form>
        
    </div>)
}

export default LoginPage;