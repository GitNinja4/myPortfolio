import emailjs from "@emailjs/browser";

// EmailJS credentials for your contact form
const PUBLIC_KEY = "rFBgAJVZn848n_RHg";
const SERVICE_ID = "service_1m4gb04";
const TEMPLATE_ID = "template_stpqo0z";

// Initialize emailjs (call this once when app loads)
export const initEmailJS = () => {
  try {
    emailjs.init(PUBLIC_KEY);
    console.log("EmailJS initialized successfully");
  } catch (error) {
    console.error("Failed to initialize EmailJS:", error);
  }
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (data: ContactFormData) => {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        name: data.name,
        email: data.email,
        reply_to: data.email,
        reply_to_name: data.name,
        subject: data.subject,
        message: data.message,
        to_email: "aditya@example.com", // Replace with your actual inbox email
      }
    );

    console.log("Email sent successfully:", result);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again.",
    };
  }
};
