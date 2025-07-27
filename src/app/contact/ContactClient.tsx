"use client";
import { FC, useState } from "react";
import { submitContactForm } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { FaSpinner } from "react-icons/fa";

class EmailError {
  name: string;
  error: string;
  statusCode: number;

  constructor(name: string, error: string, statusCode: number) {
    this.name = name;
    this.error = error;
    this.statusCode = statusCode;
  }
}

const ContactClient: FC = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    console.log("I am in the submit function but before the try and catch block");
    try {
      console.log("I am in the submit function but inside the try and catch block");
      const result = await submitContactForm(formData);
      toast({title: "Message Sent", description: "We have received your message and will respond shortly."});
      console.log("this is the result from sending the email", result);
      console.log(result);
      if (result.success) {
        toast({
          title: "Message Sent",
          description:
            "We have received your message and will respond shortly.",
        });
        setStatus("success");
        e.currentTarget.reset(); // Optional: Reset form on success
      } else {
        setStatus("error");
        if(result.error instanceof Error) {
          console.log(result.error.cause);
          throw result.error;

        }
        
      }
   
    } catch (error) {
      if(error instanceof Error){
      toast({
        title: error.name,
        description: error.message,
      });
    }else if (error instanceof EmailError) {
      console.log(error.error);
      toast({
        title: error.name,
        description: error.error,
      });
    } 

    } finally {
      setStatus("idle");
    }
  };

  return (
    <main className="bg-primary-bg text-primary-text font-inter">
      {/* Hero */}
      <section className="py-16 text-center">
        <h1 className="text-primary-text font-poppins font-bold text-4xl md:text-5xl mb-6">
          Contact Us
        </h1>
        <p className="text-primary-muted text-lg max-w-2xl mx-auto mb-8">
          Elevate your football journey with our global expertise. Let’s
          connect.
        </p>
      </section>

      {/* Company Info Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Company Name",
              icon: "fa-building",
              color: "blue",
              text: "Soccer Bank Sports Management",
              subtitle: "Official Name",
            },
            {
              title: "Email",
              icon: "fa-envelope",
              color: "green",
              text: "info@footballbank.soccer",
              subtitle: "Our inbox is always open",
            },
            {
              title: "Global Branches",
              icon: "fa-globe",
              color: "amber",
              text: "Africa, US, UK, Europe",
              subtitle: "We operate worldwide",
            },
            {
              title: "Business Areas",
              icon: "fa-briefcase",
              color: "red",
              text: "Representation, Trials, Branding, Development, Legal",
              subtitle: "Our Expertise",
            },
            {
              title: "Licensing",
              icon: "fa-id-card",
              color: "blue",
              text: "FIFA Licensed Agent, Certified Scout",
              subtitle: "Accredited & Verified",
            },
          ].map(({ title, icon, color, text, subtitle }) => (
            <div
              key={title}
              className="bg-primary-card rounded-xl p-8 border border-divider shadow-lg"
            >
              <div
                className={`w-16 h-16 bg-accent-${color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <i
                  className={`fa-solid ${icon} text-accent-${color} text-2xl`}
                />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">
                {title}
              </h3>
              <p className="text-primary-muted mb-1">{subtitle}</p>
              <p className={`text-accent-${color} font-medium text-sm`}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-poppins font-bold text-3xl mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full bg-primary-card border border-divider rounded-lg px-4 py-3"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-primary-card border border-divider rounded-lg px-4 py-3"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  className="w-full bg-primary-card border border-divider rounded-lg px-4 py-3"
                >
                  <option value="General Inquiry">Select a subject</option>
                  <option value="Player Representation">
                    Player Representation
                  </option>
                  <option value="Trial Request">Trial Request</option>
                  <option value="Career Consultation">
                    Career Consultation
                  </option>
                  <option value="Business Inquiry">Business Inquiry</option>
                  <option value="Fitness Branding">Fitness Branding</option>
                  <option value="Transfer Inquiry">Transfer Inquiry</option>
                  <option value="Partnership Opportunity">
                    Partnership Opportunity
                  </option>
                  <option value="General Question">General Question</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-primary-card border border-divider rounded-lg px-4 py-3 resize-none"
                  placeholder="Tell us about your goals, experience, and how we can help you..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 rounded-lg font-semibold"
              >
                {status === "loading" ? (
                  <div className="flex items-center justify-center">
                    <FaSpinner className="animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <i className="fa-solid fa-paper-plane mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </div>

          {/* Placeholder Map */}
          <div className="bg-primary-card p-6 border border-divider rounded-xl shadow-md">
            <div className="h-96 flex items-center justify-center bg-gray-100 rounded-lg">
              <i className="fa-solid fa-map text-accent-red text-4xl" />
              <p className="ml-4 text-primary-muted">Our HQ: London, UK</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-poppins font-bold text-3xl mb-8">
            Follow Our Journey
          </h2>
          <p className="text-primary-muted text-lg mb-12">
            Connect with us on social media to stay up to date with global
            football talent and opportunities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Instagram",
                icon: "instagram",
                color: "red",
                handle: "@FootballBankOfficial",
              },
              {
                name: "YouTube",
                icon: "youtube",
                color: "red",
                handle: "FootballBank TV",
              },
              {
                name: "Facebook",
                icon: "facebook",
                color: "blue",
                handle: "FootballBank Global",
              },
              {
                name: "LinkedIn",
                icon: "linkedin",
                color: "blue",
                handle: "FootballBank International",
              },
            ].map(({ name, icon, color, handle }) => (
              <div
                key={name}
                className={`bg-primary-card rounded-xl p-6 border border-divider shadow-lg hover:border-accent-${color} transition-colors cursor-pointer`}
              >
                <i
                  className={`fa-brands fa-${icon} text-accent-${color} text-3xl mb-4`}
                />
                <p className="font-medium">{name}</p>
                <p className="text-primary-muted text-sm">{handle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactClient;
