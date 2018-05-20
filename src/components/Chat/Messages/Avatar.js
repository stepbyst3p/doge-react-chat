import React from 'react';
import MUIAvatar from '@material-ui/core/Avatar';
import pickColorFrom from '../../../utils/PickColorFrom';
import generateAvatarPlaceholder from '../../../utils/GenerateAvatarPlaceholder';

const Avatar = ({ colorFrom, children, ...rest }) => (
    <MUIAvatar style={{ backgroundColor: pickColorFrom(colorFrom) }} {...rest}>
        {generateAvatarPlaceholder(children)}
    </MUIAvatar>
);

export default Avatar;
