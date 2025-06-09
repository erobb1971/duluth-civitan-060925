// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { FileText, Download, Eye } from "lucide-react";

// interface DocumentCardProps {
//   title: string;
//   date: string;
//   fileType: string;
//   size: string;
//   onDownload: () => void;
//   onView: () => void;
// }

// export function DocumentCard({
//   title,
//   date,
//   fileType,
//   size,
//   onDownload,
//   onView
// }: DocumentCardProps) {
//   return (
//     <Card>
//       <CardContent className="p-4">
//         <div className="flex items-start justify-between">
//           <div className="flex items-start space-x-3">
//             <div className="p-2 bg-primary/10 rounded-lg">
//               <FileText className="h-5 w-5 text-primary" />
//             </div>
//             <div>
//               <h3 className="font-medium">{title}</h3>
//               <div className="text-sm text-muted-foreground mt-1">
//                 <span>{date}</span>
//                 <span className="mx-2">•</span>
//                 <span>{fileType}</span>
//                 <span className="mx-2">•</span>
//                 <span>{size}</span>
//               </div>
//             </div>
//           </div>
//           <div className="flex space-x-2">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={onView}
//             >
//               <Eye className="h-4 w-4 mr-1" />
//               View
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={onDownload}
//             >
//               <Download className="h-4 w-4 mr-1" />
//               Download
//             </Button>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
