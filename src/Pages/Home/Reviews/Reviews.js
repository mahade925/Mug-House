import React, { useEffect, useState } from 'react';
import './Reviews.css';
import PrettyRating from "pretty-rating-react";
import {
    faHeart,
    faStar,
    faHeartBroken,
    faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
    faHeart as farHeart,
    faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const icons = {
        star: {
            complete: faStar,
            half: faStarHalfAlt,
            empty: farStar,
        },
        heart: {
            complete: faHeart,
            half: faHeartBroken,
            empty: farHeart,
        },
    };

    const colors = {
        star: ['#d9ad26', '#d9ad26', '#434b4d'],
        heart: ['#9b111e', '#a83f39'],
    };

    console.log(reviews);
    return (
        <section id="testimonials">
            <div className="testimonial-heading">
                <h1>Reviews</h1>
            </div>
            <div className="testimonial-box-container">
                {
                    reviews.map(review => <div className="testimonial-box container">
                        <div className="box-top">
                            <div className="profile">
                                <div className="profile-img">
                                    <img src={review.img} alt="" />
                                </div>
                                <div className="name-user">
                                    <strong>{review.name}</strong>
                                    <span>{review.email}</span>
                                </div>
                            </div>
                            <div className="reviews">
                                <div>
                                    <div>
                                        <PrettyRating value={review.rating} icons={icons.star} colors={colors.star} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="client-comment">
                            <p>{review.message}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Reviews;