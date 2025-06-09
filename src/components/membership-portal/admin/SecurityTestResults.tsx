// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { TestResult } from "./types";

// interface SecurityTestResultsProps {
//   results: TestResult[];
// }

// export function SecurityTestResults({ results }: SecurityTestResultsProps) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Security Test Results</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           {results.map((result) => (
//             <div key={result.id} className="flex items-center justify-between">
//               <div>
//                 <h4 className="font-medium">{result.name}</h4>
//                 <p className="text-sm text-muted-foreground">{result.description}</p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className={`px-2 py-1 rounded-full text-xs ${
//                   result.status === 'passed' ? 'bg-green-100 text-green-800' :
//                   result.status === 'failed' ? 'bg-red-100 text-red-800' :
//                   'bg-yellow-100 text-yellow-800'
//                 }`}>
//                   {result.status}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
