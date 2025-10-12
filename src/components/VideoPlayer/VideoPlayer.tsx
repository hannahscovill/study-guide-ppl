import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (videoRef.current && document.activeElement === videoRef.current) {
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    videoRef.current.currentTime += 10;
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    videoRef.current.currentTime -= 10;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown, true);
        return () => window.removeEventListener('keydown', handleKeyDown, true);
    }, []);

    const handleDoubleClick = (e: React.MouseEvent<HTMLVideoElement>) => {
        if (videoRef.current) {
            const rect = videoRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;

            // Prevent default behavior for side thirds
            if (x < width / 3 || x > (width * 2) / 3) {
                e.preventDefault();
                e.stopPropagation();

                if (x < width / 3) {
                    videoRef.current.currentTime -= 10;
                } else {
                    videoRef.current.currentTime += 10;
                }
            }
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLVideoElement>) => {
        const rect = videoRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left;
            const width = rect.width;

            // Prevent click events in side thirds
            if (x < width / 3 || x > (width * 2) / 3) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    };

    return (
        <video
            ref={videoRef}
            controls
            width="100%"
            height="auto"
            style={{ maxWidth: '100%', marginBottom: '1rem' }}
            tabIndex={0} // Makes the video element focusable
            onDoubleClick={handleDoubleClick}
            onClick={handleClick}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;