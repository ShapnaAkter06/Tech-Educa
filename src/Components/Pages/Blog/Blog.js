import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 font-bold leading-none text-center text-4xl text-pink-700">Question Answer</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">1. What is `cors`?</h3>
                            <p className="mt-1 dark:text-gray-400">Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">2. Why are you using `firebase`? What other options do you have to implement authentication?</h3>
                            <p className="mt-1 dark:text-gray-400">Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices. <br /> The options are - 
                                STYTCH.
                                Ory.
                                Supabase.
                                Okta.
                                PingIdentity.
                                Keycloak.
                                Frontegg.
                                Authress.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">3. How does the private route work</h3>
                            <p className="mt-1 dark:text-gray-400">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">4. What is Node? How does Node work?</h3>
                            <p className="mt-1 dark:text-gray-400">Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;