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
const Withdrawal = () => {
  return (
     <div className="p-5 lg:px-20 py-10">
          <h1 className="font-bold text-3xl pb-5">Withdawal</h1>
          <Table className="border">
            <TableHeader>
              <TableRow>
                <TableHead className="py-5">Date</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Staus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 1, 1, 1, 1].map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <p>June 2, 2025 at 11:43</p>
                  </TableCell>
                  <TableCell>Bank</TableCell>
                  <TableCell className="">$67409</TableCell>
                  <TableCell className="text-right">Success
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
  )
}

export default Withdrawal;