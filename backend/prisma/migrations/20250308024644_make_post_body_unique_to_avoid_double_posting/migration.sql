/*
  Warnings:

  - A unique constraint covering the columns `[body]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Post_body_key" ON "Post"("body");
