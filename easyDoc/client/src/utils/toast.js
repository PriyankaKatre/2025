import { toast } from "sonner";

const showToast = (type, message) => {
    if (toast.message !== message) {
        if (type === "success") {
            toast.success(message, {
                className: "!bg-green-500 !text-white !p-4 !rounded-lg",
            });
        } else if (type === "error") {
            toast.error(message, {
                className: "!bg-red-500 !text-white !p-4 !rounded-lg",
            });
        } else if (type === "warning") {
            toast.error(message, {
                className: "!bg-yellow-500 !text-white !p-4 !rounded-lg",
            })
        } else {
            toast(message);
        }
    }
};

export default showToast;
