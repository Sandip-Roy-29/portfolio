import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CustomCursor(){
    const [pos, setPos] = useState({x:0, y:0});

    useEffect(() => {
        const move = (e) => setPos({x:e.clientX, y:e.clientY});
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move)
    },[])

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-xl border-2 border-emerald-400 pointer-events-none z-50"
            animate={{x: pos.x - 12, y: pos.y - 12}}
            transition={{type: "spring", stiffness: 200, damping: 20}}
        />
    )
}