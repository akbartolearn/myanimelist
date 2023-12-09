-- CreateTable
CREATE TABLE "tb_collection" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_image" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,

    CONSTRAINT "tb_collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_comment" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,

    CONSTRAINT "tb_comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_collection_user_email_anime_mal_id_key" ON "tb_collection"("user_email", "anime_mal_id");
