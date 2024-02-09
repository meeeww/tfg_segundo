"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ArrowRightFromLine } from "lucide-react";

const formSchema = z.object({
  emailAddress: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  passwordConfirm: z.string(),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });

  const handleSubmit = () => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-md w-full flex flex-col gap-4 border rounded-md p-8 m-2"
      >
        <h3 className="text-xl font-semibold">Log in</h3>
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email Address / Username</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Link href={"/register"} className="text-sm text-sky-500 flex items-center">
          Create an account
          <ArrowRightFromLine size={16} className="ml-2" />
        </Link>

        <Button type="submit" className="w-full">
          Log in
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
