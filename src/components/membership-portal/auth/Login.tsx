// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { LogIn, Eye, EyeOff, AlertTriangle } from "lucide-react";
// import { toast } from "@/hooks/use-toast";
// import { useAuth } from "@/hooks/useAuth";

// const Login = () => {
//   const navigate = useNavigate();
//   const { user, member, loading, signIn } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   useEffect(() => {
//     if (user && member && !loading) {
//       navigate("/member-portal", { replace: true });
//     }
//   }, [user, member, loading, navigate]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitting(true);

//     try {
//       await signIn(email, password);
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Invalid email or password",
//         variant: "destructive",
//       });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//             Member Sign In
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Access your member dashboard and club resources
//           </p>
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle className="text-center text-civitan-blue">Welcome Back</CardTitle>
//             <CardDescription className="text-center">
//               Sign in to your member account
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-4 w-4 text-gray-500" />
//                     ) : (
//                       <Eye className="h-4 w-4 text-gray-500" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//               <Button
//                 type="submit"
//                 className="w-full"
//                 disabled={submitting}
//               >
//                 <LogIn className="h-4 w-4 mr-2" />
//                 {submitting ? "Signing in..." : "Sign In"}
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Login; 