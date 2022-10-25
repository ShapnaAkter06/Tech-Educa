import React from 'react';

const Blog = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <h2 className='text-4xl text-pink-700 font-bold flex justify-center mt-8'>Question Answer</h2>
                <div className="grid grid-cols-1 gap-4 p-12">
                    <div>
                        <h3 className='text-fuchsia-500  text-2xl font-semibold'>1. What is `cors`?</h3>
                        <p className='text-1xl font-medium max-w-xl mx-auto my-4'></p>
                    </div>
                    <div>
                        <h3 className='text-fuchsia-500  text-2xl font-semibold'>2. Why are you using `firebase`? What other options do you have to implement authentication?</h3>
                        <p className='text-1xl font-medium max-w-xl mx-auto my-4'></p>
                    </div>
                    <div>
                        <h3 className='text-fuchsia-500  text-2xl font-semibold'>3. How does the private route work</h3>
                        <p className='text-1xl font-medium max-w-xl mx-auto my-4'></p>
                    </div>
                    <div>
                        <h3 className='text-fuchsia-500  text-2xl font-semibold'>4. What is Node? How does Node work?</h3>
                        <p className='text-1xl font-medium max-w-xl mx-auto my-4'></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;