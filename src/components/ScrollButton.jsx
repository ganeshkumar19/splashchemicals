import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import '../assets/styles/scrollButtonStyles.css';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [atBottom, setAtBottom] = useState(false);

    const toggleVisibility = () => {
        const scrolled = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        const totalHeight = document.body.offsetHeight;

        setIsVisible(scrolled > 300);
        setAtBottom((viewportHeight + scrolled) >= totalHeight - 10); // 10px threshold
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Initial check in case the page is loaded directly at a scroll position
        toggleVisibility();

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        isVisible && (
            <div className='scrollButtonContainer'>
                {atBottom ? (
                    <FaArrowUp onClick={scrollToTop} className="scrollIcon" />
                ) : (
                    <FaArrowDown onClick={scrollToBottom} className="scrollIcon" />
                )}
            </div>
        )
    );
};

export default ScrollButton