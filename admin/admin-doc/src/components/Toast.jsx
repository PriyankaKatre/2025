import { useEffect } from "react";
import { toast } from "sonner";

const Toast = ({ type, message }) => {
     toast.dismiss();
     useEffect(() => {
       switch (type) {
         case "success":
           toast.success(message, {
             duration: 5000,
             className: "!bg-green-500 !text-white !p-4 !rounded-lg", // Custom green color for success
           });
           break;
         case "error":
           toast.error(message, {
             duration: 5000,
             className: "!bg-red-500 !text-white !p-4 !rounded-lg", // Custom red color for error
           });
           break;
         case "info":
           toast.info(message, {
             duration: 5000,
             className: "!bg-blue-500 !text-white !p-4 !rounded-lg", // Custom blue color for info
           });
           break;
         case "warning":
           toast.warning(message, {
             duration: 5000,
             className: "!bg-yellow-500 !text-white !p-4 !rounded-lg", // Custom yellow color for warning
           });
           break;
         default:
           toast(message, { duration: 5000 });
       }
     }, [type, message]);

  return null;
};

export default Toast;
