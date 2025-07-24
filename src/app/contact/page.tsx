import type { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Contact | FootballBank.soccer',
  description: 'Get in touch with FootballBank.soccer to elevate your career.',
};

const ContactPage: FC = () => {
  return (
    <main className="bg-primary-bg text-primary-text font-inter">
      {/* Hero */}
      <section className="py-16 text-center">
        <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">Get In Touch</h1>
        <p className="text-primary-muted text-lg max-w-2xl mx-auto mb-8">
          Ready to take your football career to the next level? Let&apos;s start the conversation.
        </p>
      </section>

      {/* Contact Info */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Phone',
              icon: 'fa-phone',
              color: 'blue',
              text: '+44 20 7946 0958',
              subtitle: 'Call us directly',
            },
            {
              title: 'Email',
              icon: 'fa-envelope',
              color: 'green',
              text: 'info@footballbank.soccer',
              subtitle: 'Send us a message',
            },
            {
              title: 'Office',
              icon: 'fa-map-marker-alt',
              color: 'amber',
              text: 'London, UK',
              subtitle: 'Visit us in person',
            },
          ].map(({ title, icon, color, text, subtitle }) => (
            <div
              key={title}
              className="bg-primary-card rounded-xl p-8 border border-divider shadow-lg text-center"
            >
              <div
                className={`w-16 h-16 bg-accent-${color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <i className={`fa-solid ${icon} text-accent-${color} text-2xl`} />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">{title}</h3>
              <p className="text-primary-muted mb-1">{subtitle}</p>
              <p className={`text-accent-${color} font-medium`}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-poppins font-bold text-3xl mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-primary-card border border-divider rounded-lg px-4 py-3"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-primary-card border border-divider rounded-lg px-4 py-3"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full bg-primary-card border border-divider rounded-lg px-4 py-3">
                  <option>Select a subject</option>
                  <option>Player Representation</option>
                  <option>Career Consultation</option>
                  <option>Transfer Inquiry</option>
                  <option>General Question</option>
                  <option>Partnership Opportunity</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full bg-primary-card border border-divider rounded-lg px-4 py-3 resize-none"
                  placeholder="Tell us about your goals, experience, and how we can help you..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div>
            <h2 className="font-poppins font-bold text-3xl mb-8">Find Our Office</h2>
            <div className="bg-primary-card rounded-xl p-6 border border-divider shadow-lg">
              <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <i className="fa-solid fa-map text-accent-red text-4xl mb-4" />
                  <p className="text-primary-muted">Interactive Map</p>
                  <p className="text-sm text-primary-muted">London Office Location</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-building text-accent-red mt-1" />
                  <div>
                    <p className="font-medium">FootballBank.soccer</p>
                    <p className="text-primary-muted text-sm">25 Canary Wharf, London E14 5AB</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-clock text-accent-green mt-1" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-primary-muted text-sm">Mon-Fri: 9:00 AM - 6:00 PM GMT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-poppins font-bold text-3xl mb-8">Follow Our Journey</h2>
          <p className="text-primary-muted text-lg mb-12">
            Stay updated with the latest news, success stories, and opportunities in the world of football.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Twitter', icon: 'twitter', color: 'blue', handle: '@FootballBank' },
              { name: 'Instagram', icon: 'instagram', color: 'red', handle: '@FootballBank' },
              { name: 'Facebook', icon: 'facebook', color: 'blue', handle: 'FootballBank' },
              { name: 'YouTube', icon: 'youtube', color: 'red', handle: 'FootballBank' },
            ].map(({ name, icon, color, handle }) => (
              <div
                key={name}
                className={`bg-primary-card rounded-xl p-6 border border-divider shadow-lg hover:border-accent-${color} transition-colors cursor-pointer`}
              >
                <i className={`fa-brands fa-${icon} text-accent-${color} text-3xl mb-4`} />
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

export default ContactPage;
