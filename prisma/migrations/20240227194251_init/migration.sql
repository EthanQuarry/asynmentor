-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "email" TEXT,
    "profile_img" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OauthAccount" (
    "provider_id" TEXT NOT NULL,
    "provider_user_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "OauthAccount_pkey" PRIMARY KEY ("provider_user_id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "fullName" TEXT NOT NULL,
    "questionThumbnail" TEXT,
    "markingSchemeThumbnail" TEXT,
    "year" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("fullName")
);

-- CreateTable
CREATE TABLE "QuestionSections" (
    "imageUrl" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "aspectRatio" DOUBLE PRECISION NOT NULL,
    "index" INTEGER NOT NULL,

    CONSTRAINT "QuestionSections_pkey" PRIMARY KEY ("imageUrl")
);

-- CreateTable
CREATE TABLE "MarkingSchemeSections" (
    "imageUrl" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "aspectRatio" DOUBLE PRECISION NOT NULL,
    "index" INTEGER NOT NULL,

    CONSTRAINT "MarkingSchemeSections_pkey" PRIMARY KEY ("imageUrl")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Questions_fullName_key" ON "Questions"("fullName");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionSections_imageUrl_key" ON "QuestionSections"("imageUrl");

-- CreateIndex
CREATE UNIQUE INDEX "MarkingSchemeSections_imageUrl_key" ON "MarkingSchemeSections"("imageUrl");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OauthAccount" ADD CONSTRAINT "OauthAccount_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionSections" ADD CONSTRAINT "QuestionSections_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Questions"("fullName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarkingSchemeSections" ADD CONSTRAINT "MarkingSchemeSections_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Questions"("fullName") ON DELETE RESTRICT ON UPDATE CASCADE;
