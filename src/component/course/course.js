import React from 'react';
import './course.css';

const Course = (props) => {
    const course =  props.product;
    const enrollHandler = props.enrollHandler;
    return (
        <div className="courseContainer">
            <div className="courseImgContainer">
                <img src={course.img} alt="" />
            </div>
            <div>
                <h1>{course.name}.</h1>
                <p>By: {course.by}</p>
                <p>${course.price}</p>
                <button onClick = {()=> enrollHandler(course)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;