import React from 'react'; 

export default function useScroll() {
    const [scrollYOffset, setScrollYOffset] = React.useState(window.pageYOffset);

    const handleScroll = () => {
        setScrollYOffset(window.pageYOffset);
    }

    React.useEffect(() => {
        window.onscroll = handleScroll;
    }, []);

    return scrollYOffset;
}
