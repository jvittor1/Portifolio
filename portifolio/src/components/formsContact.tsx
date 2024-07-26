import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const EmailSchema = z.object({
  name: z.string().min(3, "Name must have at least 3 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(8, "Message must have at least 8 characters"),
});

type EmailFormData = z.infer<typeof EmailSchema>;

export default function FormsContactComponent() {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(EmailSchema),
  });

  const handleFormSubmit = async (data: EmailFormData) => {
    console.log(data);

    try {
      console.log("Data:", data);
      // const result = await loginService(data);
      // if (result) {
      //   setErrorMessage(result);
      // }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <form
      className="flex h-full w-full flex-col justify-center"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="flex flex-col gap-5 text-zinc-200">
        <div className="flex flex-col gap-2">
          <div className="relative flex flex-col gap-1">
            <label
              className="text-lg font-semibold text-indigo-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Type your name"
              className="w-full border-b-2 border-zinc-700 bg-transparent py-2 pr-8 outline-none focus:border-indigo-700"
              onFocus={() => setIsNameFocused(true)}
              onBlur={() => setIsNameFocused(false)}
            />

            <IoMdPerson
              className={`absolute bottom-3 right-0 text-base ${isNameFocused ? "text-indigo-700" : "text-zinc-600"}`}
            />
          </div>
          <span className="text-sm text-red-500">{errors.name?.message}</span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="relative flex flex-col gap-1">
            <label
              className="text-lg font-semibold text-indigo-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Type your email"
              className="w-full border-b-2 border-zinc-700 bg-transparent py-2 pr-8 outline-none focus:border-indigo-700"
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
            />

            <MdEmail
              className={`absolute bottom-3 right-0 text-base ${isEmailFocused ? "text-indigo-700" : "text-zinc-600"}`}
            />
          </div>

          <span className="text-sm text-red-500">{errors.email?.message}</span>
        </div>
        <div className="flex h-full flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label
              className="text-lg font-semibold text-indigo-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              {...register("message")}
              placeholder="Type your message"
              className="w-full flex-grow rounded border-[2px] border-zinc-700 bg-transparent p-2 outline-none focus:border-indigo-700"
            ></textarea>
          </div>

          <span className="text-sm text-red-500">
            {errors.message?.message}
          </span>
        </div>
        <button
          type="submit"
          className="rounded border-[2px] border-indigo-700 bg-transparent py-4 text-base font-bold text-indigo-700 shadow-custom-shadow shadow-violet-900 transition-all duration-150 ease-in-out hover:bg-indigo-800 hover:text-zinc-200"
        >
          Send
        </button>
      </div>
    </form>
  );
}
