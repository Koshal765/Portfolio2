
import React, { useState, useRef } from "react";
import {Mail, Phone, MapPin,Send,User, FileText,MessageSquare,} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { ToastContainer, toast, Slide } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact=()=>{

const [loading, setLoading] = useState(false);
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);

  emailjs
    .sendForm(
      "service_q2pm2sn",
      "template_hd5ndob",
      form.current,
      "0LkF_qC5veW8RyuyO"
    )
    .then(() => {
      toast.success("Message sent successfully! 🚀");
      form.current.reset();
      setLoading(false);
    })
    .catch(() => {
      toast.error("Failed to send message.");
      setLoading(false);
    });
};


  return (
<section
  id="contact"
  className="relative overflow-hidden bg-[#060814] py-10 md:py-28"
>
  {/* Background Glow */}

  <div className="absolute inset-0 -z-10">
    <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[150px]" />
    <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[180px]" />

  </div>

  <div className="max-w-7xl mx-auto px-6">

  
    <div className="text-center mb-16">
      <p className="uppercase tracking-[5px] text-violet-400 font-semibold">  CONTACT   </p>

      <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">Let's Connect </h2>

      <p className="mt-5 text-slate-400 max-w-2xl mx-auto">  Have an idea, project or opportunity? I'd love to hear from you. </p>

    </div>

    {/* main container */}

    <div className="grid lg:grid-cols-5 gap-8">

      {/* left card*/}

      <div className="lg:col-span-2 rounded-3xl  border border-white/10 bg-[#0B1220]/80 backdrop-blur-xl p-8  shadow-[0_0_35px_rgba(124,58,237,.15)] " >

        <h3 className="text-2xl font-semibold text-white mb-8"> Contact Information</h3>

      

        <div className="flex items-start gap-5 mb-8">
          <div className="w-14 h-14 rounded-xl bg-violet-600/15 flex items-center justify-center">
            <Mail className="text-violet-400" />
          </div>

          <div>
            <h4 className="text-white font-semibold">  Email </h4>

            <p className="text-slate-400 mt-1">koshalpothare@gmail.com</p>

          </div>

        </div>

     

        <div className="flex items-start gap-5 mb-8">
          <div className="w-14 h-14 rounded-xl bg-violet-600/15 flex items-center justify-center">
            <Phone className="text-violet-400" />
          </div>

          <div>
            <h4 className="text-white font-semibold">Phone</h4>

            <p className="text-slate-400 mt-1"> +91 90224 69699</p>

          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-violet-600/15 flex items-center justify-center">
            <MapPin className="text-violet-400" />
          </div>

          <div>
            <h4 className="text-white font-semibold"> Location</h4>

            <p className="text-slate-400 mt-1"> Nagpur, Maharashtra, India</p>

          </div>
        </div>

        {/* divider */}

        <div className="my-10 border-t border-white/10" />

        <h4 className="text-white font-semibold mb-5"> Connect with me</h4>

        <div className="flex gap-4">

          <a
            href="https://github.com/Koshal-Pothare" target="_blank"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-violet-600 transition"
          >
            <FaGithub size={20} className="text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/koshal-pothare-b63806388/" target="_blank"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition"
          >
            <FaLinkedin size={20} className="text-white" />
          </a>

          <a
            href="https://www.instagram.com/ksh_codes/" target="_blank"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600 transition"
          >
            <FaInstagram size={20} className="text-white" />
          </a>

        </div>
      </div>

            {/* RIGHT FORM */}

      <div className="lg:col-span-3  rounded-3xl border border-white/10 bg-[#0B1220]/80 backdrop-blur-xl p-8 shadow-[0_0_35px_rgba(59,130,246,.15)]">
        
        <h3 className="text-2xl font-semibold text-white mb-8"> Send Me a Message</h3>

        <form ref={form} onSubmit={sendEmail}
          className="space-y-6">
    
          <div className="grid md:grid-cols-2 gap-5">

            {/* Name */}
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"/>

              <input type="text"  name="name" placeholder="Your Name" required
                className=" w-full rounded-xl border border-white/10 bg-[#121A2C] py-4 pl-12 pr-4 text-white outline-none transition focus:border-violet-500 focus:ring-2
                 focus:ring-violet-500/20 " />

            </div>

            {/* Email */}

            <div className="relative">

              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

              <input  type="email"  name="email" placeholder="Your Email"  required
                className=" w-full rounded-xl border border-white/10 bg-[#121A2C] py-4 pl-12 pr-4 text-white outline-none transition
                focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 "/>

            </div>
          </div>

          <div className="relative">
            <FileText size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

            <input type="text" name="title" placeholder="Subject" required
              className=" w-full  rounded-xl  border py-4  pl-12  pr-4  text-white transition
              focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20  " />

          </div>

          {/* Message */}

          <div className="relative">

            <MessageSquare size={18} className="absolute left-4 top-5 text-slate-500" />

            <textarea rows={6} name="message"placeholder="Your Message"required
              className=" w-full resize-none rounded-xl border border-white/10 bg-[#121A2C] py-4 pl-12 pr-4 text-white
              outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 " />

          </div>

          {/* Button */}

          <button type="submit"
            className={`group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500
            to-blue-600 py-4 text-lg font-semibold text-whitetransition-allduration-300 hover:scale-[1.02]hover:shadow-[0_0_35px_rgba(124,58,237,.45)] active:scale-95${loading? "disabled" : ""}`} >
            <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 "/>

            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
          </div>

  </div>

  <ToastContainer
    autoClose={2000}
    theme="dark"
    transition={Slide}
    closeOnClick
    draggable
    hideProgressBar={false}
  />

</section>

)}

export default Contact;