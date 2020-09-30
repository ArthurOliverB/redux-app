import React, { useEffect } from 'react';

import { Button, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/actions/moviesActions'

import MovieCard from '../components/MovieCard';
import './Home.css';

const { Title } = Typography
export default function Home() {
    const movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchMovies())
    }, [])
    
    return (
        <>
            <Title>All Movies</Title>
            <Button color="primary" shape="round" icon={<DownloadOutlined />}
                >Fetch Movies</Button>
            <div className="card-container">
                {
                    movies.map((movie) => {
                        return <MovieCard id={movie.id} title={movie.title} image={movie.image} />
                    })
                }
            </div>
        </>
    );
}