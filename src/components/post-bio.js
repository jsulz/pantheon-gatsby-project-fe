/**
 * Bio component that uses author data from the post object where it's loaded
 */

import React from "react"

const PostBio = ( {authorObject}) => {

  return (
    <div className="bio">
      {authorObject.avatar.url && (
        <img
          alt={authorObject?.firstName || ``}
          className="bio-avatar"
          src={authorObject.avatar.url}
        />
      )}
      {authorObject?.firstName && (
        <p>
          Written by <strong>{authorObject.firstName}</strong>
          {` `}
          {authorObject?.description || null}
          {` `}
        </p>
      )}
    </div>
  )
}

export default PostBio
