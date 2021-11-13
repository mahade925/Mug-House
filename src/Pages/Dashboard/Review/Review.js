import React, { useState } from 'react';

const Review = () => {
    const [reviewInfo, setReviewInfo] = useState({});
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewInfo = { ...reviewInfo };
        newReviewInfo[field] = value;
        setReviewInfo(newReviewInfo);
    };

    const handleSubmit = e => {
        // send to the server
        fetch('https://damp-citadel-69282.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Reviewd!')
                }
            });
        e.preventDefault();
    }

    return (
        <div className="container w-50">
            <h1>Add Review</h1>
            <div className="form">
                <div>
                    <div class="form-floating mb-3 mt-5">
                        <input type="text" class="form-control" onBlur={handleOnChange} name="name" id="floatingInput" placeholder="Your name" />
                        <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" onBlur={handleOnChange} name="email" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" onBlur={handleOnChange} name="img" id="floatingInput" placeholder="img link" />
                        <label for="floatingInput">Your image link</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" onBlur={handleOnChange} name="rating" id="floatingInput" placeholder="img link" />
                        <label for="floatingInput">Rating</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" onBlur={handleOnChange} name="message" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                        <label for="floatingTextarea2">Write your review here</label>
                    </div>
                    <button className="btn btn-info w-100 btn-lg mt-4" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Review;