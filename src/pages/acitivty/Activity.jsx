// import React, { useEffect } from "react";
// import bitcoin from "@/assets/bitcoin.png";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { RxBookmarkFilled } from "react-icons/rx";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrdersForUser } from "@/Store/Order/Action";
// import { store } from "@/Store/Store";
// const Activity = () => {
//   const dispatch=useDispatch();
//   const {order}=useSelector(store=>store);

//   useEffect(()=>{
//     dispatch(getAllOrdersForUser({jwt:localStorage.getItem("jwt")}))
//   },[])
//   return (
//     <div className="p-5 lg:px-20 py-10">
//       <h1 className="font-bold text-3xl pb-5">Activity</h1>
//       <Table className="border">
//         <TableHeader>
//           <TableRow>
//             <TableHead className="py-5">Date & Time</TableHead>
//             <TableHead>Trading Pair</TableHead>
//             <TableHead>Buy Price</TableHead>
//             <TableHead>Sell Price</TableHead>
//             <TableHead>Order Type</TableHead>
//             <TableHead className="text-right">Profit/Loss</TableHead>
//             <TableHead className="text-right">Value</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {order.orders.map((item, index) => (
//             <TableRow key={index}>
//               <TableCell>
//                 <p>{item.
// timeStamp
// }</p>
//                 {/* <p className="text-gray-400">12:45:20</p> */}
//               </TableCell>
//               <TableCell className="font-medium">
//                 <div className="flex items-center gap-2">
//                   <Avatar className="-z-50">
//                     <AvatarImage src={item.orderItem.coin.image} />
//                   </Avatar>
//                   <span>{item.orderItem.coin.name}</span>
//                 </div>
//               </TableCell>
//               <TableCell>{item.orderItem.buyPrice}</TableCell>
//               <TableCell>{item.orderItem.coin.current_price}</TableCell>
//               <TableCell>{item.orderType}</TableCell>
//               <TableCell className="text-right">$67409</TableCell>
//               <TableCell className="text-right">
//                 <Button
//                   variant="ghost"
//                   onClick={() => handleRemoveFromWatchlist(item.id)}
//                   size="icon"
//                   className="h-10 w-10"
//                 >
//                   <RxBookmarkFilled className="w-6 h-6" />
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default Activity;
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RxBookmarkFilled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersForUser } from "@/Store/Order/Action";

const Activity = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getAllOrdersForUser({ jwt: localStorage.getItem("jwt") }));
  }, []);

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
          {order?.orders?.map((item, index) => {
            const quantity = item.orderItem.quantity;
            const buyPrice = item.orderItem.buyPrice;
            const sellPrice = item.orderItem.sellPrice;

            const profitLoss =
              item.orderType === "SELL"
                ? ((sellPrice - buyPrice) * quantity).toFixed(2)
                : "-";

            return (
              <TableRow key={index}>
                <TableCell>
                  <p>{new Date(item.timeStamp).toLocaleString()}</p>
                </TableCell>

                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="-z-50">
                      <AvatarImage src={item.orderItem.coin.image} />
                    </Avatar>
                    <span>{item.orderItem.coin.name}</span>
                  </div>
                </TableCell>

                <TableCell>
                  {item.orderType === "BUY" ? buyPrice : buyPrice}
                </TableCell>

                <TableCell>
                  {item.orderType === "SELL" ? sellPrice : "-"}
                </TableCell>

                <TableCell
                  className={
                    item.orderType === "BUY"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {item.orderType}
                </TableCell>

                <TableCell
                  className={`text-right ${
                    item.orderType === "SELL"
                      ? profitLoss > 0
                        ? "text-green-600"
                        : "text-red-600"
                      : ""
                  }`}
                >
                  {profitLoss !== "-" ? `$${profitLoss}` : "-"}
                </TableCell>

                <TableCell className="text-right">
                  ${item.price}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;