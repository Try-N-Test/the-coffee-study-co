import * as z from "zod";

export const ThreadValidation = z.object({
  communityName: z
    .string()
    .nonempty({ message: "Community Name is required." })
    .min(2, {
      message: "Community Name must be at least 2 characters.",
    })
    .max(50, {
      message: "Community Name can not be at least 2 characters.",
    }),
  communityDescription: z
    .string()
    .nonempty({ message: "Community Description is required." })
    .min(50, {
      message: "Community Description must be at least 50 characters.",
    })
    .max(500, {
      message: "Community Description can not be at least 50 characters.",
    }),
  accountId: z.string(),
});
