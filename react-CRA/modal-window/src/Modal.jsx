import React from "react";

export default function MyModal({ setShowModal }) {
  return (
    <div
      className="w-screen h-screen bg-black/20 backdrop-blur-sm fixed top-0 left-0 z-998"
      id="Overlay"
      onClick={() => setShowModal(false)}
    >
      <div className="p-5 w-36 border-2 border-black z-999 mx-auto my-[50%]">
        <p>Flat 10% off, sign up right now</p>
        <button className="cursor-pointer" onClick={() => setShowModal(false)}>
          Sign up
        </button>
      </div>
    </div>
  );
}
