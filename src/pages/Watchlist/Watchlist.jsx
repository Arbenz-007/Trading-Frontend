import React, { useEffect } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { addItemToWatchlist, getUserWatchlist } from "@/Store/Watchlist/Action";
import { store } from "@/Store/Store";
import { existInWatchlist } from "@/utils/existInWatchlist";
const Watchlist = () => {
  const dispatch=useDispatch();
  const {watchlist}=useSelector(store=>store);
  useEffect(()=>{
    dispatch(getUserWatchlist(localStorage.getItem("jwt")));
  },[]);
  const handleRemoveFromWatchlist=(id)=>{
    dispatch(addItemToWatchlist({coinId:id,jwt:localStorage.getItem("jwt")}));
  };
  return (
    <div className="p-5 lg:px-20 py-10">
      <h1 className="font-bold text-3xl pb-5">Watchlist</h1>
      <Table className='border'>
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right text-red-400">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {watchlist?.items.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <Avatar className="-z-50">
                    <AvatarImage src={item.image} />
                  </Avatar>
                  <span>{item.name}</span>
                </div>
              </TableCell>
              <TableCell>{item.symbol.toUpperCase()}</TableCell>
              <TableCell>{item.total_volume}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>{item.price_change_percentage_24h}</TableCell>
              <TableCell className="text-right">${item.current_price}</TableCell>
              <TableCell className="text-right">
                <Button variant='ghost' onClick={()=>handleRemoveFromWatchlist(item.id)} size='icon' className='h-10 w-10'>
                  <RxBookmarkFilled className="w-6 h-6"/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Watchlist;
