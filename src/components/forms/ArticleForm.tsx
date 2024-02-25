"use client";
import React from "react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Textarea } from "../ui/textarea";

const articleFormSchema = z.object({
  articleTitle: z.string().min(2, {
    message: "article title must be at least 2 characters.",
  }),
  articleDescription: z
    .string()
    .min(20, {
      message: "article description must be at least 2 characters.",
    })
    .max(500, {
      message: "article description must be at under 500 characters.",
    }),
});

const ArticleForm = () => {
  const form = useForm<z.infer<typeof articleFormSchema>>({
    resolver: zodResolver(articleFormSchema),
    defaultValues: {
      articleTitle: "",
      articleDescription: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof articleFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="h-screen bg-secondary-3">
        <h1 className="mb-5 pt-16 text-center font-primary text-5xl font-bold">
          Write an Article
        </h1>
        <div className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="m-auto  w-3/5"
            >
              <FormField
                control={form.control}
                name="articleTitle"
                render={({ field }) => (
                  <FormItem className="gap-y-4">
                    <FormLabel className="font-secondary text-xl font-semibold">
                      Article Title
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Article Title" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your Article Title.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="articleDescription"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="font-secondary text-xl font-semibold">
                      Article Description
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="Article Description" {...field} />
                    </FormControl>
                    <FormDescription>
                      length of article must be under 500 letters.
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
    </>
  );
};

export default ArticleForm;
