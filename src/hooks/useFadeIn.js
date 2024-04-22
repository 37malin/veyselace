// src/hooks/useFadeIn.js
import React, { useEffect, useRef } from 'react';

const useFadeIn = (details) => {
    const listRefs = useRef(details.map(() => React.createRef()));

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fadeIn');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 } // ここでフェードインがトリガーされるビューポートの割合を設定
        );

        listRefs.current.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [details]); // detailsが変更されたらエフェクトを再実行

    return listRefs;
};
export default useFadeIn;
