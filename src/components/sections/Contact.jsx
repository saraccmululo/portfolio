import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formRef = useRef(null);
  const [isLoading, setIsLoading]= useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setFeedbackMessage("");
      console.log(data);
      
       await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      console.log(
  import.meta.env.VITE_SERVICE_ID,
  import.meta.env.VITE_TEMPLATE_ID,
  import.meta.env.VITE_PUBLIC_KEY
);
      setFeedbackMessage ("Message Sent!");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setFeedbackMessage("Oops! Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <p>Sending message...</p>

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full md:w-[600px]">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from from-[#f6552d] to-[#bb8476] bg-clip-text text-transparent text-center">
            Let's Connect
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="relative">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                {...register("from_name", { required: "Please enter a name" })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#bb8476] focus:bg-[#bb8476]/50"
                placeholder="Name"
                aria-invalid={errors.from_name ? "true" : "false"}
                aria-describedby={errors.from_name? "name-error":undefined}
              />
              {errors.from_name && (
                <p id="name-error" className="text-red-500" role="alert">{errors.from_name.message}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", {
                  required: "Please enter a valid email",
                })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#bb8476] focus:bg-[#bb8476]/50"
                placeholder="example@email.com"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email? "email-error":undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500" role="alert">{errors.email.message}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                {...register("message", {
                  required: "Please enter your message",
                })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-[#bb8476] focus:bg-[#bb8476]/50"
                placeholder="Your message..."
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message? "message-error":undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-red-500" role="alert">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#915c4f] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(145,92,79,0.4)]"
              disabled={isLoading}
            >
              {isLoading? "Sending...":"Send Message"}
            </button>
            {feedbackMessage&&<p className={`text-center ${feedbackMessage.startsWith("M")? "text-[#b6543b]": "text-red-500"}`}>{feedbackMessage}</p>}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
