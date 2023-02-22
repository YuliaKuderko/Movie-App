import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi from '../../api/tmdbApi'
import { apiConfig } from '../../api/apiConfig'

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Review(props) {
    const { category } = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getReviews = async () => {
            const response = await tmdbApi.reviews(category, props.id)
            setReviews(response.results.slice(0, 6))
            console.log(response)
        }
        getReviews()
    }, [category, props.id])


    return (
        <>
            {reviews.map((item, i) => (
                <div key={i} className='review'>
                    <div className='author-details'>
                        <img src={(item.author_details.avatar_path !== null && !item.author_details.avatar_path.includes("http")) ? apiConfig.w500Image(item.author_details.avatar_path) : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} className='review-avatar' />
                        <div>
                            <h3>{item.author}</h3>
                            <span style={{fontSize:"12px", color:"rgba(255, 255, 255, 0.854)"}}>{new Date(item.updated_at || item.created_at).toLocaleString()}</span>
                        </div>
                    </div>
                    <Box
                        sx={{
                            width: 450,
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                            mt: 1
                        }}
                    >
                        <Rating
                            value={item.author_details.rating}
                            max={10}
                            readOnly
                            precision={0.5}
                            size='medium'
                            emptyIcon={
                                <StarBorderIcon fontSize="inherit" style={{color: "orange", opacity:0.7}} />
                            }
                        />
                        <Box sx={{ ml: 1, mt: 0.1, fontSize: 12, color: 'grey', textAlign: 'center', fontWeight: 500 }}>{item.author_details.rating || "0"} / 10</Box>
                    </Box>
                    <p className='review-content'>{item.content}</p>
                </div>
            ))}
        </>
    )
}

export default Review