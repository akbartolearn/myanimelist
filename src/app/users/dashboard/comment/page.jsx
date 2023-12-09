import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await authUserSession();
  const comments = await prisma.tb_comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 w-full px-4">
      <Header title="My Comment" />
      <div className="grid grid-cols-1 py-2 gap-4">
        {comments.map((comment) => {
          return (
            <Link
              key={comment.id}
              href={`/anime/${comment.anime_mal_id}`}
              className="bg-color-primary text-color-dark p-4"
            >
              <p className="text-sm">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
      <div className="text-2xl text-color-primary flex justify-center items-center h-64">
        <h1>Not Found Comment</h1>
      </div>
    </section>
  );
};

export default page;
