import { useEffect, useState } from "react";

export default function useTypewriter(
  words, // array of string
  speed = 100, // ms delay per character when typing
  deleteSpeed = 50, // ms delay per character when deleting
  pause = 1500 // ms to wait after word is fully typed
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex]; // which word we're on now

    let delay = isDeleting ? deleteSpeed : speed; // pick typing or delete speed

    // pause when word finished typing, then start deleting
    if (!isDeleting && text === currentWord) {
      delay = pause; // override delay with the long pause
      setIsDeleting(true); // flip mode to delete
    }

    // move to next word when deletion finished
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.slice(0, prev.length - 1)
          : currentWord.slice(0, prev.length + 1)
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return text;
}