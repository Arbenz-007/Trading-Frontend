import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import bitcoin from "@/assets/bitcoin.png";
import { AvatarImage } from "@radix-ui/react-avatar";
import { CrosshairIcon, CrossIcon, DotIcon, MessageCircle } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { getCoinList, getTop50CoinList } from "@/Store/Coin/Action";
import { store } from "@/Store/Store";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const Home = () => {
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();

  const { coin } = useSelector((store) => store);
  const handleCategory = (value) => {
    setCategory(value);
  };

  useEffect(() => {
    dispatch(getCoinList(1));
  }, []);

  useEffect(() => {
    dispatch(getTop50CoinList());
  }, [category]);
  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category == "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory("Top50")}
              variant={category == "Top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>
            <Button
              onClick={() => handleCategory("TopGainers")}
              variant={category == "TopGainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory("TopLosers")}
              variant={category == "TopLosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>
          <AssetTable
            coin={category == "all" ? coin.coinList : coin.top50}
            category={category}
          />
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart coinId={"bitcoin"} />

          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage src={bitcoin} />
              </Avatar>
            </div>
            <div>
              <div className="flex items-centergap-2">
                <p>BTC</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Bitcoin</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">5464</p>
                <p className="text-red-300">
                  <span>-13434564675454</span>
                  <span>(-0.23456788)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
        <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900">
          <div className="flex justify-between items-center border-b px-6 h-[12%]">
            <p>Chat Bot </p>
            <Button variant="ghost" size="icon">
              <CrossIcon />
            </Button>
          </div>
          <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
            <div className="self-start pb-5 w-auto">
              <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                <p>hi, Raam Arora</p>
                <p>you can ask crypto realted question</p>
                <p>like , price , market cap extra</p>
              </div>
            </div>
            {[1, 1, 1, 1].map((item, i) => (
              <div
                key={i}
                className={`${i%2==0 ? "self-start" : "self-end"} pb-5 w-auto`}
              >
                <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                  <p>prompt who are you</p>
                </div>
                <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                  <p>ans hi Ram Arora</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="realtive w-[10rem] cursor-pointer group">
          <Button className="w-full h-[3rem] gap-2 items-center">
            <MessageCircle
              size={30}
              className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]"
            />
            <span className="text-xl">Chat Bot</span>
          </Button>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
