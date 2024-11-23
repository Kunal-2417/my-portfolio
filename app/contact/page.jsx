'use client'
import { Button, button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { FaPhoneAlt,FaEnvelope,FaMapMarkedAlt } from "react-icons/fa"
import { useState } from "react"
import { Key } from "lucide-react"


const info=[
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"(+91) 8626841891",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gaganjnv2001@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Dehradun,Uttrakhand",
  },

]

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, phone, service, message } = formData;
    const mailtoLink = `mailto:gaganjnv2001@gmail.com?subject=Contact%20Form%20Submission&body=First Name: ${firstname}%0D%0ALast Name: ${lastname}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0AMessage: ${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Let&apos;s make something crispy and new together. Collaborate with us to bring your vision to life with creativity, technical expertise, and a commitment to excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} />
                <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} />
                <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <Input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
              </div>
              <Select value={formData.service} onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="ux-ui">UX/UI Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                    <SelectItem value="ml-ai">ML/AI</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              ></Textarea>
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>

          </div>


          {/* info? */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>
    </motion.section>
  )
}

export default Contact
