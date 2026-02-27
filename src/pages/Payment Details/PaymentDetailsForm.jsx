import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { addPaymentDetails } from "@/Store/Withdrawal/Action";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const PaymentDetailsForm = () => {
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    accountHolderName: "",
    accountNumber: "",
    ifsc: "",
    bankName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(addPaymentDetails({paymentDetails:formData,jwt:localStorage.getItem("jwt")}));
    console.log(formData);
  };

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Account Holder Name</h1>
        <Input
          name="accountHolderName"
          onChange={handleChange}
          value={formData.accountHolderName}
          className="py-7"
          placeholder="John Doe"
        />
      </div>

      <div>
        <h1 className="pb-1">Account Number</h1>
        <Input
          name="accountNumber"
          onChange={handleChange}
          value={formData.accountNumber}
          className="py-7"
          placeholder="123456789012"
          type="number"
        />
      </div>

      <div>
        <h1 className="pb-1">IFSC Code</h1>
        <Input
          name="ifsc"
          onChange={handleChange}
          value={formData.ifsc}
          className="py-7"
          placeholder="SBIN0001234"
        />
      </div>

      <div>
        <h1 className="pb-1">Bank Name</h1>
        <Input
          name="bankName"
          onChange={handleChange}
          value={formData.bankName}
          className="py-7"
          placeholder="State Bank of India"
        />
      </div>

      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7 text-xl">
          Submit
        </Button>
      </DialogClose>
    </div>
  );
};

export default PaymentDetailsForm;
