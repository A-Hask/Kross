import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';


const Profile = () => {
    const { username: userParam } = useParams();

    const { loading } = useQuery(QUERY_USER, {
        variables: { username: userParam }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing Person's profile.
                </h2>
            </div>

            <div className="flex-row justify-space-between mb-3">
                <div className="col-12 mb-3 col-lg-8">
                </div>
            </div>
        </div>
    );
};

export default Profile;