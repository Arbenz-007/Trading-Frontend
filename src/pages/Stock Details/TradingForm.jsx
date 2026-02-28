import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { DotIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { getUserWallet } from "@/Store/Wallet/Action";
import { getAssetDetails } from "@/Store/Asset/Action";
import { payOrder } from "@/Store/Order/Action";

const TradingForm = () => {
  const [orderType, setOrderType] = useState("BUY");
  const [amount, setAmount] = useState(""); // ✅ fixed leading zero issue
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const { coin, wallet, asset } = useSelector((store) => store);

  const handleChange = (e) => {
    const value = e.target.value;

    setAmount(value);

    const price = coin?.coinDetails?.market_data?.current_price?.usd;

    if (price && Number(value) > 0) {
      const vol = calculateBuyCost(Number(value), price);
      setQuantity(vol);
    } else {
      setQuantity(0);
    }
  };

  const calculateBuyCost = (amt, price) => {
    let vol = amt / price;
    let decimalplaces = Math.max(2, price.toString().split(".")[0].length);
    return Number(vol.toFixed(decimalplaces));
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (coin?.coinDetails?.id && token) {
      dispatch(getUserWallet(token));

      dispatch(
        getAssetDetails({
          coinId: coin.coinDetails.id,
          jwt: token,
        }),
      );
    }
  }, [coin?.coinDetails?.id]);
  const handleBuyCrpto = () => {
    dispatch(
      payOrder({
        jwt: localStorage.getItem("jwt"),
        amount,
        orderData: {
          coinId: coin.coinDetails.id,
          quantity,
          orderType,
        },
      }),
    );
  };
  return (
    <div className="space-y-10 p-5">
      <div>
        <div className="flex gap-4 items-center justify-between">
          <Input
            className="py-7 focus:outline-none"
            placeholder="Enter Amount ..."
            type="number"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
          <div>
            <p className="border text-2xl flex justify-center items-center w-36 rounded-md">
              {quantity}
            </p>
          </div>
        </div>

        {false && (
          <h1 className="text-red-600 text-center pt-4">
            Insufficient wallet balance to buy
          </h1>
        )}
      </div>

      <div className="flex gap-5 items-center">
        <div>
          <Avatar>
            <AvatarImage src={coin?.coinDetails?.image?.large} />
          </Avatar>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <p>{coin?.coinDetails?.symbol?.toUpperCase()}</p>
            <DotIcon className="text-gray-400" />
            <p className="text-gray-400">{coin?.coinDetails?.name}</p>
          </div>

          <div className="flex items-end gap-2">
            <p className="text-xl font-bold">
              ${coin?.coinDetails?.market_data?.current_price?.usd}
            </p>

            <p className="text-red-600">
              <span>
                {coin?.coinDetails?.market_data?.market_cap_change_24h}
              </span>
              <span>
                (
                {
                  coin?.coinDetails?.market_data
                    ?.market_cap_change_percentage_24h
                }
                %)
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p>Order Type</p>
        <p>Market Order</p>
      </div>

      <div className="flex items-center justify-between">
        <p>{orderType === "BUY" ? "Available Cash" : "Available Quantity"}</p>

        <p>
          {orderType === "BUY"
            ? wallet.userWallet.balance // ✅ corrected balance access
            : asset.assetDetails?.quantity || 0}
        </p>
      </div>

      <div>
        <Button
          onClick={handleBuyCrpto}
          className={`w-full py-6 ${
            orderType === "SELL" ? "bg-red-600 text-white" : ""
          }`}
        >
          {orderType}
        </Button>

        <Button
          variant="links"
          className="w-full mt-5 text-xs"
          onClick={() => setOrderType(orderType === "BUY" ? "SELL" : "BUY")}
        >
          {orderType === "BUY" ? "Or Sell" : "Or Buy"}
        </Button>
      </div>
    </div>
  );
};

export default TradingForm;
