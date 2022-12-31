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
      console.log({ result });
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
