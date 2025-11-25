import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-8 text-black">Other Ways to Connect</h2>

        {/* Email */}
        <div className="flex items-start gap-4 mb-8">
          <Mail className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-foreground mb-1 text-black">Email Us</h3>
            <p className="text-muted-foreground text-black">adeyemim70@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 mb-8">
          <Phone className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-foreground mb-1 text-black">Call Us</h3>
            <p className="text-muted-foreground text-black">+234 816 477 7998</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-foreground mb-1 text-black">Visit Us</h3>
            <p className="text-muted-foreground text-black">1/3 Oyeshiku Alapere Estate</p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4 text-black">Follow Us on Social Media</h3>
        <div className="flex gap-4">
         
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted text-black hover:bg-orange-100 text-muted-foreground hover:text-orange-500 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
