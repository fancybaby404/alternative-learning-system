'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

export function ProgressTableSkeleton() {
  // Create an array of 5 items to represent loading rows
  const loadingRows = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-blue-600 hover:bg-blue-600">
            <TableHead className="text-white font-bold text-left">
              LEARNER'S ID NO.
            </TableHead>
            <TableHead className="text-white font-bold text-left">
              NAME
            </TableHead>
            <TableHead className="text-white font-bold text-left">
              GRADE LEVEL
            </TableHead>
            <TableHead className="text-white font-bold text-left">
              GROUP
            </TableHead>
            <TableHead className="text-white font-bold text-left">
              ACTION
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loadingRows.map((index) => (
            <TableRow
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              <TableCell className="text-left">
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell className="text-left">
                <Skeleton className="h-4 w-32" />
              </TableCell>
              <TableCell className="text-left">
                <Skeleton className="h-4 w-28" />
              </TableCell>
              <TableCell className="text-left">
                <Skeleton className="h-4 w-16" />
              </TableCell>
              <TableCell className="text-left">
                <Skeleton className="h-8 w-32" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
