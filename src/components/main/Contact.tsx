import { Header } from '../Header'
import { Footer } from '../Footer'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../ui/button'

const Contact = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-muted selection:text-foreground">
            <Header />
            <main className="flex flex-col pt-32 pb-20 px-4 md:px-8 lg:px-16 mx-auto max-w-7xl gap-16 md:gap-24 overflow-hidden">

                {/* Top Section - Large Text */}
                <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 animate-fade-in-up">
                    <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-medium tracking-tighter leading-[0.9] text-foreground">
                        Let&apos;s get in
                        <br />
                         touch
                    </h1>
                    <div className="md:max-w-xs flex flex-col gap-4 mb-4">
                        <p className="text-foreground text-lg md:text-xl font-medium">
                            Great! We&apos;re excited to hear from you and let&apos;s start something special together. Call us for any inquiry.
                        </p>
                    </div>
                </section>

                {/* Middle Image - Mix from Image 2 */}
                <section className="w-full relative h-[400px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Professionals in office"
                        className="object-cover w-full h-full grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                </section>

                {/* Bottom Split Section */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-12 mt-8 lg:mt-12">
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
                                <a href="tel:+2578365379" className="text-xl md:text-2xl font-medium hover:text-primary transition-colors inline-block w-fit">+91 6291471106</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-muted-foreground text-sm uppercase tracking-widest font-medium">Email</span>
                                <a href="mailto:hello@slabs.com" className="text-xl md:text-2xl font-medium hover:text-primary transition-colors inline-block w-fit">hello@slabs.com</a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="text-muted-foreground text-sm uppercase tracking-widest font-medium">Office</span>
                                <span className="text-xl md:text-2xl font-medium hover:text-primary transition-colors inline-block w-fit" >
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

                        <h3 className="text-2xl md:text-3xl font-medium mb-4 relative">Contact</h3>

                        <form className="flex flex-col gap-10 relative" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="name" className="text-sm text-zinc-400 font-medium">Name</label>
                                    <input type="text" id="name" className="bg-transparent border-b border-zinc-800 pb-3 focus:outline-none focus:border-primary transition-colors text-zinc-100 text-lg" placeholder="John Doe" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="email" className="text-sm text-zinc-400 font-medium">Email</label>
                                    <input type="email" id="email" className="bg-transparent border-b border-zinc-800 pb-3 focus:outline-none focus:border-primary transition-colors text-zinc-100 text-lg" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="phone" className="text-sm text-zinc-400 font-medium">Phone</label>
                                    <input type="tel" id="phone" className="bg-transparent border-b border-zinc-800 pb-3 focus:outline-none focus:border-primary transition-colors text-zinc-100 text-lg" placeholder="+1 (555) 000-0000" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="subject" className="text-sm text-zinc-400 font-medium">Subject</label>
                                    <input type="text" id="subject" className="bg-transparent border-b border-zinc-800 pb-3 focus:outline-none focus:border-primary transition-colors text-zinc-100 text-lg" placeholder="How can we help?" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 mt-4">
                                <label className="text-sm text-zinc-400 font-medium">Tell us about your interested in</label>
                                <div className="flex flex-wrap gap-3">
                                    {['Website Design', 'UX/UI Design', 'App Development', 'Branding', 'Other'].map(tag => (
                                        <button
                                            key={tag}
                                            type="button"
                                            className="px-5 py-2.5 rounded-full border border-zinc-800 text-sm text-zinc-300 hover:border-zinc-500 hover:text-white transition-all focus:bg-primary focus:border-primary focus:text-black font-medium"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mt-4">
                                <label htmlFor="message" className="text-sm text-zinc-400 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows={1}
                                    className="bg-transparent border-b border-zinc-800 pb-3 focus:outline-none focus:border-primary transition-colors text-zinc-100 resize-none text-lg min-h-[40px]"
                                    placeholder="Tell us more about your project..."
                                />
                            </div>

                            <Button size="lg" className="w-full mt-8 bg-primary text-white hover:bg-secondary/80 text-lg font-semibold tracking-wide h-16 rounded-full group transition-all">
                                Send Message
                                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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