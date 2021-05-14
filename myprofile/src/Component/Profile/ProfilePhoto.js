import React from 'react';

import { Image } from 'react-bootstrap';

const ProfilePhoto = () => {
    return (
        <div>
    <Image className="avatar-img" src="/me.jpg" roundedCircle />
        </div>
    )
}

export default ProfilePhoto;
