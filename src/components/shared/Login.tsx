"use client";
const Login = () => {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden  rounded-lg border-2 bg-white dark:border-zinc-700 dark:bg-zinc-900">
      <div className="w-full flex-col items-center overflow-hidden p-4 sm:p-8">
        {/* signin form */}
        <form className={`h-full duration-300 space-y-3 sm:space-y-5`}>
          <h1 className="mb-3 uppercase sm:mb-5 sm:text-2xl">Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
          />
          <p className="text-end text-sm text-zinc-600 dark:text-zinc-300">
            <a href="#" className="hover:underline">
              forget password?
            </a>
          </p>
          {/* button type will be submit for handling form submission*/}
          <button
            type="button"
            className=" w-full block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
