import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import './hero-slide.scss'
import '../button/button.scss'
import Modal, { ModalContent } from '../modal/Modal'
import tmdbApi, { category, movieType } from '../../api/tmdbApi'
import { apiConfig } from '../../api/apiConfig'

import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Button, { OutlineButton } from '../button/Button'


function HeroSlide() {
    SwiperCore.use([Autoplay])

    const [movieItems, setMovieItems] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, params)
                setMovieItems(response.results.slice(0, 4))
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        getMovies()
    }, [])

    return (
        <div className='hero-slide'>
            <Swiper modules={[Autoplay]} grabCursor={true} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 3000 }}>
                {movieItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <HeroSlideItem item={item} className={isActive ? 'active' : ''} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {movieItems.map((item, i) => <TrailerModal key={i} item={item} />)}
        </div>
    )
}

function HeroSlideItem(props) {
    const navigate = useNavigate()
    const item = props.item
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`)
        const videos = await tmdbApi.getVideos(category.movie, item.id)
        console.log(videos)
        if (videos.results.length > 0) {
            const videoSrc = 'http://www.youtube.com/embed/' + videos.results[0].key
            modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc)
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer available'
        }
        modal.classList.toggle('active')
    }

    return (
        <div className='hero-slide__item' style={{ backgroundImage: `url(${background})` }}>
            <div className='hero-slide__item__content__info'>
                <h2 className='title'>{item.title}</h2>
                <div className='overview'>{item.overview}</div>
                <div className='btns'>
                    <Button onClick={() => navigate('/movie/' + item.id)}>
                        Watch Now
                    </Button>
                    <OutlineButton onClick={setModalActive}>
                        Watch Trailer
                    </OutlineButton>
                </div>
            </div>
        </div>
    )
}

function TrailerModal(props) {
    const item = props.item
    const iframeRef = useRef(null)
    const onClose = () => iframeRef.current.setAttribute('src', '')
    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}

export default HeroSlide