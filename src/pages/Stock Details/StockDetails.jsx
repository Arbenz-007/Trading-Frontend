import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import bitcoin from "@/assets/bitcoin.png";
import { DotIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RxBookmarkFilled } from "react-icons/rx";
import { CiBookmark } from "react-icons/ci";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TradingForm from "./TradingForm";
import StockChart from "../Home/StockChart";
const StockDetails = () => {
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div>
            <Avatar>
              <AvatarImage src={bitcoin} />
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>BTC</p>
              <DotIcon className="text-gray-400" />
              <p className="text-gray-400">Bitcoin</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold">$65554</p>
              <p className="text-red-600">
                <span>-1312443536.457</span>
                <span>(-0.34235325)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Button>
            {true ? (
              <CiBookmark className="h-6 w-6" />
            ) : (
              <RxBookmarkFilled className="h-6 w-6" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">Trade</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do you want to spend?</DialogTitle>
              </DialogHeader>
              <TradingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-14">
        <StockChart />
      </div>
    </div>
  );
};

export default StockDetails;
