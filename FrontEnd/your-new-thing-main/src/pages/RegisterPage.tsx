
import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { useToast } from '../hooks/use-toast';

export const RegisterPage: FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate registration
    // In a real app, this would make an API call
    localStorage.setItem('user', JSON.stringify({ username, email }));
    
    toast({
      title: "Success",
      description: "Account created successfully!"
    });
    
    navigate('/dashboard');
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleRegister} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Username"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Gmail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email address"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Password"
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full py-3 px-6 bg-broadcast-blue text-white rounded-md mt-4"
        >
          Register
        </button>
      </form>
    </AuthLayout>
  );
};
