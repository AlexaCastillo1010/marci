import { useState, useEffect } from "react";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  // Set blob in center when component mounts
  useEffect(() => {
    setPosition({
      x: (window.innerWidth - 100) / 2,
      y: (window.innerHeight - 100) / 2,
    });
  }, []);

  const moveBlob = () => {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 100);
    const newRotation = Math.floor(Math.random() * 360);

    setPosition({ x: newX, y: newY });
    setRotation(newRotation);
  };

  return (
    <div
      style={{
        margin: 0,
        height: "100vh",
        background: "#f5f5f5",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        onClick={moveBlob}
        style={{
          width: "100px",
          height: "100px",
          background: "radial-gradient(circle at 30% 30%, #ff7a7a, #ff4040)",
          borderRadius: "50%",
          position: "absolute",
          cursor: "pointer",
          transition: "left 0.8s ease-in-out, top 0.8s ease-in-out, transform 0.8s ease-in-out",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          left: position.x,
          top: position.y,
          transform: `rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
}
