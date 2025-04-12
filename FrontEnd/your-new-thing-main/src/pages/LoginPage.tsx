// import { FC, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthLayout } from '../layouts/AuthLayout';
// import { useToast } from '../hooks/use-toast';

// export const LoginPage: FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!email || !password) {
//       toast({
//         title: "Error",
//         description: "Please fill in all fields",
//         variant: "destructive"
//       });
//       return;
//     }
    
//     // For demo purposes, we'll just check if a user exists in localStorage
//     const userString = localStorage.getItem('user');
    
//     if (userString) {
//       const user = JSON.parse(userString);
      
//       if (user.email === email) {
//         // Successful login
//         toast({
//           title: "Success",
//           description: "Logged in successfully!"
//         });
//         navigate('/dashboard');
//         return;
//       }
//     }
    
//     // Demo mode - allow any login
//     localStorage.setItem('user', JSON.stringify({ email }));
//     navigate('/dashboard');
//   };

//   return (
//     <AuthLayout title="Login">
//       <form onSubmit={handleLogin} className="w-full max-w-md">
//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-2">Gmail</label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="Email address"
//           />
//         </div>
        
//         <div className="mb-6">
//           <label htmlFor="password" className="block mb-2">Password</label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="Password"
//           />
//         </div>
        
//         <button 
//           type="submit" 
//           className="w-full py-3 px-6 bg-broadcast-blue text-white rounded-md mt-4"
//         >
//           Login
//         </button>
        
//         <div className="text-center mt-4">
//           <Link to="/forgot-password" className="text-blue-500">
//             Did you forget your password?
//           </Link>
//         </div>
//       </form>
//     </AuthLayout>
//   );
// };
//  

// export const LoginPage: FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   // const handleLogin = async (e: React.FormEvent) => {
//   //   e.preventDefault();

//   //   if (!email || !password) {
//   //     toast({
//   //       title: "Error",
//   //       description: "Please fill in all fields",
//   //       variant: "destructive"
//   //     });
//   //     return;
//   //   }

//   //   try {
//   //     const response = await fetch("https://inferno-neon.vercel.app/api/v1/auth/login", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json"
//   //       },
//   //       body: JSON.stringify({ email, password })
//   //     });

//   //     if (!response.ok) {
//   //       const errorData = await response.json();
//   //       toast({
//   //         title: "Login Failed",
//   //         description: errorData.message || "Invalid credentials",
//   //         variant: "destructive"
//   //       });
//   //       return;
//   //     }

//   //     const data = await response.json();

//   //     // Save user info and token in localStorage
//   //     localStorage.setItem('user', JSON.stringify(data.user));
//   //     localStorage.setItem('token', data.token);

//   //     toast({
//   //       title: "Success",
//   //       description: "Logged in successfully!"
//   //     });

//   //     navigate('/dashboard');
//   //   } catch (error) {
//   //     toast({
//   //       title: "Error",
//   //       description: "Something went wrong. Please try again.",
//   //       variant: "destructive"
//   //     });
//   //   }
//   // };
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     if (!email || !password) {
//       toast({
//         title: "Error",
//         description: "Please fill in all fields",
//         variant: "destructive"
//       });
//       return;
//     }
  
//     try {
//       const response = await fetch("/api/v1/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email, password })
//       });
      
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }
  
//       localStorage.setItem('user', JSON.stringify(data.user));
//       localStorage.setItem('token', data.token);
  
//       toast({
//         title: "Success",
//         description: "Logged in successfully!"
//       });
  
//       navigate('/dashboard');
//     } catch (error: any) {
//       console.error("Fetch error:", error); // DEBUG هنا
//       toast({
//         title: "Network Error",
//         description: error.message || "Failed to fetch data from server.",
//         variant: "destructive"
//       });
//     }
//   };
   

//   return (
//     <AuthLayout title="Login">
//       <form onSubmit={handleLogin} className="w-full max-w-md">
//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-2">Gmail</label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="Email address"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="password" className="block mb-2">Password</label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="Password"
//           />
//         </div>

//         <button 
//           type="submit" 
//           className="w-full py-3 px-6 bg-broadcast-blue text-white rounded-md mt-4"
//         >
//           Login
//         </button>

//         <div className="text-center mt-4">
//           <Link to="/forgot-password" className="text-blue-500">
//             Did you forget your password?
//           </Link>
//         </div>
//       </form>
//     </AuthLayout>
//   );
// };
import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { useToast } from '../hooks/use-toast';

export const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);

      toast({
        title: "Success",
        description: "Logged in successfully!"
      });

      navigate('/dashboard');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || 'Something went wrong',
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleLogin} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Gmail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email address"
            disabled={loading}
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
            disabled={loading}
          />
        </div>

        <button 
          type="submit" 
          className={`w-full py-3 px-6 bg-broadcast-blue text-white rounded-md mt-4 transition-opacity duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>

        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-blue-500">
            Did you forget your password?
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
