import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ maxValue, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const increment = Math.ceil(maxValue / (duration / 16)); // Approximation for 60fps
            const interval = setInterval(() => {
                start += increment;
                if (start >= maxValue) {
                    setCount(maxValue);
                    clearInterval(interval);
                } else {
                    setCount(start);
                }
            }, 16); // 16ms for smooth animation
        }
    }, [isVisible, maxValue, duration]);

    return (
        <div ref={counterRef}>
            {count}
        </div>
    );
};

export default AnimatedCounter;
