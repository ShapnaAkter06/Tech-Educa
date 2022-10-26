import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div className=''>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                                <h3 className="text-3xl font-semibold">Tech Educa</h3>
                                <span className="text-sm font-semibold tracking-wider dark:text-gray-300">Build your Career</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Why should you learn web development? </h3>
                                    <p className="mt-3">Web development has a number of pros: High earning potential, opportunity for growth, and flexibility are usually top of mind for most who get into the industry. Some of the challenges for people who pursue web development is the competitive nature of the job market.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">What programming languages should you learn for web development?</h3>
                                    <p className="mt-3">There are a lot of options out there for web development, so it can be hard to determine what languages you should try to pick up. There are a few languages that will almost always be relevant for web development, like HTML and CSS. However, your specific situation will determine the languages you learn best. For instance, maybe you are interested in building an app using the current popular framework (e.g. React, Backbone). If that's the case, you'll want to learn Javascript and possibly the framework language itself. If you are interested in web development in general, you should consider learning Javascript, HTML, and CSS. These three languages are the building blocks of the web and are used in almost every website.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Is web development course easy?</h3>
                                    <p className="mt-3">While learning the foundational skills to become a Web Developer is relatively straightforward, becoming a good Web Developer can be more challenging, requiring ongoing learning and effort over years.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;