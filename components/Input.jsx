"use client";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormMessage,
  FormLabel,
  FormField,
  FormItem,
} from "./ui/form";

export default function CustomInput({
  control,
  type,
  label,
  className,
  id,
  placeholder,
  children,
}) {
  return (
    <FormField
      control={control}
      name={id}
      render={({ field, formState }) => (
        <FormItem>
          <FormLabel className="text-xs">{label}</FormLabel>
          <FormControl>
            <div
              className={`grid grid-cols-[2em_1fr] sm:grid-cols-[2em_1fr_10em] grid-rows-1 items-center place-items-center max-w-[90vw] border-[1px] rounded ${formState.errors[id] ? "border-red" : ""}`}
            >
              {children}
              <Input
                type={type}
                className={`${className} ps-0 border-none !outline-none !ring-0 !border-0 focus-visible:ring-offset-0 text-sm text-dark-gray`}
                {...field}
                id={id}
                placeholder={placeholder}
              />
              <FormMessage className="hidden sm:block !text-red ms-auto me-3 text-[10px]" />
            </div>
          </FormControl>
          <FormMessage className="sm:hidden !text-red text-xs" />
        </FormItem>
      )}
    />
  );
}
