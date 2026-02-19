import React from "react";
import bitcoin from "@/assets/bitcoin.png";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RxBookmarkFilled } from "react-icons/rx";
const Activity = () => {
  return (
    <div className="p-5 lg:px-20 py-10">
      <h1 className="font-bold text-3xl pb-5">Activity</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date & Time</TableHead>
            <TableHead>Trading Pair</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Sell Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead className="text-right">Profit/Loss</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>2024/05/25</p>
                <p className="text-gray-400">12:45:20</p>
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <Avatar className="-z-50">
                    <AvatarImage src={bitcoin} />
                  </Avatar>
                  <span>Bitcoin</span>
                </div>
              </TableCell>
              <TableCell>100004.2</TableCell>
              <TableCell>1347029332173</TableCell>
              <TableCell>-0.72534</TableCell>
              <TableCell className="text-right">$67409</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  onClick={() => handleRemoveFromWatchlist(item.id)}
                  size="icon"
                  className="h-10 w-10"
                >
                  <RxBookmarkFilled className="w-6 h-6" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
