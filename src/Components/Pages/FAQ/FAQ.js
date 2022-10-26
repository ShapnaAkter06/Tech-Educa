import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section>
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="mb-12 font-bold leading-none text-center text-4xl text-pink-700">Frequently Asked Questions</h2>
                    <div className="divide-y divide-gray-700">
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-bold md:col-span-5 text-blue-800">Why should you learn web development?</h3>
                            <p className="md:pl-0 md:col-span-7">Web development has a number of pros: High earning potential, opportunity for growth, and flexibility are usually top of mind for most who get into the industry. Some of the challenges for people who pursue web development is the competitive nature of the job market.</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-bold md:col-span-5 text-blue-800">What programming languages should you learn for web development?</h3>
                            <p className="md:pl-0 md:col-span-7">There are a lot of options out there for web development, so it can be hard to determine what languages you should try to pick up. There are a few languages that will almost always be relevant for web development, like HTML and CSS. However, your specific situation will determine the languages you learn best. For instance, maybe you are interested in building an app using the current popular framework (e.g. React, Backbone). If that's the case, you'll want to learn Javascript and possibly the framework language itself. If you are interested in web development in general, you should consider learning Javascript, HTML, and CSS. These three languages are the building blocks of the web and are used in almost every website.</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-bold md:col-span-5 text-blue-800">Is web development course easy?</h3>
                            <p className="md:pl-0 md:col-span-7">While learning the foundational skills to become a Web Developer is relatively straightforward, becoming a good Web Developer can be more challenging, requiring ongoing learning and effort over years.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;