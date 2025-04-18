// ScrollToTop.jsx
import { useEffect } from "react";
import { useNavigation } from "react-router";


const ScrollToTop = () => {
    const navigation = useNavigation();

    useEffect(() => {
        if (navigation.state === "idle") {
            window.scrollTo(0, 0);
        }
    }, [navigation.state]);

    return null;
};

export default ScrollToTop;
