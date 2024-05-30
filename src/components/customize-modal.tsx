"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";

const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email({
    message: "Please submit a valid email",
  }),
  companyName: z.string().min(1),
  industry: z.optional(z.string()),
  balance: z.coerce.number().min(1),
  optionalMails: z.optional(z.string()),
});

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

interface CustomizeModalProps {}

const CustomizeModal: React.FC<CustomizeModalProps> = () => {
  // const [isValid, setIsValid] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      industry: "",
      balance: undefined,
      optionalMails: "",
    },
  });

  const { isDirty, isValid } = useFormState(form);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <DialogContent className="w-[448px] p-12 h-full font">
      <DialogTitle className="font-medium">
        Customize the Mercury Demo
      </DialogTitle>
      <DialogDescription className="text-black font-medium leading-6">
        Fill out this short form and we'll send you an email with your
        customized demo link.
      </DialogDescription>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    {...field}
                    className="peer order-2 focus:border-b-[#4d68eb] focus:border-b-2 focus:rounded-bl-none focus:rounded-br-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 invalid:focus:border-b-[#c21777]"
                  />
                </FormControl>
                <FormLabel className="order-1 peer-focus:text-[#4d68eb] pb-2">
                  First Name
                </FormLabel>
                <FormMessage className="order-3" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    {...field}
                    className="peer order-2 focus:border-b-[#4d68eb] focus:border-b-2 focus:rounded-bl-none focus:rounded-br-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0  "
                  />
                </FormControl>
                <FormLabel className="order-1 peer-focus:text-[#4d68eb] pb-2">
                  Last Name
                </FormLabel>
                <FormMessage className="order-3" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    {...field}
                    className="peer order-2 focus:border-b-[#4d68eb] focus:border-b-2 focus:rounded-bl-none focus:rounded-br-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0  "
                  />
                </FormControl>
                <FormLabel className="order-1 peer-focus:text-[#4d68eb] pb-2">
                  Email
                </FormLabel>
                <FormMessage className="order-3" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    {...field}
                    className="peer order-2 focus:border-b-[#4d68eb] focus:border-b-2 focus:rounded-bl-none focus:rounded-br-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0  "
                  />
                </FormControl>
                <FormLabel className="order-1 peer-focus:text-[#4d68eb] pb-2">
                  Company
                </FormLabel>
                <FormMessage className="order-3" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Select>
                    <SelectTrigger
                      className="peer order-2 focus:border-b-[#4d68eb] focus:border-b-2 focus:rounded-bl-none focus:rounded-br-none focus:outline-none focus:ring-0 focus:ring-offset-0"
                      aria-placeholder="Startup"
                    >
                      <SelectValue placeholder="Startup" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="ecommerce">Ecommerce</SelectItem>
                      <SelectItem value="crypto">Crypto</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="investing">Investing</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormLabel className="order-1 peer-focus:text-[#4d68eb] pb-2">
                  Industry
                </FormLabel>
                <FormMessage className="order-3" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="balance"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  {
                    <>
                      <div className="relative flex peer order-2">
                        <span className="absolute m-2">$</span>
                        <Input
                          {...field}
                          className=" focus:border-b-[#4d68eb] focus:border-b-2 focus:rounded-bl-none focus:rounded-br-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-7 
                    [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none
                    "
                          type="number"
                        />
                      </div>
                    </>
                  }
                </FormControl>
                <FormLabel className="order-1 peer-focus:text-[#4d68eb] pb-2">
                  Mercury account balance
                </FormLabel>
                <FormMessage className="order-3" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="optionalMails"
            render={({ field }) => (
              <FormItem className="flex flex-col py-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    className="bg-[#d7d7e8] border border-[#d7d7e8] ring-offset-background data-[state=checked]:bg-[#4d68eb] data-[state=checked]:border data-[state=checked]:border-[#4d68eb] data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor="optionlaMails"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I'd like to receive Mercury emails.
                  </label>
                </div>
              </FormItem>
            )}
          />
          <div className="flex w-full space-x-3 justify-end">
            <DialogClose asChild>
              <Button className="rounded-full bg-[#f9f9fb] hover:bg-[#f2f2f7] px-8 text-[#4d68eb] font-semibold">
                Cancel
              </Button>
            </DialogClose>
            <Button
              className="rounded-full bg-[#4d68eb] hover:bg-[#3c54d5] px-8 font-semibold  disabled:bg-opacity-50"
              type="submit"
              disabled={!isValid}
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
};

export default CustomizeModal;
