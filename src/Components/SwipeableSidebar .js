import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const SwipeableSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsOpen(false), // Close on left swipe
    onSwipedRight: () => setIsOpen(true), // Open on right swipe
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: "1001",
        }}
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Swipeable Sidebar */}
      <div
        {...handlers}
        style={{
          position: "fixed",
          top: "0",
          right: isOpen ? "0" : "-250px",
          width: "100px",
          height: "100%",
          backgroundColor: "hsl(48, 73%, 65%)",
          color: "black",
          transition: "right 0.3s ease-in-out",
          boxShadow: isOpen ? "-2px 0 5px rgba(0,0,0,0.3)" : "none",
          zIndex: "1000",
          overflowY: "auto",
        }}
      >
        <div style={{ padding: "20px" }}>
          
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li style={{ margin: "10px 0" }}>
              <a  className="vertical-text" href="#tokenomics">
                Tokenomics
              </a>
            </li>
            <li style={{ margin: "10px 0" }}>
              <a  className="vertical-text" href="#moonsea" style={{
          margin: "10px 0",
          borderBottom: "1px solid black",
          paddingBottom: "10px",
        }}>
                Moonsea
              </a>
            </li>
            <li style={{ margin: "10px 0" }}>
              <a   className="vertical-text" href="#moonshot" style={{
          margin: "10px 0",
          borderBottom: "1px solid black",
          paddingBottom: "10px",
        }}>
                Moonshot
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay (optional for better UX) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            zIndex: "999",
          }}
        ></div>
      )}
    </>
  );
};

export default SwipeableSidebar;
