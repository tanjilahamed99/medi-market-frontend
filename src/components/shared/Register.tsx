const Register = () => {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden  rounded-lg border-2 bg-white dark:border-zinc-700 dark:bg-zinc-900">
      <div className="w-full flex-col items-center overflow-hidden p-4 sm:p-8">
        {/* sign up form  */}
        <form className="h-full duration-300  space-y-3 sm:space-y-5">
          <h1 className="mb-6 uppercase backdrop-blur-sm sm:text-2xl">
            Sign Up
          </h1>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="block w-full rounded-md border p-2.5 outline-none dark:border-zinc-700 focus:ring-1 ring-zinc-700"
            />
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
          </div>
          {/* button type will be submit for handling form submission*/}
          <button
            type="button"
            className="w-full block rounded-md border px-5 py-2 uppercase shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
