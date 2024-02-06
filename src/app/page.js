"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPreseed, setNoPressed] = useState(false)
  const yesButtonSize = noCount * 20 + 10;

  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];
 
  const handleNoClick = () => {
    if(getNoButtonText(noCount) === phrases[phrases.length - 1 ]) {
      return  setNoPressed(true)
    }
    setNoCount(noCount + 1);
  };


  const getNoButtonText = (x) => {
    return phrases[Math.min(x, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        <div className="text-4xl font-bold my-4">Ok yay!!!</div>
        </>
      ) : noPreseed ? (
        <>
        <img className="h-[200px]" src="https://gifdb.com/images/high/cute-sad-peach-cat-crying-on-floor-mw6mm7hhecp53cs5.gif" /> 
        <div className="text-4xl font-bold my-4">That is not fair</div>
      </>
      )  : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-4xl text my-4">Will you be my Valentine?</h1>
          <div className="w-full justify-center md:flex-row">
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: getNoButtonText && yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 flex-0 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText(noCount)}
            </button>
          </div>
        </>
      )}
    </div>
  );
}