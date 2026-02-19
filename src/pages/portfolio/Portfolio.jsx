import React from 'react'
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
const Portfolio = () => {
  return (
    <div className='p-5 lg:px-20 py-10'>
        <h1 className='font-bold text-3xl pb-5'>Portfolio</h1>
        <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Assets</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Change(%)</TableHead>
                    <TableHead className="text-right">Volume</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    {[1,1,1,1,1,1,1,1,1].map((item,index)=><TableRow key={index}>
                    <TableCell className="font-medium">
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
  )
}

export default Portfolio;