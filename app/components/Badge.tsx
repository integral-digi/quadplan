"use client"
import { motion } from "framer-motion"

const Badge = () => {
    return (
        <motion.section className="w-32 h-32 bg-transparent absolute -bottom-24 right-0 lg:-bottom-36 lg:hidden"
            initial={{ 'rotate': '0deg' }}
            animate={{ 'rotate': '360deg' }}
            transition={{ duration: 15, repeat: Infinity }}
        >
            <img 
                src="/assets/work-badge.svg" 
                alt="work badge" 
                className="w-32 h-32" 
            />
        </motion.section>
    )
}

export default Badge;