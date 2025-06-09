// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { UserPlus, Eye, EyeOff, AlertTriangle, Shield } from "lucide-react";
// import { toast } from "@/hooks/use-toast";
// import { useAuth } from "@/hooks/useAuth";

// const Signup = () => {
//   const navigate = useNavigate();
//   const { signUp } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitting(true);

//     try {
//       await signUp(email, password, firstName, lastName);
//       toast({
//         title: "Success",
//         description: "Account created successfully! Please check your email to verify your account.",
//       });
//       navigate("/auth/login");
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to create account. Please try again.",
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
//             Create Member Account
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Join the Duluth Civitan Club community
//           </p>
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle className="text-center text-civitan-blue">Sign Up</CardTitle>
//             <CardDescription className="text-center">
//               Create your member account
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="firstName">First Name</Label>
//                   <Input
//                     id="firstName"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="lastName">Last Name</Label>
//                   <Input
//                     id="lastName"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
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
//                 <UserPlus className="h-4 w-4 mr-2" />
//                 {submitting ? "Creating Account..." : "Create Account"}
//               </Button>
//             </form>

//             <div className="mt-6 text-center text-sm">
//               Already have an account?{" "}
//               <Link to="/auth/login" className="text-civitan-blue hover:underline">
//                 Sign in
//               </Link>
//             </div>
//           </CardContent>
//         </Card>

//         <div className="space-y-4">
//           <div className="p-4 bg-gray-50 rounded-lg">
//             <h4 className="font-semibold mb-2 flex items-center gap-2">
//               <Shield className="h-4 w-4" />
//               Member Portal Features
//             </h4>
//             <ul className="text-sm space-y-1 text-gray-600">
//               <li>• Personal member dashboard with attendance tracking</li>
//               <li>• Event registration and calendar access</li>
//               <li>• Meeting minutes and club documents</li>
//               <li>• Member directory (with privacy controls)</li>
//               <li>• Volunteer opportunity management</li>
//               <li>• Club announcements and updates</li>
//             </ul>
//           </div>

//           <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
//             <div className="flex items-start gap-2">
//               <AlertTriangle className="h-4 w-4 text-blue-600 mt-0.5" />
//               <div className="text-sm">
//                 <p className="font-medium text-blue-800">Admin Access</p>
//                 <p className="text-blue-700">
//                   Accounts registered with authorized email addresses will automatically receive admin privileges.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup; 