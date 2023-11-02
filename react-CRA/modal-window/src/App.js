import React, { useState } from "react";
import Modal from './Modal'

export default function App() {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="w-screen h-screen">
      <button onClick={() => (setShowModal((prevState) => !prevState))}>CLICK</button>
      <main className="w-2/3 mx-auto my-36 text-3xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec velit quam. Praesent euismod erat non justo condimentum, et euismod orci varius. Sed at lectus ut orci cursus feugiat. Suspendisse potenti. Fusce egestas quam eu risus sagittis, et dictum purus convallis. Nullam ac ultricies ante. Maecenas efficitur justo sed ligula bibendum, id fringilla eros pellentesque. Sed id elit in neque ultrices eleifend. Curabitur vel elit augue. Suspendisse potenti. Nunc eget neque odio.

        Nullam a turpis in ex bibendum mattis nec a erat. Integer volutpat sit amet metus eu feugiat. Proin feugiat viverra velit, in bibendum sapien malesuada sit amet. Sed vel odio risus. Integer congue sit amet est nec facilisis. In hac habitasse platea dictumst. Morbi in orci ut nunc hendrerit bibendum. Sed id ex dui. Phasellus lacinia enim a felis dictum, vel varius urna ultrices. In et sapien justo. Integer ac augue in nisi ultrices tincidunt. Suspendisse potenti. Nullam vel tristique justo.
      </main>
      {showModal ? <Modal setShowModal={setShowModal} /> : ''}
    </div>
  );
}
