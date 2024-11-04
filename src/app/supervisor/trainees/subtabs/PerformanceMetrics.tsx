// 'use client';
// // import { useState } from 'react';
// import { Trainee } from '@/app/supervisor/trainees/page'

// interface PerformanceMetricsProps {
//   trainees: Trainee[];
// }

// const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ trainees }) => {
//   return (
//     <div className="space-y-6">
//       <h2 className="text-xl font-semibold">Performance Metrics</h2>

//       {trainees.map((trainee) => (
//         <div key={trainee.id} className="bg-white p-6 rounded-lg shadow mb-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="font-medium">{trainee.name}</h3>
//             <span className="text-sm text-gray-500">
//               Last Evaluated: {trainee.performance.lastEvaluation}
//             </span>
//           </div>

//           <div className="space-y-4">
//             {trainee.performance.metrics.map((metric) => (
//               <div key={`${trainee.id}-${metric.category}`}>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium">{metric.category}</span>
//                   <span className="text-sm text-gray-600">{metric.score}%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div
//                     className="bg-blue-600 h-2.5 rounded-full"
//                     style={{ width: `${metric.score}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4 pt-4 border-t">
//             <div className="flex justify-between items-center">
//               <span className="font-medium">Overall Rating</span>
//               <span className="text-lg font-semibold text-blue-600">
//                 {trainee.performance.overallRating}%
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PerformanceMetrics;