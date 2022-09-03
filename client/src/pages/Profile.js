import { useParams } from "react-router-dom";
import PostList from "../components/PostList";
import GameList from "../components/GameList";
import KrossieList from "../components/KrossieList";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {user.username}'s profile.
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <PostList posts={user.posts} title={`${user.username}'s posts...`} />
        </div>
        <div className="col-12 mb-3 col-lg-8">
          <GameList games={user.games} title={`${user.username}'s games...`} />
        </div>
        <div className="col-12 col-lg-3 mb-3">
          <KrossieList
            username={user.username}
            krossieCount={user.krossieCount}
            krossies={user.krossies}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;