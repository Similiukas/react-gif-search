import { useState, useEffect } from 'react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

const API_KEY = 'sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh'; // 'FTiLvKAABFupjkqCUeUr7Eb0fUa0gyOo';  ////'// // 

const gf = new GiphyFetch(API_KEY);

const GridDemo = ({ searchTerm, onGifClick }) => {
    const [width, setWidth] = useState(window.innerWidth * .9); // Main gif grid is 90 viewport width for styling

    // Resizing grid
    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth * .9));
    }, [width])

    const fetchGifs = (offset) => gf.search(searchTerm, { offset, limit: 12 });
    return (
        <div onResize={({ width }) => setWidth(width)}>
            <Grid
                key={searchTerm}
                onGifClick={onGifClick}
                fetchGifs={fetchGifs}
                width={width}
                columns={4}
                gutter={10}         // Gaps between gifs
                borderRadius={30}   // Rounding the gifs
            />
        </div>
    );
}

export default GridDemo;