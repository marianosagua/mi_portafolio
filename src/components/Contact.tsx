import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_API_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_API_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        import.meta.env.VITE_API_EMAILJS_PUBLIC_KEY!
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "marianosagua4343@gmail.com",
      link: "mailto:marianosagua4343@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Ubicacion",
      value: "Buenos Aires, Argentina",
      link: "#",
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ponte en contacto
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o queres discutir oportunidades
            potenciales? Contactate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <a
                      href={item.link}
                      className="flex items-center gap-4 group"
                      target={
                        item.title === "Email" || item.title === "Phone"
                          ? "_blank"
                          : undefined
                      }
                      rel="noopener noreferrer"
                    >
                      <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-foreground/70">
                          {item.title}
                        </h3>
                        <p className="text-lg font-medium">{item.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center h-full py-12 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  >
                    <CheckCircle className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-foreground/70 max-w-md">
                      Gracias por contactarme. Te responderé lo antes posible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nombre
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Tu nombre"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Correo
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Tu correo"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Asunto
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Asunto de tu mensaje"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tu mensaje"
                        rows={6}
                        required
                        className="bg-background/50 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
