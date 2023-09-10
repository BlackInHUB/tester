import { toast } from 'react-toastify';

export const notify = (type, text) => {
    const options = {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    };

    if (type === 'error') {
        return toast.error(text, options);
    } else if (type === 'warning') {
        return toast.warning(text, options);
    } else {
        return toast.success(text, options)
    };
};