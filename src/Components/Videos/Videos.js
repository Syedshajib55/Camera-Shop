import React from 'react';
import './Videos.css'
const Videos = () => {
    return (
        <div className="parent">
            <div>
                <h1 className='p-2 featured m-2'>Featured Videos</h1>
            </div>
            <div className="videos row col-md-6 col-sm-12" >
                <div>
                    <iframe className="m-3" width="560" height="315" src="https://www.youtube.com/embed/AotfewHGn2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe className="m-3" width="560" height="315" src="https://www.youtube.com/embed/DHcHP-rQmZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 </div>
            </div>   
        </div>
    );
};

export default Videos;