import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi from '../../../api/tmdbApi'
import { apiConfig } from '../../../api/apiConfig'
import './detail.scss'
import CastList from './CastList'
import VideoList from './VideoList'
import MovieList from '../../movie-list/MovieList'
import { BsClock, BsCalendar2Date } from "react-icons/bs";
import { SiThemoviedatabase } from "react-icons/si";

function Detail() {

  const { category, id } = useParams()
  const [item, setItem] = useState(null)

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours === 0) {
      return `${minutes} minutes`;
    } else if (hours === 1) {
      return `${hours} hour ${minutes} minutes`;
    }
    return `${hours} hours ${minutes} minutes`;
  }

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} })
      setItem(response)
      console.log(response)
      window.scrollTo(0, 0)
    }
    getDetail()
  }, [category, id])

  return (
    <>
      {item && (
        <>
          <div className='banner' style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }} />
          <div className='mb-3 movie-content container'>
            <div className='movie-content__poster'>
              <div className='movie-content__poster__img' style={{ backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})` }}></div>
            </div>
            <div className='movie-content__info'>
              <h1 className='title'>
                {item.title || item.name}
              </h1>
              <div className='genres'>
                {item.genres && item.genres.slice(0, 5).map((genre, i) => (
                  <span className='genres__item' key={i}>{genre.name}</span>
                ))}
              </div>
              <p className='overview'>
                {item.overview}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className='more-details' style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <BsClock style={{ fontSize: '20px' }} />
                  <h5 style={{ marginTop: '2px' }}>{toHoursAndMinutes(item.runtime || item.last_episode_to_air.runtime) || 'none'}</h5>
                </div>
                <div className='more-details' style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <SiThemoviedatabase style={{ fontSize: '20px' }} />
                  <h5 style={{ marginTop: '2px' }}>{item.vote_average.toFixed(1)} / 10</h5>
                </div>
                <div className='more-details' style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <BsCalendar2Date style={{ fontSize: '20px' }} />
                  <h5 style={{ marginTop: '3px' }}>{new Date(item.release_date || item.last_air_date).toDateString()}</h5>
                </div>

              </div>
              <div className='cast'>
                <div className='section__header'>
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='section mb-3'>
              <VideoList id={item.id} />
            </div>
            <div className='section mb-3'>
              <div className='section__header mb-2'>
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Detail