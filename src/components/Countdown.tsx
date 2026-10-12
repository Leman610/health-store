import { useState, useEffect } from "react";

interface CountdownProps {
  seconds: number;
  className?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

const Countdown = ({ seconds, className = "" }: CountdownProps) => {
  const [endTime] = useState(() => Date.now() + seconds * 1000);
  const [left, setLeft] = useState(seconds);

  useEffect(() => {
    const id = setInterval(() => {
      const diff = Math.max(0, Math.round((endTime - Date.now()) / 1000));
      setLeft(diff);
      if (diff === 0) clearInterval(id);
    }, 1000);

    return () => clearInterval(id);
  }, [endTime]);

  const days = left % 60;
  const hours = left % 60;
  const minutes = left % 60;
  const secs = left % 60;

  return (
    <div className={className}>
      <span>{pad(days)}</span>
      <b>:</b>
      <span>{pad(hours)}</span>
      <b>:</b>
      <span>{pad(minutes)}</span>
      <b>:</b>
      <span>{pad(secs)}</span>
    </div>
  );
};

export default Countdown;
