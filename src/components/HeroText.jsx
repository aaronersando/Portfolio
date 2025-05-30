import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";


function HeroText(){
    const words = ["Secure", "Modern", "Scalable"]
    const variants = {
        hidden: {opacity: 0, x: -50},
        visible: { opacity: 1, x:0},
    }

    return(
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">

            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1 
                    className="text-4xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1}}
                >
                    Hello, I'm <span className="text-purple-300">Aaron</span>!</motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p 
                        className="text-6xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2}}
                    >
                        A  
                        <span className="text-purple-200"> Software Engineer</span><br/> Dedicated in Building</motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5}}
                    >
                        <FlipWords 
                        className={"font-black text-white text-8xl"}
                        words={words}/>
                    </motion.div>
                    <motion.p 
                        className="text-6xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8}}
                        >Software Solutions</motion.p>
                </div>
            </div>


            {/* Mobile View */}
            <div className="flex flex-col space-y-8 md:hidden">
                <motion.p 
                    className="text-4xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1}}
                    >Hello, I'm Aaron!</motion.p>
                <div>
                    <motion.p 
                        className="text-5xl font-black text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2}}
                        >Building</motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5}}
                    >
                        <FlipWords 
                        className={"font-bold text-white text-7xl"}
                        words={words}/>
                    </motion.div>
                    <motion.p 
                        className="text-5xl font-black text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8}}
                    >Software Applications</motion.p>
                </div>
            </div>

        </div>
    )
}

export default HeroText;