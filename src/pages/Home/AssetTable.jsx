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
import { useNavigate } from "react-router-dom";
const AssetTable = () => {

  const navigate=useNavigate();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {[1,1,1,1,1,1,1,1,1].map((item,index)=><TableRow key={index}>
            <TableCell onClick={()=>navigate(`market/bitcoin`)} className="font-medium">
              <div className="flex items-center gap-2">
                <Avatar className='-z-50'>
                  <AvatarImage src={bitcoin} />
                </Avatar>
                <span>Bitcoin</span>
              </div>
            </TableCell>
            <TableCell>BTC</TableCell>
            <TableCell>100004.2</TableCell>
            <TableCell>1347029332173</TableCell>
            <TableCell>-0.72534</TableCell>
            <TableCell className="text-right">$67409</TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssetTable;
