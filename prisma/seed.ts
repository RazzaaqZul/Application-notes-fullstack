import { FormattedDate } from "../lib/formatedDate";
import prisma from "./db";

async function main() {
  await prisma.note.createMany({
    data: [
      {
        title: "Shopping List",
        body: "Milk, Bread, Eggs",
        createdAt: FormattedDate(),
      },
      {
        title: "Meeting Notes",
        body: "Discuss project roadmap. Set deadlines for milestones. Assign tasks to team members.",
        createdAt: FormattedDate(),
      },
      {
        title: "Workout Plan",
        body: "Monday: Cardio. Tuesday: Strength Training. Wednesday: Yoga. Thursday: Rest. Friday: Cardio. Saturday: Strength Training. Sunday: Rest.",
        createdAt: FormattedDate(),
      },
      {
        title: "Grocery List",
        body: "Apples, Bananas, Carrots, Chicken, Rice",
        createdAt: FormattedDate(),
      },
      {
        title: "Book Recommendations",
        body: "To Kill a Mockingbird, 1984, The Great Gatsby, Moby Dick, War and Peace",
        createdAt: FormattedDate(),
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
