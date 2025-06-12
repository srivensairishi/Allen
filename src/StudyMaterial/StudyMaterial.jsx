import './StudyMaterial.css';

function StudyMaterial() {
    return(
        <>
            <div className="sm-bg">
                <div className='pt-5 flex justify-around'>
                    <select name='CBSE Class' className='bg-white h-10 border-none w-40 rounded font-bold'>
                        <option>CBSE Class</option>
                        <option>Class 12</option>
                        <option>Class 11</option>
                        <option>Class 10</option>
                        <option>Class 9</option>
                        <option>Class 8</option>
                        <option>Class 7</option>
                    </select>

                    <select name='CBSE Notes' className='bg-white h-10 border-none w-40 rounded font-bold'>
                        <option  >CBSE Notes</option>
                        <option>Class 10 Notes</option>
                        <option>Class 9 Notes</option>
                        <option>Class 8 Notes</option>
                        <option>Class 7 Notes</option>
                        <option>Class 6 Notes</option>
                    </select>

                    <select name='CBSE PYPs' className='bg-white h-10 border-none w-40 rounded font-bold'>
                        <option  >CBSE PYP</option>
                        <option>Class 12 Previous Year Papers</option>
                        <option>Class 11 Previous Year Papers</option>
                    </select>

                    <select name='CBSE Sample Papers' className='bg-white h-10 border-none w-40 rounded font-bold'>
                        <option>Sample Papers</option>
                        <option>Class 12 Sample Papers</option>
                        <option>Class 11 Sample Papers</option>
                    </select>

                    <select name='NCERT Solutions' className='bg-white h-10 border-none w-40 rounded font-bold'>
                        <option>NCERT Solutions</option>
                        <option>Class 10 Solutions</option>
                        <option>Class 9 Solutions</option>
                        <option>Class 8 Solutions</option>
                        <option>Class 7 Solutions</option>
                        <option>Class 6 Solutions</option>
                    </select>

                    <select name='CBSE Syllabus' className='bg-white h-10 border-none w-40 rounded font-bold'>
                        <option>CBSE Syllabus</option>
                        <option>Class 12 Syllabus</option>
                        <option>Class 11 Syllabus</option>
                        <option>Class 8 Syllabus</option>
                        <option>Class 7 Syllabus</option>
                        <option>Class 6 Syllabus</option>
                    </select>
                </div>
                <div className='flex justify-center pt-10 align-center'>
                    <div className='rounded-lg bg-green-500 w-230 h-18 flex justify-center align-center'>
                        <p className='mt-3'><span className='text-darkgreen font-bold'>Want to crack IMO, INPhO, NSEJS?</span> <span className='text-white font-bold'>Join Our LIVE Course& crack top olympiads</span></p>
                        <button className='rounded  bg-white h-10 mt-2 ms-2 text-darkgreen font-bold '>Enrol Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudyMaterial;