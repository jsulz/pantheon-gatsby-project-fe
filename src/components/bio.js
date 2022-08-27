/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

const Bio = ( {authorObject}) => {

  console.log(authorObject)

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

export default Bio
