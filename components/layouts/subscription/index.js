import React, { useState } from "react";
import { useAddSubscriptionMutation } from "services/SubscribeService";
import { validateEmail } from "components/utils/ValidateEmail";
import toast from "react-hot-toast";

const Subscription = ({ setLoading }) => {
  const [email, setEmail] = useState("");
  const [addSubscription, isSuccess] = useAddSubscriptionMutation();
  const submit = async () => {
    setLoading(true);
    if (!validateEmail(email)) {
      toast.error("You entered an invalid email");
      setLoading(false);
      return false;
    }
    await addSubscription({ email: email });
    if (isSuccess) {
      toast.success("You have successfully subsribed to our newsletter");
      setEmail("");
      setLoading(false);
      return true;
    } else {
      toast.error("An error occured");
      setLoading(false);
      return false;
    }
  };
  return (
    <div className="w-[100%] h-[309px] bg-[url('/assets/images/subscription.png')] bg-cover text-[#ffffff] flex flex-col gap-5 items-center justify-center">
      <h1 className="text-4xl font-semibold">Subscribe</h1>
      <p className="px-5 text-center">Keep up to date with RCCG The Oasis.</p>
      <div className="flex items-center justify-center relative max400:flex-col max400:gap-5">
        <div className="shadow-[inset_0px_0px_1px_1px_#4A4A4A] h-[40px] w-[200px] amd:w-[300px] px-3 max320:max-w-[200px] rounded-[5px]">
          <input
            type="text"
            className="h-[40px] bg-[transparent] border-0 outline-none w-[100%] rounded-0"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button
          className="subscribe ml-[-4px] max400:ml-[unset] rounded-tr-[5px] rounded-br-[5px] max400:rounded-tl-[5px] max400:rounded-bl-[5px]"
          onClick={submit}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscription;
