import React from "react";
import { Button } from "./ui/button";
import { BookMarked } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { motion } from "framer-motion";

const Job = ({ job }) => {
  const navigate = useNavigate();
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDiff = currentTime - createdAt;
    return Math.floor(timeDiff / (1000 * 24 * 60 * 60));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-100"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {" "}
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}{" "}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <BookMarked />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button>
          <Avatar>
            <AvatarImage
              src={
                job?.company?.logo ||
                "https://res-console.cloudinary.com/dsxtsxaul/media_explorer_thumbnails/e71334f8cc388f381546f5a8f8e812de/detailed"
              }
              alt="Company Logo"
            />
          </Avatar>
        </Button>

        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-md my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} Positions
        </Badge>

        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>

        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>

      <div className="flex items-center gap-4 mt-2">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          className="bg-blue-500 text-white rounded rounded hover:bg-blue-600"
        >
          Details
        </Button>
      </div>
    </motion.div>
  );
};

export default Job;
