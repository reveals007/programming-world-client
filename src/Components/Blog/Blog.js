import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse m-6">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  bg-slate-600 text-primary-content peer-checked:bg-blue-500	 peer-checked:text-secondary-content">
                    <h1 className='text-3xl font-bold'>What is cors?</h1>
                </div>
                <div className="collapse-content bg-slate-600 text-primary-content peer-checked:bg-slate-600 peer-checked:text-secondary-content">
                    <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
                </div>
            </div>
            <div className="collapse m-6">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  bg-slate-600  text-primary-content peer-checked:bg-blue-500	 peer-checked:text-secondary-content">
                    <h1 className='text-3xl font-bold'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                </div>
                <div className="collapse-content  bg-slate-600  text-primary-content peer-checked:bg-slate-600  peer-checked:text-secondary-content">
                    <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.

                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </p>
                </div>
            </div>
            <div className="collapse m-6">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-600  text-primary-content peer-checked:bg-blue-500	 peer-checked:text-secondary-content">
                    <h1 className='text-3xl font-bold'>How does the private route work?</h1>
                </div>
                <div className="collapse-content bg-slate-600  text-primary-content peer-checked:bg-slate-600  peer-checked:text-secondary-content">
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
            </div>
            <div className="collapse m-6">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-600  text-primary-content peer-checked:bg-blue-500	 peer-checked:text-secondary-content">
                    <h1 className='text-3xl font-bold'>  What is Node? How does Node work?  </h1>
                </div>
                <div className="collapse-content bg-slate-600  text-primary-content peer-checked:bg-slate-600  peer-checked:text-secondary-content">
                    <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;