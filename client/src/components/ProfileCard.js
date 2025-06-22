import React from 'react';
function ProfileCard({ profile }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <h3>{profile.name}</h3>
      <p>{profile.email}</p>
      <p>{profile.profession}</p>
    </div>
  );
}
export default ProfileCard;