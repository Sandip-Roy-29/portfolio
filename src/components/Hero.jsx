import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import useTypewriter from "../hooks/useTypewriter";
import TerminalAnimation from "./TerminalAnimation";

export default function Hero() {
  const typedText = useTypewriter([
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Freelancer"
  ])
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between px-[9%] gap-10 py-20"
    >
      <div className="w-[50%] max-w-xl flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-[var(--text)] leading-tight">
          Hi, I am <span className="text-[var(--accent)]">Sandip Roy</span>
        </h1>
        <h3 className="text-2xl font-semibold text-[var(--bg2)]">
          {typedText}
          <span className="animate-blink">|</span>
        </h3>
        <p className="text-base text-[var(--text)] leading-relaxed">
          I build clean, responsive, and user-friendly websites and web
          application. Passionate about turning ideas into real digital
          experiences with modern web technologies
        </p>
        <div className="flex gap-4 mt-2">
          <motion.button
            className="relative overflow-hidden px-6 py-3 rounded-lg border-2 border-[var(--accent)] text-[var(--bg)] font-semibold"
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="absolute inset-0 bg-[var(--accent)] z-0"
              variants={{
                hover: { x: "100%" },
                initial: { x: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="relative z-10"
              variants={{
                hover: { color: "var(--accent)" },
                initial: { color: "var(--bg)" },
              }}
            >
              Download Resume
            </motion.span>
          </motion.button>
          <motion.button
            className="relative overflow-hidden px-6 py-3 rounded-lg border-2 border-[var(--accent)] text-[var(--accent)] font-semibold"
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="absolute inset-0 bg-[var(--accent)] z-0"
              variants={{
                initial: { x: "-100%" },
                hover: { x: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="relative z-10"
              variants={{
                initial: { color: "var(--accent)" },
                hover: { color: "var(--bg)" },
              }}
            >
              Contact me
            </motion.span>
          </motion.button>
        </div>
        <div className="flex gap-2 mt-4">
            <motion.a
                href="https://github.com/Sandip-Roy-29"
                target="_blank"
                className="relative w-10 h-10 rounded-full border-2 border-[var(--accent)] flex items-center justify-center overflow-hidden"
                whileHover="hover"
                initial="initial"
            >
                <motion.div
                    className="absolute inset-0 bg-[var(--accent)] rounded-full"
                    variants={{
                        hover: { scale: 1},
                        initial: { scale: 0}
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    className="relative z-10 text-lg"
                    variants={{
                        hover: { color: "var(--bg)"},
                        initial: { color: "var(--accent)"}
                    }}
                >
                    <FaGithub />
                </motion.span>
            </motion.a>
            <motion.a
                href="https://github.com/Sandip-Roy-29"
                target="_blank"
                className="relative w-10 h-10 rounded-full border-2 border-[var(--accent)] flex items-center justify-center overflow-hidden"
                whileHover="hover"
                initial="initial"
            >
                <motion.div
                    className="absolute inset-0 bg-[var(--accent)] rounded-full"
                    variants={{
                        hover: { scale: 1},
                        initial: { scale: 0}
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    className="relative z-10 text-lg"
                    variants={{
                        hover: { color: "var(--bg)"},
                        initial: { color: "var(--accent)"}
                    }}
                >
                    <FaLinkedin />
                </motion.span>
            </motion.a>
            <motion.a
                href="https://github.com/Sandip-Roy-29"
                target="_blank"
                className="relative w-10 h-10 rounded-full border-2 border-[var(--accent)] flex items-center justify-center overflow-hidden"
                whileHover="hover"
                initial="initial"
            >
                <motion.div
                    className="absolute inset-0 bg-[var(--accent)] rounded-full"
                    variants={{
                        hover: { scale: 1},
                        initial: { scale: 0}
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    className="relative z-10 text-lg"
                    variants={{
                        hover: { color: "var(--bg)"},
                        initial: { color: "var(--accent)"}
                    }}
                >
                    <FaTwitter />
                </motion.span>
            </motion.a>
        </div>
      </div>
      <div className="w-[50%] flex justify-center">
        <div className="w-105 max-w-full scale-105 shadow-xl">
        <TerminalAnimation 
          name="Sandip Roy"
          skills={
            ["React", "Node", "MongoDB"]
          }
        />
        </div>
      </div>
    </section>
  );
}
