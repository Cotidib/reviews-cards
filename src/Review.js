import React, { useState, useEffect, useCallback } from 'react';
import album from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuestion } from 'react-icons/fa';
import { CgDisc } from 'react-icons/cg';

const Review = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const {name,artist,image,text} = album[currentReviewIndex]; //destructuring

    const nextRev = useCallback(() => {
        if(currentReviewIndex === album.length-1)
        {
            setCurrentReviewIndex(0);
        }
        else
        {
            setCurrentReviewIndex(currentReviewIndex+1)
        }  
    })

    const prevRev = () => {
        if(currentReviewIndex === 0)
        {
            setCurrentReviewIndex(album.length-1);
        }
        else
        {
            setCurrentReviewIndex(currentReviewIndex-1)
        }  
    }

    const randomRev = () => {
        let randomIndex = Math.floor(Math.random() * album.length);
        if(randomIndex !== currentReviewIndex)
        {
            setCurrentReviewIndex(randomIndex);
        }
        else
        {
            randomRev();
        }
        
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextRev();
        }, 10000);
        return () => clearInterval(interval);
      }, [nextRev]);

  return (
    <article>
        <div className='review-box'>
            <div className='img-box'>
                <img src={image} alt={name}/>
                <span className='icon'><CgDisc/></span>
            </div>
            <h2 className='album-title'>{name}</h2>
            <div className='album-artist'>{artist}</div>
            <p className='album-rev'><FaQuoteLeft/> {text}</p>
            <div className='buttons'>
                <button className='btn' onClick={prevRev}><FaChevronLeft/></button> 
                <button className='btn' onClick={randomRev}><FaQuestion/></button>
                <button className='btn' onClick={nextRev}><FaChevronRight/></button>
            </div>
        </div>
    </article>

  )
};

export default Review;