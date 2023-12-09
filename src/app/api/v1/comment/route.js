import prisma from "@/libs/prisma";

export const POST = async (request) => {
  const data = await request.json();

  const createCommment = await prisma.tb_comment.create({ data });

  if (!createCommment) {
    return Response.json({ status: 500, isCreated: false });
  } else {
    return Response.json({ status: 200, isCreated: true });
  }
};
