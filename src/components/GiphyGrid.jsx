import { useState, useEffect } from 'react';
import { Gif } from '@giphy/react-components';
import GridDemo from './GridDemo';
import { CloseFilled32 } from "@carbon/icons-react";


const GiphyGrid = ({ searchTerm }) => {
    const [modalGif, setModalGif] = useState();
    const [width, setWidth] = useState(window.innerWidth / 3);

    // Resizing popup gif
    useEffect(() => {
        function resizing() { setWidth(window.innerWidth / 3); }
        window.addEventListener('resize', resizing);
        // Cleaning up to prevent memory leak (https://www.pluralsight.com/guides/re-render-react-component-on-window-resize)
        return _ => { window.removeEventListener('resize', resizing); }
    }, [width]);

    return (
        <div className="main-gif-grid">
            <GridDemo                   // Main grid of gifs
                searchTerm={searchTerm}
                onGifClick={(gif, e) => {
                    e.preventDefault(); // Preventing a tag href to giphy
                    setModalGif(gif);   // Creating gif popup
                }}
            />
            {modalGif && (              // Popup gif (if it is defined)
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "rgba(0, 0, 0, .8)",
                    }}
                    onClick={e => {
                        e.preventDefault(); // Not opening link to giphy
                    }}
                >
                    <div style={{ width: '33.3vw' }}>
                        <Gif className="popup-gif" gif={modalGif} width={width} />  {/* The main popup gif */}
                        <div className="popup-close-div" onClick={() => setModalGif(undefined)}>
                            Close Gif
                            <CloseFilled32 className="btn-close"/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GiphyGrid
