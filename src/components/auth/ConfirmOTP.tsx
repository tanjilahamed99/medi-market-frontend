
import ErrorMessage from "../shared/ErrorMessage";
import SubmitBtn from "../shared/buttons/SubmitBtn";
import AuthInput from "./AuthInput";

const ConfirmOTP = ({
  confirmingOTP,
  sendingOTP,
  handleValidateOTP,
  handleSendOTP,
  handleChange,
  error,
  isForgot,
}: any) => {
  return (
    <section className="flex  col-span-2  flex-col gap-6">
      <h4 className="text-sm">OTP is being sent to you on 9112545455</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          !sendingOTP && handleValidateOTP(e);
        }}
        className="flex  flex-col gap-y-4"
      >
        <div className="flex flex-col gap-y-1">
          <div className="flex  flex-col gap-y-2">
            <AuthInput
              onChange={handleChange}
              name="otp"
              id="email/otp"
              label="Enter OTP"
              placeholder="Enter OTP"
              readOnly={confirmingOTP}
            />
            {error?.status && (
              <ErrorMessage>Invalid OTP. Please try again</ErrorMessage>
            )}
          </div>
          {!isForgot && (
            <p className="text-xs text-label">
              By Continuing you agree to our
              <span className="underline">Terms of use</span>
            </p>
          )}
        </div>
        {/* Resend  */}
        <section className="  flex  justify-center items-center">
          <div
            className="w-max flex flex-col gap-y-2 justify-center items-center"
            onClick={(e) => {
              !sendingOTP && handleSendOTP(e);
            }}
          >
            <h3 className="text-green cursor-pointer text-sm">
              {sendingOTP ? "Sending" : "Resend"}
            </h3>
          </div>
        </section>
        <SubmitBtn
          loading={confirmingOTP}
          loadingTxt="Confirming"
          notLoadingTxt="Confirm OTP"
        />
      </form>
    </section>
  );
};

export default ConfirmOTP;
