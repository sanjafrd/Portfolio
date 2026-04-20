import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/navigation';

export function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 py-24 md:py-32 bg-[#f0e7d7]">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl mb-6 md:mb-8 text-[#5c2c1f]">
            Contact
          </h1>
          {/* Removed descriptive text */}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          <motion.a
            href={CONTACT_INFO.phoneHref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-4 p-6 md:p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all group border border-[#bd988d]/20 text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#702a0c] flex items-center justify-center group-hover:scale-110 transition-transform mb-2">
              <Phone className="w-6 h-6 md:w-8 md:h-8 text-[#f0e7d7]" />
            </div>
            <div>
              <p className="text-sm text-[#bd988d] mb-2 uppercase tracking-wider font-medium">Téléphone</p>
              <p className="text-lg md:text-2xl text-[#5c2c1f] font-semibold">{CONTACT_INFO.phone}</p>
            </div>
          </motion.a>

          <motion.a
            href={CONTACT_INFO.emailHref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-4 p-6 md:p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all group border border-[#bd988d]/20 text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#702a0c] flex items-center justify-center group-hover:scale-110 transition-transform mb-2">
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-[#f0e7d7]" />
            </div>
            <div>
              <p className="text-sm text-[#bd988d] mb-2 uppercase tracking-wider font-medium">Email</p>
              <p className="text-sm sm:text-lg md:text-2xl text-[#5c2c1f] font-semibold whitespace-nowrap">{CONTACT_INFO.email}</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}