import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobsTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  
  return (
    <div className="w-[90%]">
      <Table>
        <TableCaption>A List of your Applied Job</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <span>You haven't applied any job yet</span>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell>{appliedJob.createdAt.split("T")[0]}</TableCell>
                <TableCell>
                  {/* Check if appliedJob.job exists before accessing title */}
                  {appliedJob.job ? appliedJob.job.title : "No title available"}
                </TableCell>
                <TableCell>
                  {/* Check if appliedJob.job exists before accessing company */}
                  {appliedJob.job && appliedJob.job.company
                    ? appliedJob.job.company.name
                    : "No company info available"}
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`${
                      appliedJob?.status === "rejected"
                        ? "bg-red-400 hover:bg-red-400"
                        : appliedJob.status === "pending"
                        ? "bg-gray-400 hover:bg-gray-400"
                        : "bg-green-400 hover:bg-green-400"
                    }`}
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobsTable;
