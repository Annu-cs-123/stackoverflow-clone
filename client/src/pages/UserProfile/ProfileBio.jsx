import React from 'react'

const ProfileBio = ({currentProfile}) => {
  return (
    <div>
    <div>{currentProfile?.tags.length !== 0 ? (
            <React.Fragment>
                <h4>Tags Watched</h4>{
                    currentProfile?.tags.map((tag)=>(
                        <p key={tag}>{tag}</p>
                    ))
                }
            </React.Fragment>
        ):(<p>0 tags watched</p>)
    }
    </div>
    <div>
      {currentProfile?.about ?(
        <React.Fragment>
          <h4>About</h4>
          <p>{currentProfile?.about}</p>
        </React.Fragment>
      ):(<p>No bio found</p>)}
    </div>
    </div>
  )
}

export default ProfileBio