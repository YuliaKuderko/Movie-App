import React, { useState, useEffect, useCallback } from 'react'
import './movie-grid.scss'
import MovieCard from '../movie-card/MovieCard'
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi'
import { useNavigate, useParams } from 'react-router-dom'
import Button, { OutlineButton } from '../button/Button'
import Search from '../search/Search'
import { FaSearch } from "react-icons/fa";

function MovieGrid(props) {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const { keyword } = useParams()

    useEffect(() => {
        const getList = async () => {
            let response = null
            if (keyword === undefined) {
                const params = {}
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, params)
                        break
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, params)
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, params)
            }
            setItems(response.results)
            setTotalPage(response.total_pages)
            console.log(response)
        }
        getList()
    }, [props.category, keyword])

    const loadMore = async () => {
        let response = null
        if (keyword === undefined) {
            const params = {
                page: page + 1
            }
            switch (props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, params)
                    break
                default:
                    response = await tmdbApi.getTvList(tvType.popular, params)
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, params)
        }
        setItems([...items, ...response.results])
        setPage(page + 1)
        console.log(response)
    }

    return (
        <>
            <div className='sectiom mb-3'>
                <MovieSearch category={props.category} keyword={keyword} />
            </div>
            <div className='movie-grid'>
                {items.map((item, i) => <MovieCard item={item} key={i} category={props.category} />)}
            </div>
            {
                page < totalPage ? (
                    <div className='movie-grid__loadmore'>
                        <OutlineButton className='small' onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null
            }
        </>
    )
}

function MovieSearch(props) {
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '')
    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                navigate(`search/${keyword}`)
            }
        },
        [keyword, props.category, history]
    )

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault()
            if (e.keyCode === 13) {
                goToSearch()
            }
        }
        document.addEventListener('keyup', enterEvent)
        return () => {
            document.removeEventListener('keyup', enterEvent)
        }
    }, [keyword, goToSearch])

    return (
        <div className='movie-search'>
            <Search
                type="text"
                placeholder="search.."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)} />
            <Button className='small' onClick={goToSearch}><FaSearch/></Button> 
        </div>
    )
}

export default MovieGrid