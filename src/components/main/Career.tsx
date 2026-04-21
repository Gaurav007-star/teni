import { useEffect, useState } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Button } from '../ui/button'
import { MapPin, Clock, ArrowUpRight, Paperclip } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'
import toast from 'react-hot-toast'

const CATEGORIES = ["View all", "Development", "Designer", "Video Editor", "Marketing", "Customer Service", "Finance", "Management"]

const JOBS = [
    {
        id: 1,
        title: "Video Editor",
        category: "Video Editor",
        location: "100% remote",
        type: "Full-time",
        description: <h1>We're looking for a mid-level product designer to join our team. <br />Must know Illustrator, photoshop, Premiere pro, After effects</h1>,
        openingSoon: true,
    },
]

// ─── Inner form component — each Dialog instance keeps its own isolated state ─
const ApplyForm = ({ defaultProfession }: { defaultProfession: string }) => {
    const [selectedProfession, setSelectedProfession] = useState(defaultProfession);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        note: "",
        cv: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setUserData((prev) => ({ ...prev, cv: file.name }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(userData, selectedProfession);
        toast.success("Try again later",{
            id:"Carrer-mail-sent"
        })
    };


    return (
        <form className="flex flex-col gap-8 relative" onSubmit={handleSubmit}>

            {/* Profession select */}
            <div className="relative w-full pt-6">
                <label className="block text-xs text-primary font-semibold tracking-widest uppercase mb-2">
                    Applying for
                </label>
                <Select value={selectedProfession} onValueChange={setSelectedProfession}>
                    <SelectTrigger
                        className="w-full rounded-none border-0 border-b border-zinc-700 bg-transparent px-0 py-1 text-lg text-zinc-100 shadow-none focus-visible:ring-0 focus-visible:border-primary transition-colors h-auto"
                    >
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-700 text-zinc-100">
                        {JOBS.map((job) => (
                            <SelectItem
                                key={job.id}
                                value={job.title}
                                className="text-zinc-100 focus:bg-zinc-800 focus:text-zinc-100"
                            >
                                {job.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-2">
                <div className="relative z-0 w-full group pt-4">
                    <input
                        type="text"
                        id="name"
                        name='name'
                        required
                        placeholder=" "
                        className="peer block w-full bg-transparent border-0 border-b border-zinc-800 pb-2 focus:outline-none focus:ring-0 focus:border-primary transition-colors text-zinc-100 text-lg appearance-none"
                        value={userData.name}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="name"
                        className="absolute text-lg text-zinc-400 font-medium duration-300 transform -translate-y-7 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                    >
                        *Name
                    </label>
                </div>

                <div className="relative z-0 w-full group pt-4">
                    <input
                        type="email"
                        id="email"
                        name='email'
                        required
                        placeholder=" "
                        className="peer block w-full bg-transparent border-0 border-b border-zinc-800 pb-2 focus:outline-none focus:ring-0 focus:border-primary transition-colors text-zinc-100 text-lg appearance-none"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="email"
                        className="absolute text-lg text-zinc-400 font-medium duration-300 transform -translate-y-7 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                    >
                        *Email
                    </label>
                </div>
            </div>

            {/* Row 2: Phone */}
            <div className="grid grid-cols-1 gap-8 md:gap-10">
                <div className="relative z-0 w-full group pt-4">
                    <input
                        type="tel"
                        id="phone"
                        name='phone'
                        placeholder=" "
                        className="peer block w-full bg-transparent border-0 border-b border-zinc-800 pb-2 focus:outline-none focus:ring-0 focus:border-primary transition-colors text-zinc-100 text-lg appearance-none"
                        value={userData.phone}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="phone"
                        className="absolute text-lg text-zinc-400 font-medium duration-300 transform -translate-y-7 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                    >
                        Phone
                    </label>
                </div>
            </div>

            {/* Row 3: Note */}
            <div className="relative z-0 w-full group pt-4">
                <textarea
                    id="note"
                    name='note'
                    rows={1}
                    placeholder=" "
                    className="peer block w-full bg-transparent border-0 border-b border-zinc-800 pb-2 focus:outline-none focus:ring-0 focus:border-primary transition-colors text-zinc-100 resize-none text-lg min-h-[70px] appearance-none"
                    value={userData.note}
                    onChange={handleChange}
                />
                <label
                    htmlFor="note"
                    className="absolute text-lg text-zinc-400 font-medium duration-300 transform -translate-y-7 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                    Note
                </label>
            </div>

            {/* Row 4: Attach Doc */}
            <div className="mt-2 flex items-start justify-start gap-2">
                <label
                    htmlFor="cv-upload"
                    className="cursor-pointer inline-flex items-center justify-between border border-zinc-700 rounded-lg px-4 py-2.5 w-full md:w-48 hover:bg-zinc-900 transition-colors"
                >
                    <span className="text-zinc-200 text-sm font-medium">Attach Doc.</span>
                    <div className="bg-slate-800 p-1 rounded-md">
                        <Paperclip className="w-4 h-4 text-zinc-300" />
                    </div>
                </label>
                <input
                    type="file"
                    id="cv-upload"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                />
                {userData.cv && (
                    <div className="mt-4">
                        <p className="text-zinc-200 text-sm font-medium">{userData.cv}</p>
                    </div>
                )}
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full mt-4 bg-primary text-white hover:bg-secondary/60 text-lg font-semibold tracking-wide h-14 rounded-full group transition-all">
                Submit CV
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
        </form>
    )
}

// ─── Page component ────────────────────────────────────────────────────────────
const Career = () => {
    const [activeCategory, setActiveCategory] = useState("View all")

    const filteredJobs = activeCategory === "View all"
        ? JOBS
        : JOBS.filter(job => job.category === activeCategory)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-muted selection:text-foreground">
            <Header />
            <main className="flex flex-col pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-70 translate-x-1/3 -translate-y-1/4"></div>

                <div className="max-w-[1280px] w-full mx-auto px-6 md:px-20">
                    <div className="max-w-4xl mb-0 md:mb-12">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-foreground/20 text-foreground text-sm font-medium mb-5 md:mb-8">
                            We're hiring!
                        </div>
                        <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-foreground mb-8">
                            Be part of our mission
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl">
                            We're looking for passionate people to join us on our mission. We value
                            flat hierarchies, clear communication, and full ownership and responsibility.
                        </p>

                        <div className="flex flex-wrap gap-2 md:gap-3 mt-12">
                            {CATEGORIES.map(category => (
                                <Button
                                    key={category}
                                    variant={activeCategory === category ? "default" : "outline"}
                                    onClick={() => setActiveCategory(category)}
                                    className={`rounded-full px-6 py-5 text-sm md:text-base cursor-pointer transition-transform ${activeCategory === category
                                        ? "bg-primary text-background dark:text-white hover:bg-primary/80"
                                        : "bg-transparent text-foreground border-border/40 hover:border-foreground/20 hover:bg-secondary/40"
                                        }`}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="w-full mt-16 border-t border-foreground/10">
                        {filteredJobs.map((job) => (
                            <div key={job.id} className="w-full group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-foreground/10 hover:bg-secondary/20 transition-colors -mx-6 px-6 md:-mx-10 md:px-10 rounded-xl">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="wrapper w-full flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer">
                                            <div className="flex flex-col gap-3">
                                                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                                                    {job.title}
                                                    {job.openingSoon && <span className='text-black/30'> (Opening Soon)</span>}
                                                </h3>
                                                <p className="text-foreground/70 text-base md:text-lg mb-2 max-w-xl">
                                                    {job.description}
                                                </p>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-foreground/20 text-sm font-medium text-foreground/80">
                                                        <MapPin className="w-4 h-4" />
                                                        {job.location}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-foreground/20 text-sm font-medium text-foreground/80">
                                                        <Clock className="w-4 h-4" />
                                                        {job.type}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 md:mt-0 flex items-center">
                                                <span className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                                    Apply
                                                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                </span>
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="md:max-w-[600px] w-full p-0 border-none bg-transparent">
                                        <div className="box w-full bg-zinc-950 p-6 md:p-8 rounded-2xl">
                                            <ApplyForm defaultProfession={job.title} />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        ))}

                        {filteredJobs.length === 0 && (
                            <div className="py-16 text-center text-foreground/60 text-lg">
                                No open positions found for this category. Check back later!
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Career
