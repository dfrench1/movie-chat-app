import React from 'react';

const UserName = ({name, setName, openChat}) => {
    return (
        <React.Fragment>
        <label htmlFor="input">Username</label>
        <input
          id="input"
          disabled={openChat ? true : false}
          value={name ? name : ''}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        </React.Fragment>
    );
};

export default UserName;