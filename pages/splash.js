
import { motion } from "framer-motion"

 const list = {
    visible: {
      opacity: 1,
      y: 0,
      delay: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: -100,
      delay: 1,
      transition: {
        ease: 'easeInOut',
        when: "afterChildren",
      },
    },
  }

  const items = {
    visible: { opacity: 1, y: 0, delay: 1},
    hidden: { opacity: 0, y: -100, delaay: 1},
  }

export default function Splash() {
return (
    <div className="flex justify-center align-middle px-1 py-50% lg:m-64 sm:m-auto ">
        <motion.div  ease='easeInOut' variants={list} animate={{ 
            opacity: 0,
            transition: {
             delay: 3
            }
        }}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={list}>
                <motion.span variants={items} className="font-JosefinRegular text-9xl text-zinc-400">Hello! </motion.span>
                <motion.span variants={items} className="font-JosefinRegular text-9xl text-zinc-400">I'm </motion.span>
                <motion.span variants={items} className="font-Dafoe text-9xl">Tayte.</motion.span>
            </motion.div>       
        </motion.div>           
    </div>
    )
}

