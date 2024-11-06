import { useEffect, useState } from "react";

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{
        width: number,
        height: number,
    }>({
        width: 1920,
        height: 1920,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}
