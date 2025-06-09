// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Play, StopCircle, Download } from "lucide-react";
// import { TestResult } from "./types";

// interface SecurityTestExecutionProps {
//   isRunning: boolean;
//   onTestStart: () => void;
//   onTestComplete: () => void;
//   onTestResult: (result: TestResult) => void;
//   testResults: TestResult[];
//   onExportResults: () => void;
// }

// export function SecurityTestExecution({
//   isRunning,
//   onTestStart,
//   onTestComplete,
//   onTestResult,
//   testResults,
//   onExportResults
// }: SecurityTestExecutionProps) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Test Execution</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="flex items-center justify-between">
//           <div className="flex gap-2">
//             {!isRunning ? (
//               <Button onClick={onTestStart}>
//                 <Play className="h-4 w-4 mr-2" />
//                 Start Tests
//               </Button>
//             ) : (
//               <Button variant="destructive" onClick={onTestComplete}>
//                 <StopCircle className="h-4 w-4 mr-2" />
//                 Stop Tests
//               </Button>
//             )}
//           </div>
//           {testResults.length > 0 && (
//             <Button variant="outline" onClick={onExportResults}>
//               <Download className="h-4 w-4 mr-2" />
//               Export Results
//             </Button>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
