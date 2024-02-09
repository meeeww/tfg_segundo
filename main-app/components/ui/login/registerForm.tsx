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
import registerParams from "@/interfaces/registerParams";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner";

const formSchema = z
  .object({
    emailAddress: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    passwordConfirm: z.string(),
    userName: z.string(),
    name: z.string().min(1, { message: "Please enter your name" }),
    surname: z.string().min(1, { message: "Please enter your surname" }),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }
  )
  .refine(
    (data) => {
      return data;
    }
  );



const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onErrors = (error: any) => {
    return (
      toast("An error has occurred, please try again")
    )
  }

  const handleSubmit = (data: any) => {
    const params: registerParams = {
      Nombre_Usuario: data.name,
      Apellido_Usuario: data.surname,
      Descripcion_Usuario: "",
      Nick_Usuario: data.userName,
      Email_Usuario: data.emailAddress,
      Fecha_Creacion: 0,
      Estado_Cuenta: 0,
      Verificacion_Cuenta: 0,
    };
  };


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onErrors)}
        className="max-w-md w-full flex flex-col gap-4 border rounded-md p-8 m-2"
      >
        <h3 className="text-xl font-semibold">Register</h3>
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Surname</FormLabel>
                  <FormControl>
                    <Input placeholder="Surname" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username..." type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
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
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Confirm password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Link href={"/login"} className="text-sm text-sky-500 flex items-center">
          Already have an account?
          <ArrowRightFromLine size={16} className="ml-2" />
        </Link>

        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
