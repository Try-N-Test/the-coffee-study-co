"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CommunityNavbar from "@/components/shared/CommunityNavbar";

const Page = () => {
  const formSchema = z.object({
    communityName: z
      .string()
      .min(2, {
        message: "Community Name must be at least 2 characters.",
      })
      .max(50, {
        message: "Community Name can not be at least 2 characters.",
      }),
    communityDescription: z
      .string()
      .min(50, {
        message: "Community Description must be at least 50 characters.",
      })
      .max(500, {
        message: "Community Description can not be at least 50 characters.",
      }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      communityName: "",
      communityDescription: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="h-screen bg-secondary-3">
      <CommunityNavbar />

      <h1 className="mb-12 mt-16 text-center font-primary text-5xl font-bold">
        Create a new Community
      </h1>
      <div className="">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="m-auto  w-3/5"
          >
            <FormField
              control={form.control}
              name="communityName"
              render={({ field }) => (
                <FormItem className="gap-y-4">
                  <FormLabel className="font-secondary text-xl font-semibold">
                    Community Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Community Name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your community display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="communityDescription"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="font-secondary text-xl font-semibold">
                    Community Description
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Community Description" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your community description name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-6 bg-secondary-6 hover:bg-secondary-5"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
