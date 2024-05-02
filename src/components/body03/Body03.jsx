import React from 'react';
import useFadeIn from '../../hooks/useFadeIn';
import './body03.css'
import image1 from '../../images/body03/body03-1.png';
import image2 from '../../images/body03/body03-2.jpg';
import image3 from '../../images/body03/body03-3.png';
import image4 from '../../images/body03/body03-4.png';
import image5 from '../../images/body03/body03-5.png';
import image6 from '../../images/body03/body03-6.png';
import { Element } from 'react-scroll';


const Body03 = () => {
    let details = [
        {   image:image1,
            title: "Personalised Coaching",
            subtitle: "Your Own Tennis Lessons",
            description: "In private lessons, coaches tailor their instruction to each student's skill level and goals. This allows for quicker improvement in technique.",
            copy: "Tailored coaching, your progress."
        },
        {   image:image2,
            title: "Flexible Scheduling",
            subtitle: "Tailored to Your Timetable",
            description: "Private lessons can be adjusted to fit the student's schedule, making it possible to take lessons that suit their lifestyle, even for those who are busy.",
            copy: "Fits your busy life."
        },
        {   image:image3,
            title: "Intensive Learning",
            subtitle: "All Eyes on You",
            description: "Compared to group lessons, private lessons allow the coach's attention to be focused on one individual, enabling more efficient skill acquisition.",
            copy: "Focus speeds improvement."
        },
        {   image:image4,
            title: "Immediate Feedback and Correction",
            subtitle: "Instant Error Correction",
            description: "Coaches provide immediate feedback on any mistakes or areas for improvement during play, allowing for swift correction of techniques.",
            copy: "Instant optimisation."
        },
        {   image:image5,
            title: "Mental Support",
            subtitle: "Strengthening Your Mental Game",
            description: "Beyond improving tennis skills, mental support is also crucial. In private lessons, coaches provide support for motivation and dealing with matches on a psychological level.",
            copy: "Beyond skills, mental care."
        },
        {   image:image6,
            title: "Customised Plans for Goal Achievement",
            subtitle: "Setting and Achieving Your Goals",
            description: "Lesson plans can be customised to meet individual goals, enabling effective approaches towards specific skill improvements and performance enhancements in matches.",
            copy: "Turn goals into reality."
        }
    ];

    const listRefs = useFadeIn(details);


    return (
        <Element name="program">
            <div className='body03'>
                <div className='_inner'>
                    <ul className='list_wrap'>
                        {details.map((detail, index) => (
                            <li className='_list' ref={listRefs.current[index]} key={index}>
                                <div className='_grid'>
                                    <div className='img-feild'>
                                        <div className='img_inner'>
                                            <div className="img_wrap">
                                                <img src={detail.image} alt={detail.title} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_txtfeild">
                                        <div className="_txtfeild-inner">
                                            <h5>{detail.subtitle}</h5>
                                            <h2><strong>{detail.title}</strong></h2>
                                            <p>{detail.description}</p>
                                        </div>
                                        <div className="copy_wrap"><p>{detail.copy}</p></div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Element>
    )
}

export default Body03