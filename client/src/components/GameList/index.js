import React from "react";
import { Link } from "react-router-dom";

const GameList = ({ games }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Games</span>
      </div>
      <div className="card-body">
        {games &&
          games.map((game) => (
            <p className="pill mb-3" key={game._id}>
              {game.gameBody} //{" "}
              <Link
                to={`/profile/${game.username}`}
                style={{ fontWeight: 700 }}
              >
                {game.username} on {game.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default GameList;
