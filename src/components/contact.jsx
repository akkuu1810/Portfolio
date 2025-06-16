import { Mail, Phone } from 'lucide-react';
import '../assets/react.png'
import '../assets/js.png'

export default function Contact() {
  return (
    <section 
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900 px-6 md:px-16 py-20 flex items-center justify-center"
    >
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 space-y-8 border border-green-500/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="text-[#5EAF4B]" />
            <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kshatriyaakanksha22@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-lg text-gray-800 dark:text-white hover:text-[#5EAF4B] transition-colors"
>
  kshatriyaakanksha22@gmail.com
</a>

          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-[#5EAF4B]" />
            <a 
              href="tel:9898413263"
              className="text-lg text-gray-800 dark:text-white hover:text-[#5EAF4B] transition-colors"
            >
              +91 98984 13263
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
