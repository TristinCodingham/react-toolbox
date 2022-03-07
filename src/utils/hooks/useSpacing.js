import { useState, useEffect } from 'react'
import useWindowSize from './useWindowSize';

export default function useSpacing() {
    const [padding, setPadding] = useState("15px");

    const { width } = useWindowSize();

    useEffect(() => {
        if(width > 768) setPadding("30px");
        if(width > 1200) setPadding("120px");
    }, [width]);

    return { padding };
}
