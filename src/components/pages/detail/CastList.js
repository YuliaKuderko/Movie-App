import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi from '../../../api/tmdbApi'
import { apiConfig } from '../../../api/apiConfig'

function CastList(props) {
    const { category } = useParams()
    const [casts, setCasts] = useState([])

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(category, props.id)
            setCasts(response.cast.slice(0, 6))
        }
        getCredits()
    }, [category, props.id])


    return (
        <div className='casts'>
            {casts.map((item, i) => (
                <div key={i} className='casts__item'>
                    <a href={`https://en.wikipedia.org/wiki/${item.name}`}>
                        <div className='casts__item__img' style={{ backgroundImage: `url(${item.profile_path !== null ? apiConfig.w500Image(item.profile_path) : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'})` }}></div>
                        <p className='casts__item__name'>{item.name}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default CastList