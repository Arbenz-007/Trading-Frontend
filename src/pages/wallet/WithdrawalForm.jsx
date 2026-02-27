import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import bank from "@/assets/bank.jpg";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/Store/Store";
import { withdrawalRequest } from "@/Store/Withdrawal/Action";
const WithdrawalForm = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("RazorPay");

  const dispatch = useDispatch();
  const { wallet,withdrawal } = useSelector(store => store);
  const handleSubmit = () => {
    dispatch(withdrawalRequest({amount,jwt:localStorage.getItem("jwt")}));
    console.log(amount, paymentMethod);
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md bg-slate-900 font-bold px-5 py-4">
        <p>Available Balance</p>
        <p>${wallet.userWallet.balance}</p>
      </div>
      <div className="flex flex-col items-center">
        <h1>Enter withdrawal amount</h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            className="withdrawalInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center"
            placeholder="$9999"
          />
        </div>
      </div>
      <div>
        <p className="pb-2">Transfer to </p>
        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <img src={bank} className="h-8 w-8" />
          <div>
            <p className="text-xl font-bold">{withdrawal?.paymentDetails?.bankName}</p>
            <p className="text-xs ">A/C No : {"*".repeat(Math.max(0, (withdrawal?.paymentDetails?.accountNumber?.length || 0) - 4)) + withdrawal?.paymentDetails?.accountNumber?.slice(-4)}</p>
          </div>
        </div>
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7 text-xl">
          Withdraw
        </Button>
      </DialogClose>
    </div>
  );
};

export default WithdrawalForm;
