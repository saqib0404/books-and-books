import { toast } from "react-toastify";

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem("read-items");
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return []
    }
}

const getList = () => {
    const storedListStr = localStorage.getItem("read-items");
    const storedList = JSON.parse(storedListStr);
    return storedList
}

const addToWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        toast.warn('Already added to Wishlist!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("read-items", storedListStr);
        toast.success('Added To Wishlist', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
}
export { addToWishList, getList }