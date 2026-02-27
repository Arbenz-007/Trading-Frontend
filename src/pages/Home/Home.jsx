import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import bitcoin from "@/assets/bitcoin.png";
import { AvatarImage } from "@radix-ui/react-avatar";
import { DotIcon } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { getCoinList, getTop50CoinList } from "@/Store/Coin/Action";
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
  const [page, setPage] = useState(1); // ✅ added page state
  const dispatch = useDispatch();

  const { coin } = useSelector((store) => store);

  const handleCategory = (value) => {
    setCategory(value);
    setPage(1); // ✅ reset page when category changes
  };

  // ✅ Fetch based on page & category
  useEffect(() => {
    if (category === "all") {
      dispatch(getCoinList(page));
    } else {
      dispatch(getTop50CoinList());
    }
  }, [page, category, dispatch]);

  let filteredCoins = [];

  if (category === "all") {
    filteredCoins = coin.coinList;
  } else if (category === "Top50" || category === "TopGainers") {
    filteredCoins = coin.top50;
  } else if (category === "TopLosers") {
    filteredCoins = [...coin.top50].reverse();
  }

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category === "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>

            <Button
              onClick={() => handleCategory("Top50")}
              variant={category === "Top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>

            <Button
              onClick={() => handleCategory("TopGainers")}
              variant={category === "TopGainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>

            <Button
              onClick={() => handleCategory("TopLosers")}
              variant={category === "TopLosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>

          <AssetTable coin={filteredCoins} category={category} />

          {/* ✅ Pagination only for "all" category */}
          {category === "all" && (
            <div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => page > 1 && setPage(page - 1)}
                    />
                  </PaginationItem>

                  {[1, 2, 3].map((p) => (
                    <PaginationItem key={p}>
                      <PaginationLink
                        isActive={page === p}
                        onClick={() => setPage(p)}
                      >
                        {p}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setPage(page + 1)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
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
              <div className="flex items-center gap-2">
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
    </div>
  );
};

export default Home;