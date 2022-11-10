import React from "react";

const Blogs = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
              <h3 className="text-3xl font-semibold">ASG-11</h3>
              <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                Simple Question Answere
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">Difference between SQL and NoSQL </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">QS 1</time>
                <p className="mt-3">
                  SQL is the programming language used to interface with relational databases. (Relational databases
                  model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs
                  that are non-relational and generally do not use SQL.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">AWhat is JWT, and how does it work?</h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">QS 2</time>
                <p className="mt-3">
                  JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between
                  parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public
                  key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified
                  by other parties involved.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  What is the difference between javascript and Node JS?
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">QS 3</time>
                <p className="mt-3">
                  JavaScript is a simple programming language that can be used with any browser that has the JavaScript
                  Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the
                  JavaScript programming language.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  How does Node JS handle multiple requests at the same time?
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">QS 4</time>
                <p className="mt-3">
                  Node's main JavaScript thread uses an event loop . When multiple requests are made, the first is
                  processed while the rest are blocked (until the first is complete). Each request is processed one loop
                  at a time until they're all processed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
