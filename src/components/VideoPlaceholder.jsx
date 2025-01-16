import React from 'react';

function VideoPlaceholder() {
    return (
        <div className="relative pb-[56.25%] h-0 overflow-hidden mb-8">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/uuo34WpKM7Q?si=h9yV9m1d8kdnsVcF"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
          </iframe>
        </div>
    );
}

export default VideoPlaceholder;