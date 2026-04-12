import { useMemo } from "react";
import useTerminalAnimation from "../hooks/useTerminalAnimation"

export default function TerminalAnimation({name, skills}){
    const mySkills =  skills.join(" • ");
    const texts = useMemo(() => [
        "~$ whoami", `> ${name}`, "", "~$ cat skills.txt", `> ${mySkills}`
    ],[name, mySkills])
    const lines = useTerminalAnimation({
        texts
    })

    return(
        <div className="bg-[var(--bg)] text-[var(--accent)] font-mono rounded-xl overflow-hidden border border-[var(--bg2)] translate-y-4">
            <header className="bg-[var(--bg2)] h-7 flex items-center gap-2 px-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"/>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
                <div className="w-3 h-3 bg-green-500 rounded-full"/>
            </header>
            <div className="px-4 py-3 space-y-2">
                {lines.map((line, index) => (
                    <p key={index} className="whitespace-pre-line">
                        {line}
                        {index === lines.length - 1 && line !== undefined && (
                            <span className="animate-pulse">|</span>
                        )}
                    </p>
                ))}
            </div>
        </div>
    )
}