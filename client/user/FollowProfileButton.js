//This component will show the Follow or Unfollow button, depending on whether the current user is already a follower of the user in the profile.

import { Button } from "@material-ui/core";
import React from "react";
import { PropTypes } from "prop-types";
import { unfollow, follow } from "./api-user.js";

export default function FollowProfileButton(props) {
  const followClick = () => {
    props.onButtonClick(follow);
  };

  const unfollowClick = () => {
    props.onButtonClick(unfollow);
  };

  return (
    <div>
      {props.following ? (
        <Button variant="contained" color="secondary" onClick={unfollowClick}>
          Unfollow
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={followClick}>
          Follow
        </Button>
      )}
    </div>
  );
}

FollowProfileButton.propTypes = {
  following: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
