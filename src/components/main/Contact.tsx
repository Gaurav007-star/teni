import { Header } from '../Header'
import { Footer } from '../Footer'
import { ArrowUpRight, Loader2 } from 'lucide-react'
import { Button } from '../ui/button'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import SEO from '../SEO'
import ReCAPTCHA from 'react-google-recaptcha'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'
const CAPTCHA_SITE_KEY = import.meta.env.VITE_CAPTCH_SITE_KEY as string

const Contact = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })
    const [captchaToken, setCaptchaToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const captchaRef = useRef<ReCAPTCHA>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setUserData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!userData.name.trim() || !userData.email.trim() || !userData.subject.trim() || !userData.message.trim()) {
            toast.error("Please fill in all required fields.", { id: "contact-validation" })
            return
        }

        if (!captchaToken) {
            toast.error("Please complete the CAPTCHA verification.", { id: "contact-captcha" })
            return
        }

        setIsLoading(true)
        const loadingToast = toast.loading("Sending your message...", { id: "contact-sending" })

        try {
            const res = await fetch(`${API_BASE}/api/sendmail`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: userData.name.trim(),
                    email: userData.email.trim(),
                    phone: userData.phone.trim(),
                    subject: userData.subject.trim(),
                    message: userData.message.trim(),
                    captchaKey: captchaToken,
                }),
            })

            const data = await res.json()

            if (res.ok) {
                toast.success(data.message ?? "Message sent! We'll get back to you soon.", {
                    id: loadingToast,
                    duration: 5000,
                })
                // Reset form and captcha on success
                setUserData({ name: "", email: "", phone: "", subject: "", message: "" })
                setCaptchaToken(null)
                captchaRef.current?.reset()
            } else {
                toast.error(data.message ?? "Something went wrong. Please try again.", {
                    id: loadingToast,
                    duration: 5000,
                })
                // Reset captcha so user can retry
                setCaptchaToken(null)
                captchaRef.current?.reset()
            }
        } catch {
            toast.error("Network error — please check your connection and try again.", {
                id: loadingToast,
                duration: 5000,
            })
            setCaptchaToken(null)
            captchaRef.current?.reset()
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-muted selection:text-foreground">
            <SEO
                title="Contact Us"
                description="Get in touch with Teni for your web development, branding, design, and digital service needs."
            />
            <Header />
            <main className="flex flex-col pt-20 md:pt-32 pb-20 px-4 md:px-8 lg:px-16 mx-auto max-w-7xl gap-10 md:gap-24 overflow-hidden">

                {/* Bottom Split Section */}
                <section id='lets-talk' className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-12 mt-8 lg:mt-12">
                    {/* Left: Contact Info */}
                    <div className="flex flex-col gap-12 lg:col-span-5">
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-tight">
                            Don&apos;t be afraid to
                            <br className="hidden md:block" />
                            say hello with us!
                        </h2>

                        <div className="flex flex-col gap-10 mt-2">
                            <div className="flex flex-col gap-2">
                                <span className="text-muted-foreground text-sm uppercase tracking-widest font-medium">Phone</span>
                                <a href="tel:+8336856076" className="text-xl md:text-2xl font-medium hover:text-primary transition-colors inline-block w-fit">+91 8336856076</a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="text-muted-foreground text-sm uppercase tracking-widest font-medium">Office</span>
                                <span className="text-xl md:text-2xl font-medium hover:text-primary transition-colors inline-block w-fit">
                                    Barrackpore, Mohanpur(Senpukur)
                                    <br />
                                    DIST-24 PGS North
                                    <br />
                                    Kolkata-700121
                                </span>
                                <button className="inline-flex items-center gap-2 mt-2 font-medium hover:text-primary transition-colors group w-fit cursor-pointer" onClick={() => window.open("https://www.google.com/maps/place/22%C2%B046'19.6%22N+88%C2%B023'26.0%22E/@22.7721221,88.3879756,17z/data=!3m1!4b1!4m4!3m3!8m2!3d22.7721221!4d88.3905505?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D", "_blank")}>
                                    <span className="underline underline-offset-4 decoration-1 decoration-foreground/30 group-hover:decoration-primary">See on Google Map</span>
                                    <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-zinc-950 text-zinc-50 p-8 md:p-12 lg:p-14 rounded-[2.5rem] flex flex-col gap-10 lg:col-span-7 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                        <h3 className="text-2xl md:text-3xl font-medium mb-4 relative">Let's Talk</h3>

                        <form className="flex flex-col gap-10 relative" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="contact-name" className="text-sm text-zinc-400 font-medium">Name <span className="text-primary">*</span></label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        required
                                        disabled={isLoading}
                                        value={userData.name}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-zinc-800 pb-3 focus:outline-none focus:border-primary transition-colors text-zinc-100 text-lg disabled:opacity-50"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="contact-email" className="text-sm text-zinc-400 font-medium">Email <span className="text-primary">*</span></label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        required
                                        disabled={isLoading}
                                        value={userData.email}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-zinc-800 pb-3 focus:outline-none focus:border-primary transition-colors text-zinc-100 text-lg disabled:opacity-50"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="contact-phone" className="text-sm text-zinc-400 font-medium">Phone</label>
                                    <input
                                        type="tel"
                                        id="contact-phone"
                                        name="phone"
                                        disabled={isLoading}
                                        value={userData.phone}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-zinc-800 pb-3 focus:outline-none focus:border-primary transition-colors text-zinc-100 text-lg disabled:opacity-50"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="contact-subject" className="text-sm text-zinc-400 font-medium">Subject <span className="text-primary">*</span></label>
                                    <input
                                        type="text"
                                        id="contact-subject"
                                        name="subject"
                                        required
                                        disabled={isLoading}
                                        value={userData.subject}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-zinc-800 pb-3 focus:outline-none focus:border-primary transition-colors text-zinc-100 text-lg disabled:opacity-50"
                                        placeholder="How can we help?"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mt-4">
                                <label htmlFor="contact-message" className="text-sm text-zinc-400 font-medium">Message <span className="text-primary">*</span></label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={1}
                                    required
                                    disabled={isLoading}
                                    value={userData.message}
                                    onChange={handleChange}
                                    className="bg-transparent border-b border-zinc-800 pb-3 focus:outline-none focus:border-primary transition-colors text-zinc-100 resize-none text-lg min-h-[80px] file-scrollbar disabled:opacity-50"
                                    placeholder="Tell us more about your project..."
                                />
                            </div>

                            {/* reCAPTCHA */}
                            <div className="flex justify-start">
                                <ReCAPTCHA
                                    ref={captchaRef}
                                    sitekey={CAPTCHA_SITE_KEY}
                                    theme="dark"
                                    onChange={(token: string | null) => setCaptchaToken(token)}
                                    onExpired={() => setCaptchaToken(null)}
                                />
                            </div>

                            <Button
                                size="lg"
                                type="submit"
                                disabled={isLoading || !captchaToken}
                                className="w-full bg-primary text-white hover:bg-secondary/60 text-lg font-semibold tracking-wide h-16 rounded-full group transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Contact