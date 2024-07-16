import React, { useRef, useEffect, useState } from 'react';

const VideoComponent = ({ video }) => {
    const videoRef = useRef(null);
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const [userInteracted, setUserInteracted] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // 0 = início do elemento, 1 = fim do elemento
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && userInteracted) {
                    setIsVideoVisible(true);
                    entry.target.play();
                } else {
                    setIsVideoVisible(false);
                    entry.target.pause();
                }
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [userInteracted]);

    const handleVideoClick = () => {
        if (!userInteracted) {
            setUserInteracted(true);
        }
        if (videoRef.current) {
            videoRef.current.play()
                .then(() => {
                    setIsVideoVisible(true);
                })
                .catch(error => {
                    console.log('Error playing video:', error);
                });
        }
    };

    return (
        <div className="header-video-container">
            <video ref={videoRef} className="header-video" loop muted={false} onClick={handleVideoClick}>
                <source src={video} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </div>
    );
};

export default VideoComponent;
