import './Courses.css';
import Header from '../Header/Header';

function Courses() {
    return(
        <>
            <div className='co-bg-1'>
                <div className='co-first'>
                    <div>
                        <h2 className='co-heading'>ALLEN Online Courses</h2>
                        <p className='co-para'>To get the full ALLEN Learning Experience explore the ultimate series <br></br>of courses for JEE, NEET and Olympiads. The online courses are <br></br>ALLEN recommended. They provide a fully structured curriculum<br></br> with a week-by-week plan and foster meaningful teacher-student <br></br>interaction. These courses offer a personalized study experience, <br></br>guiding you throughout your journey on where to concentrate your efforts.</p>
                    </div> 
                    <div>
                        <img className='image-1' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1748249832/online_program_yxv0cc_ubxmop.webp"  />
                    </div>
                </div>  
                <div className='co-scholarship'>
                    <p className='yellow-text'>win upto 90% scholarship on online courses</p>    
                    <p className='white-text'>Take the ALLEN Online schorship test</p>
                    <button className='co-button'>Register Now</button>
                </div>  
               <h2>Discover the perfect online course</h2>

               <div className='co-cards-con'>
                <div className='co-card'>
                    <h3 className='co-card-heading'>JEE</h3>
                    <button className='co-card-button'>View</button>
                </div>
                <div className='co-card'>
                    <h3 className='co-card-heading'>NEET</h3>
                    <button className='co-card-button'>View</button>
                </div>
                <div className='co-card'>
                    <h3 className='co-card-heading'>Class 6-10</h3>
                    <button className='co-card-button'>View </button>
                </div>
               </div>

            <div className='added-benefits-con'>
                <div>
                    <img className='lamp-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1748251623/200_added_benefits_sqnzic_rpd7ki.avif"  />
                </div>
                <div>
                    <h4>and ADDED Benefits</h4>
                    <ul>
                        <li className='list'>School like discipline and homework</li>
                        <li className='list'>Daily Doubt Solving with teachers</li>
                        <li className='list'>Best in class Video Library, Notes, Q Banks</li>
                        <li className='list'>All India Test Series with analysis</li>
                        <li className='list'>1-1 Mentoring sessions for students</li>
                        <li className='list'>Regular PTMs and Progress Reports</li>
                    </ul>
                </div>
            </div>
            <h3 className='special-heading'>What's Special</h3>
            <div className='co-special-con'>
                <div className='co-special-card'>
                    <img className='co-special-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1748253572/live_intractive_class_lxfjvd_k3ipns.avif"  />
                    <p>Daily Live Interactive Classes</p>
                </div>
                <div className='co-special-card'>
                    <img className='co-special-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1748253582/daily_doubt_solving_huffs4_athp9v.avif"  />
                    <p>Personalised Study Tools</p>
                </div>
                <div className='co-special-card'>
                    <img className='co-special-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1748253591/weekly_self_study_plan_hegxyx_qj2nzn.avif"  />
                    <p>Weekly Self-study Plan</p>
                </div>
                <div className='co-special-card'>
                    <img className='co-special-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1748253599/smart_test_taking_strategies_ouvab9_o1meld.avif"  />
                    <p>Score Improvement strategy</p>
                </div>
            </div>
            <h3 className='mt-5 mb-5'>Alternate Coaching you can explore</h3>
            <div className='flex justify-around'>
                <button className='co-coaching-button'>
                    <div className='flex justify-center align-center'>
                    <img className='co-coaching-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1748254916/distance_learning_vwq4zl_ecthay.webp"  /> 
                    <h4>Distance Learning</h4>
                    </div>
                </button>

                <button className='co-coaching-button'>
                    <div className='flex  justify-center align-center'>
                    <img className='co-coaching-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1748254934/online_test_series_r6f0ms_qgdfjw.webp"  />
                    <h4>Online Test Series</h4>
                    </div>
                </button>
            </div>
        </div>
    
        </>
    )
}


export default Courses;