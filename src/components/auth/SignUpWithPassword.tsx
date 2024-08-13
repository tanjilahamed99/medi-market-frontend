import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import RememberMe from "./RememberMe";

function SignUpWithPassword({
  email,
  handleSubmit,
  handleChange,
  loading,
  error,
  isForgot,
}: any) {
  return (
    <section className="flex  flex-col gap-6">
      <AuthHeader content="Sign up" />
      <form onSubmit={handleSubmit} className="flex  flex-col gap-y-4">
        <div className="flex  flex-col gap-y-4">
          <AuthInput
            onChange={handleChange}
            name="password1"
            id="password1"
            type="password"
            label="Enter New Password"
            placeholder="Enter New Password..."
            readOnly={loading}
          />

          <div className="flex flex-col gap-y-2">
            <AuthInput
              onChange={handleChange}
              name="password2"
              id="password2"
              type="password"
              label="Confirm Password"
              placeholder="Enter Password..."
              readOnly={loading}
            />
            {/* {error?.status && error?.type === "not-matched-pass" && (
              // <ErrorMessage>{error.message}</ErrorMessage>
            )} */}
          </div>
        </div>
        {!isForgot && <RememberMe />}

        {/* <SubmitBtn
          loading={loading}
          loadingTxt={isForgot ? "Changing password" : "Signing up"}
          notLoadingTxt={isForgot ? "Change password" : "Sign Up"}
        /> */}
      </form>
    </section>
  );
}

export default SignUpWithPassword;
