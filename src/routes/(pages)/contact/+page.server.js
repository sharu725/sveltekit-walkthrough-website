import { fail } from "@sveltejs/kit";
import { object, string, number, date, InferType } from "yup";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const contactFormSchema = object({
      name: string().min(2, "too short").required("We only accept named users"),
      email: string().required().email(),
      message: string().required(),
    });

    try {
      const result = await contactFormSchema.validate(
        { name, email, message },
        { abortEarly: false }
      );

      const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSeOGNYx08uzHGf3HASA_CDn6z6adFT4_N0w6OvZduCBxMRfEw/formResponse?usp=pp_url&entry.190919771=${name}&entry.543063817=${email}&entry.2120037074=${message}&submit=Submit`;

      const res = await fetch(prefilledLink);

      return {
        success: true,
        status: "Form is submitted",
      };
    } catch (error) {
      console.log({ error });
      const errors = error.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});

      return {
        errors,
        name,
        email,
        message,
      };
    }
  },
};
