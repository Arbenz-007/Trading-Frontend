import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { paymentHandler } from "@/Store/Wallet/Action";
import React, { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
const TopupFrom = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("RAZORPAY");
  const dispatch = useDispatch();

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleSubmit = () => {
    console.log(amount, paymentMethod);
    dispatch(
      paymentHandler({
        jwt: localStorage.getItem("jwt"),
        paymentMethod,
        amount,
      }),
    );
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter amount</h1>
        <Input
          type="number"
          onChange={handleChange}
          value={amount}
          className="py-7 text-lg"
          placeholder="$9999"
        />
      </div>
      <div>
        <h1 className="pb-1">Select payment method</h1>
        <RadioGroup
          onValueChange={(value) => handlePaymentMethodChange(value)}
          className="flex"
          defaultValue="RazorPay"
        >
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={FaRegDotCircle}
              className="h-9 w-9"
              value="RazorPay"
              id="r1"
            />
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img
                  className="h-10"
                  src="https://5.imimg.com/data5/SELLER/Default/2023/9/348603242/KE/OR/XP/29083784/razorpay-software-500x500.png"
                />
              </div>
            </Label>
          </div>
          {/* <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
                <RadioGroupItem
                icon={FaRegDotCircle}
                className="h-9 w-9"
                value="Stripe"
                id="r2"
                />
                <Label htmlFor="r2">
                    <div className="bg-white rounded-md px-5 py-2 w-32">
                        <img className="h-10" src="https://5.imimg.com/data5/SELLER/Default/2023/9/348603242/KE/OR/XP/29083784/razorpay-software-500x500.png"/>
                    </div>
                </Label>
                
            </div> */}
        </RadioGroup>
      </div>
      <DialogClose asChild className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7">
          Submit
        </Button>
      </DialogClose>
    </div>
  );
};

export default TopupFrom;
