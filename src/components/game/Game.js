import React from "react";
import Board from "../board/Board";
import { useContext } from "react";
import { Context } from "../../utils/Context";

export default function Game() {
  const { state, dispatch } = useContext(Context);

  return (
    <article className="game ">
      <section className="row">
        <div className="game-board">
          <Board />
        </div>
        <div className="btn-container">
          <p className="h2">{/* status */}</p>
          <ul className="ul">
            <li>
              <button
                className="buttonList"
                onClick={() => dispatch({ type: "reset" })}
              >
                Start the Game
              </button>
            </li>
            {/* <li>
              <button>Go to #1 </button>
            </li> */}
            {state.moves.map((move, idx) => (
              <li key={idx + 1}>
                <button
                  className="buttonList"
                  onClick={() =>
                    dispatch({ type: "goTo", move: move, idx: idx })
                  }
                >
                  Go to #{idx + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
