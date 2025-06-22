import React, { useEffect, useState } from 'react';
import { api } from '../api';
import ProfileCard from './ProfileCard';

function ProfileList() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await api.get('/users');
        setProfiles(res.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };
    fetchProfiles();
  }, []);

  return (
    <div>
      {profiles.map((profile) => (
        <ProfileCard key={profile._id} profile={profile} />
      ))}
    </div>
  );
}
export default ProfileList;
