import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { BiDislike } from "react-icons/bi";
import { Textarea } from "./ui/textarea";
import { useContext, useState } from "react";
import { StoreContext } from "../context/ChatContext";

export function FeedbackDialog({ chat, index }) {
    const [feedback, setFeedback] = useState(chat.feedback || "");
    const { updateFeedback } = useContext(StoreContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        updateFeedback(index, feedback);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="ml-[-8px] hover:cursor-pointer h-full flex items-center">
                    <BiDislike className="size-5" />
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Provide Additional Feedback</DialogTitle>
                    </DialogHeader>

                    <Textarea
                        placeholder="enter the feedback"
                        className="h-28"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />

                    <DialogFooter>
                        <Button type="submit" className="bg-[#D7C7F4] text-black">
                            Submit
                        </Button>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
