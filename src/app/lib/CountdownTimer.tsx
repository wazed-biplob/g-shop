import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate, countdown }: any) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    // get current date
    const currentTime = new Date().getTime();

    // get updatedAt into Date Format
    var givenDate = new Date(targetDate);

    // Add countDown to updatedAt
    givenDate.setDate(givenDate.getDate() + countdown);

    // convert updatedAt + countdown Date into again targetDate
    targetDate = givenDate.toISOString();

    targetDate = new Date(targetDate);
    const difference = currentTime - targetDate.getTime();
    return difference >= 0 ? difference : 0;
  }

  // Function to format the time remaining
  function formatTimeRemaining(remaining: any) {
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1000);
    }, 1000);

    // Clear the timer when component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto w-full">
      <p className="text-[26px]">{formatTimeRemaining(timeRemaining)}</p>
    </div>
  );
};

export default CountdownTimer;
