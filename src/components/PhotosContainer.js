import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Photos = ({photos, filters}) => {
  const photoCards = photos.map((photo) =>(
    <div className="PhotoCard" key={photo.id}>
      <Link to={`/photos/${photo.id}`}>
        <img
          src={photo.images.thumbnail.url}
          alt={photo.caption ? photo.caption.text : photo.id}
        />
      </Link>
    </div>
  ))

  return (
    <div className="Photos">
      <h1>Photos</h1>
      <div className="grid">{photoCards}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    filters: state.filters,
  }
}

export default connect(mapStateToProps)(Photos)
