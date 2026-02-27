import './LoginPage.css';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAuth = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
                alert('Account created successfully!');
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                alert('Signed in successfully!');
            }
            setEmail('');
            setPassword('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="login-container">
            <div className="login-box">
                <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
                <form onSubmit={handleAuth}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Login')}
                    </button>
                </form>
                {error && <p className="error">{error}</p>}
                <p>
                    {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                    <button 
                        type="button"
                        className="toggle-button"
                        onClick={() => setIsSignUp(!isSignUp)}
                    >
                        {isSignUp ? 'Login' : 'Sign Up'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;