// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { AlertTriangle, LogIn, UserPlus, Shield, Eye, EyeOff } from "lucide-react";
// import { toast } from "@/hooks/use-toast";
// import MemberPortal from "../MemberPortal";
// import { useAuth } from "@/hooks/useAuth";

// interface MemberLoginModalProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// const MemberLoginModal = ({ open, onOpenChange }: MemberLoginModalProps) => {
//   const { user, member, loading, signIn, signUp, signOut } = useAuth();
//   const [activeTab, setActiveTab] = useState("login");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
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

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitting(true);

//     try {
//       await signUp(email, password, firstName, lastName);
//       toast({
//         title: "Success",
//         description: "Account created successfully! Please check your email to verify your account.",
//       });
//       setActiveTab("login");
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

//   const handleLogout = async () => {
//     await signOut();
//     setEmail("");
//     setPassword("");
//     setFirstName("");
//     setLastName("");
//     toast({
//       title: "Signed Out",
//       description: "You have been successfully signed out.",
//     });
//   };

//   if (loading) {
//     return (
//       <Dialog open={open} onOpenChange={onOpenChange}>
//         <DialogContent className="sm:max-w-md">
//           <div className="flex items-center justify-center py-8">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-civitan-blue"></div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     );
//   }

//   if (user && member) {
//     return (
//       <Dialog open={open} onOpenChange={onOpenChange}>
//         <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle className="text-center text-civitan-blue text-xl font-bold">
//               Member Portal - Welcome {member.first_name}!
//             </DialogTitle>
//             {member.is_admin && (
//               <div className="flex items-center justify-center gap-2 text-amber-600">
//                 <Shield className="h-4 w-4" />
//                 <span className="text-sm font-medium">Admin Access</span>
//               </div>
//             )}
//           </DialogHeader>
//           <MemberPortal onLogout={handleLogout} />
//         </DialogContent>
//       </Dialog>
//     );
//   }

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle className="text-center text-civitan-blue text-xl font-bold">
//             Member Portal
//           </DialogTitle>
//           <DialogDescription className="text-center">
//             Access your member dashboard and club resources
//           </DialogDescription>
//         </DialogHeader>

//         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//           <TabsList className="grid w-full grid-cols-2">
//             <TabsTrigger value="login">Sign In</TabsTrigger>
//             <TabsTrigger value="signup">Sign Up</TabsTrigger>
//           </TabsList>
          
//           <TabsContent value="login">
//             <form onSubmit={handleLogin} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="login-email">Email</Label>
//                 <Input
//                   id="login-email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="login-password">Password</Label>
//                 <div className="relative">
//                   <Input
//                     id="login-password"
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
//           </TabsContent>

//           <TabsContent value="signup">
//             <form onSubmit={handleSignup} className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="signup-firstName">First Name</Label>
//                   <Input
//                     id="signup-firstName"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="signup-lastName">Last Name</Label>
//                   <Input
//                     id="signup-lastName"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="signup-email">Email</Label>
//                 <Input
//                   id="signup-email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="signup-password">Password</Label>
//                 <div className="relative">
//                   <Input
//                     id="signup-password"
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
//           </TabsContent>
//         </Tabs>

//         <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//           <h4 className="font-semibold mb-2 flex items-center gap-2">
//             <Shield className="h-4 w-4" />
//             Member Portal Features
//           </h4>
//           <ul className="text-sm space-y-1 text-gray-600">
//             <li>• Personal member dashboard with attendance tracking</li>
//             <li>• Event registration and calendar access</li>
//             <li>• Meeting minutes and club documents</li>
//             <li>• Member directory (with privacy controls)</li>
//             <li>• Volunteer opportunity management</li>
//             <li>• Club announcements and updates</li>
//           </ul>
//         </div>

//         <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
//           <div className="flex items-start gap-2">
//             <AlertTriangle className="h-4 w-4 text-blue-600 mt-0.5" />
//             <div className="text-sm">
//               <p className="font-medium text-blue-800">Admin Access</p>
//               <p className="text-blue-700">
//                 Accounts registered with authorized email addresses will automatically receive admin privileges.
//               </p>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default MemberLoginModal;
