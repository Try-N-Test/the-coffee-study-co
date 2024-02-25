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

const videoFormSchema = z.object({
  videoTitle: z.string().min(2, {
    message: "video title must be at least 2 characters.",
  }),
  videoLink: z.string().url(),
  videoDescription: z
    .string()
    .min(20, {
      message: "video description must be at least 2 characters.",
    })
    .max(200, {
      message: "video description must be at under 500 characters.",
    }),
});

const VideoForm = () => {
  const form = useForm<z.infer<typeof videoFormSchema>>({
    resolver: zodResolver(videoFormSchema),
    defaultValues: {
      videoTitle: "",
      videoLink: "",
      videoDescription: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof videoFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="h-screen bg-secondary-3">
        <h1 className="mb-5 pt-16 text-center font-primary text-5xl font-bold">
          Share a video
        </h1>
        <div className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="m-auto  w-3/5"
            >
              <FormField
                control={form.control}
                name="videoTitle"
                render={({ field }) => (
                  <FormItem className="gap-y-4">
                    <FormLabel className="font-secondary text-xl font-semibold">
                      Video Title
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Video Title" {...field} />
                    </FormControl>
                    <FormDescription>This is your video Title.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="videoLink"
                render={({ field }) => (
                  <FormItem className="gap-y-4">
                    <FormLabel className="font-secondary text-xl font-semibold">
                      Video Link
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Video Title" {...field} />
                    </FormControl>
                    <FormDescription>
                      Share youtube videos only .
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="videoDescription"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="font-secondary text-xl font-semibold">
                      Video Description
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="Video Description" {...field} />
                    </FormControl>
                    <FormDescription>
                      length of video description must be under 200 letters.
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

export default VideoForm;
