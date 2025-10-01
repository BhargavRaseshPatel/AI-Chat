import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MdMenu } from "react-icons/md";
import ChatHistory from "./ChatHistory";


export function LeftMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden flex justify-center items-center">
        <Button variant="outline"><MdMenu className='size-8 text-[#9785BA] ' /></Button>
      </SheetTrigger>
      <SheetContent side="left">
        {/* <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader> */}
        <ChatHistory />
      </SheetContent>
    </Sheet>
  )
}
