import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <span className="text-7xl font-bold">Let&apos;s Talk</span>
      <section className="body-font relative text-zinc-400">
        <div className="container px-5">
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="peer w-full rounded border border-zinc-700 bg-zinc-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-zinc-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:bg-zinc-900 focus:ring-1 focus:ring-purple-900"
                    placeholder="Name"
                  />
                  <label className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-purple-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-500">
                    Name
                  </label>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="peer w-full rounded border border-zinc-700 bg-zinc-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-zinc-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:bg-zinc-900 focus:ring-2 focus:ring-purple-900"
                    placeholder="Email"
                  />
                  <label className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-purple-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-500">
                    Email
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    className="peer h-32 w-full resize-none rounded border border-zinc-700 bg-zinc-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-zinc-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-purple-500 focus:bg-zinc-900 focus:ring-1 focus:ring-purple-900"
                    placeholder="Message"
                  ></textarea>
                  <label className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-purple-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-500">
                    Message
                  </label>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="mx-auto w-full text-center items-center justify-center flex rounded border-0 bg-purple-500 py-1 px-8 text-lg text-white hover:bg-purple-600 focus:outline-none">
                  Send
                </button>
              </div>

              <div className="mt-8 w-full border-t border-zinc-800 p-2 pt-8 text-center text-xs">
                <a className="text-purple-40">yanndeukam@gmail.com</a>
                <p className="my-5 leading-normal">
                  49 Smith St. <br />
                  Saint Cloud, MN 56301
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
