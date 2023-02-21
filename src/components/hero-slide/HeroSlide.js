import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
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

    const useStyles = makeStyles((theme) => ({
        emptyStar: {
          color: "orange",
          
        }
      }));
      const classes = useStyles();

    return (
        <div className='hero-slide__item' style={{ backgroundImage: `url(${background})` }}>
            <div className='hero-slide__item__content__info'>
                <h2 className='title'>{item.title}</h2>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Box
                        sx={{
                            width: 450,
                            display: 'flex',
                            alignItems: 'center',
                            textAlign:'center',
                            mt: 2
                        }}
                    >
                        <Rating
                            value={item.vote_average}
                            max={10}
                            readOnly
                            precision={0.5}
                            size='medium'
                            emptyIcon={
                                <StarBorderIcon fontSize="inherit" className={classes.emptyStar} />
                              }
                            sx={{ }}
                        />
                        <Box sx={{ ml: 1, mt:0.4, fontSize: 15, color:'white', transform:'translateY(0)', textAlign: 'center', fontWeight:500}}>{item.vote_average}</Box>
                        <Box sx={{ml:1,mt:0.2,fontSize: 13,transform:'translateY(0)', color:'whitesmoke', textAlign: 'center'}}>| {item.vote_count}</Box>
                    </Box>
                </div>
                <div className='overview'>{item.overview}</div>
                <div className='btns'>
                    <Button onClick={setModalActive}>
                        Watch Trailer
                    </Button>
                    <OutlineButton onClick={() => navigate('/movie/' + item.id)}>
                        Read
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