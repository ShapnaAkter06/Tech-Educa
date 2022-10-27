import React, { useRef } from "react";
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { useReactToPrint } from "react-to-print";
import toast from 'react-hot-toast';


//For PDF
const CourseDetails = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'course-details',
        onAfterPrint: () => toast.success('Successfully Downloaded!')
    })

    const details = useLoaderData();
    console.log(details);
    return (
        <div ref={componentRef}
        className='flex justify-center m-4'>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-actions justify-end">
                    <Link>
                        <div className='flex gap-2'>
                            <p>Download</p>
                            <button onClick={handlePrint}><FaDownload></FaDownload></button>
                        </div>
                    </Link>
                </div>
                <figure><img src={details?.image} alt="Course" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{details?.name}</h2>
                    <p>{details?.description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${details.id}`} key={details.id} details={details}>
                            <button className="btn btn-primary">Get Premium Access</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;