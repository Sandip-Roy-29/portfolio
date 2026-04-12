import { useEffect, useState } from "react";

export default function useTerminalAnimation({texts, delay=100, pause=800}){
    const[lineIndex, setLineIndex] = useState(0);
    const[charIndex, setCharIndex] = useState(0);
    const[lines, setLines] = useState([]);

    useEffect(()=>{
        if(lineIndex >= texts.length || texts.length === 0) return;

        const currentLine = texts[lineIndex];

        let timer;

            if(charIndex < currentLine.length){
                timer = setTimeout(() => {
                    setCharIndex((prev) => prev + 1);
                },delay)
            }else{
                timer = setTimeout(() => {
                    setLines(prev => [...prev, currentLine]);
                    setLineIndex(prev => prev + 1);
                    setCharIndex(0);
                }, pause)
            }

        return () => clearTimeout(timer);
    },[delay, texts, charIndex, lineIndex, pause]);

    return texts[lineIndex]
    ? [...lines, // fully typed lines
        texts[lineIndex]?.slice(0,charIndex) // currently typing line
    ]
    : lines
}