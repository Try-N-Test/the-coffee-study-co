"use client";

import { formatThreadCount } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import upvote from "@/assets/Elements/upvote.svg";
import itsupvoted from "@/assets/Elements/upvoted.svg";
import downvote from "@/assets/Elements/downvote.svg";
import itsdownvoted from "@/assets/Elements/downvoted.svg";
interface Props {
  type?: string;
  itemId?: string;
  userId?: string;
  upvotes?: number;
  downvotes?: number;
  hasupVoted?: boolean;
  hasdownVoted?: boolean;
  hasSaved?: boolean;
}
const Votes = ({
  type,
  itemId,
  userId,
  upvotes,
  downvotes,
  hasupVoted,
  hasdownVoted,
  hasSaved,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);
  const handleVote = async (action: string) => {
    // if (!userId) {
    //   return;
    // }
    if (action === "upvote") {
      setUpVoted(true);
      if (downVoted) {
        setDownVoted(false);
      }
      if (type === "Article") {
        // handle Updvotes for article here
      } else if (type === "Notes") {
        // handle Updvotes for notes here
      } else if (type === "Videos") {
        // handle Updvotes for videos here
      }
      return;
      // TODO : show a toast
    }
    if (action === "downvote") {
      setDownVoted(true);
      if (upVoted) {
        setUpVoted(false);
      }
      if (type === "Article") {
        // handle downvote for article here
      } else if (type === "Notes") {
        // handle downvote for notes here
      } else if (type === "Videos") {
        // handle downvote for videos here
      }
      // TODO : show a toast
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="flex justify-between gap-2 rounded-xl bg-white px-4 py-2.5 ">
      <Image
        src={upVoted ? itsupvoted : upvote}
        alt="Upvote"
        width={18}
        height={18}
        className="cursor-pointer "
        onClick={() => handleVote("upvote")}
      />

      <p className="font-secondary text-base font-bold">457</p>

      <Image
        src={downVoted ? itsdownvoted : downvote}
        alt="downvote"
        width={18}
        height={18}
        className="cursor-pointer"
        onClick={() => handleVote("downvote")}
      />
    </div>
  );
};

export default Votes;
