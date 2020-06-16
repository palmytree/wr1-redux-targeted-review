import React, { Component } from 'react'
// import axios from 'axios'

class Album extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      url: '',
      album: [
        {
          albumId: 1,
          id: 1,
          title: 'accusamus beatae ad facilis cum similique qui sunt',
          url: 'https://via.placeholder.com/600/92c952',
          thumbnailUrl: 'https://via.placeholder.com/150/92c952'
        },
        {
          albumId: 1,
          id: 2,
          title: 'reprehenderit est deserunt velit ipsam',
          url: 'https://via.placeholder.com/600/771796',
          thumbnailUrl: 'https://via.placeholder.com/150/771796'
        },
        {
          albumId: 1,
          id: 3,
          title: 'officia porro iure quia iusto qui ipsa ut modi',
          url: 'https://via.placeholder.com/600/24f355',
          thumbnailUrl: 'https://via.placeholder.com/150/24f355'
        }
      ]
    }
  }

  render() {
    const photos = this.state.album.map(photo => {
      return (
        <div key={`photoId_${photo.id}`}>
          <span className='photo-title'>{photo.title}</span>
          <img className='photo-img' alt={photo.title} src={photo.url} />
        </div>
      )
    })
    return <div className='photo-album'>{photos}</div>
  }
}

export default Album
