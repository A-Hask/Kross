import { useParams } from "react-router-dom";
import PostList from "../components/PostList";
import GameList from "../components/GameList";
import KrossieList from "../components/KrossieList";
import Auth from "../utils/auth";

import { ADD_KROSSIE } from "../utils/mutations";

import { useMutation, useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Home from "./Home";

const Profile = () => {
  const { username: userParam } = useParams();
  const [addKrossie] = useMutation(ADD_KROSSIE);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // navigate to profile page if username is logged in user
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Home to='/profile' />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await addKrossie({
        variables: { id: user._id }
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Krossie
          </button>
        )}
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