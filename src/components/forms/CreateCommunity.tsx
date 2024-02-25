"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CommunityValidation } from "@/lib/validations/community";

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
import { usePathname, useRouter } from "next/navigation";
import { createCommunity } from "@/lib/actions/community.actions";

const CreateCommunity = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(CommunityValidation),
    defaultValues: {
      name: "",
      description: "",
      createdBy: userId,
    },
  });

  const onSubmit = async (values: z.infer<typeof CommunityValidation>) => {
    await createCommunity(values.name, values.description, userId, pathname);

    router.push("/");
  };

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
              name="name"
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
              name="description"
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

export default CreateCommunity;
