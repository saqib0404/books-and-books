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
        console.log("already read")
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("read-items", storedListStr);
    }
}
export { addToWishList, getList }