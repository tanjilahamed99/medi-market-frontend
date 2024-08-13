const { default: Image } = require("next/image");

function AuthHeader({ content }) {
  return (
    <div className="flex items-center gap-x-2">
      <Image src="/left-arrow.svg" alt="Left Arrow" width={16} height={20} />
      <h2 className=" font-bold text-lg">{content}</h2>
    </div>
  );
}

export default AuthHeader;
