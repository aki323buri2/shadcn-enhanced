
import * as React from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

// refer: https://flowbite.com/docs/forms/floating-label/#floating-label-example

export type FloatingLabelInputProps = React.ComponentProps<"input"> & {
  label?: string
}
export const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(({ 
  label = "floating-label-input", 
  id = Math.random().toString(), 
  className, 
  ...props }, ref) => {
  return (
    <div className="relative">
      <Input id={id} 
        className={cn(`
        peer
        `, 
        className)}
        placeholder=" " 
        {...props}
        ref={ref}
      />
      <label htmlFor={id} 
      className={`absolute text-sm text-gray-500 
        dark:text-gray-400 duration-300 
        transform -translate-y-4 scale-75 top-2 z-10 
        origin-[0] bg-white 
        dark:bg-gray-900 px-2 peer-focus:px-2 
        peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:-translate-y-1/2 
        peer-placeholder-shown:top-1/2 
        peer-focus:top-2 peer-focus:scale-75 
        peer-focus:-translate-y-4 
        rtl:peer-focus:translate-x-1/4 
        rtl:peer-focus:left-auto start-1
        `}
      >{label}</label>
    </div>
  )
})
