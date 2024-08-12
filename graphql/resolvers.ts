import { Context } from "@/pages/api/graphql";

// resolvers : read, create, update, delete
export const resolvers = {
  Query: {
    notes: async (parent: any, args: any, context: Context) => {
      return await context.prisma.note.findMany();
    },
    note: async (parent: any, args: any, context: Context) => {
      return await context.prisma.note.findUnique({
        where: {
          id: parseInt(args.id),
        },
      });
    },
  },
  Mutation: {
    addNote: async (parent: any, args: any, context: Context) => {
      return await context.prisma.note.create({
        data: {
          title: args.title,
          body: args.body,
          createdAt: args.createdAt,
        },
      });
    },
    updateNote: async (parent: any, args: any, context: Context) => {
      return await context.prisma.note.update({
        where: {
          id: parseInt(args.id),
        },
        data: {
          title: args.title,
          body: args.body,
          createdAt: args.createdAt,
        },
      });
    },
    deleteNote: async (parent: any, args: any, context: Context) => {
      return await context.prisma.note.delete({
        where: {
          id: parseInt(args.id),
        },
      });
    },
  },
};
