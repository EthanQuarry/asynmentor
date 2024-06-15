-- AlterTable
ALTER TABLE "MarkingSchemeSections" ALTER COLUMN "thumbnailUrl" DROP NOT NULL,
ALTER COLUMN "aspectRatio" DROP NOT NULL,
ALTER COLUMN "index" DROP NOT NULL;

-- AlterTable
ALTER TABLE "QuestionSections" ALTER COLUMN "thumbnailUrl" DROP NOT NULL,
ALTER COLUMN "aspectRatio" DROP NOT NULL,
ALTER COLUMN "index" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Questions" ALTER COLUMN "year" DROP NOT NULL;
