import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import userPhoto from '../../../assets/pp.png'


const CheckOut = () => {
    const display = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className='flex justify-center items-center gap-4 mt-16'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h1 className='text-2xl mb-4 text-center'>User Information</h1>
                <figure className="px-10">
                    <img src={user?.photoURL ? user.photoURL : userPhoto} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName ? user.displayName : 'Name Not Available'}</h2>
                    <p>Email: {user?.email}</p>
                    <p>UID: {user?.uid}</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={display?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className='text-2xl mb-4'>Welcome To Tech Educa</h1>
                    <h2 className="card-title text-2xl"> Course name: {display?.name}</h2>
                    <p className="card-title">Course Fee: ${display?.courseFee}</p>
                    <p className='text-1xl'><small>ID Number: {display?.id}</small></p>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;