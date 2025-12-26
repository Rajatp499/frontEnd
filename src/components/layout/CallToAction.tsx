import {motion} from 'framer-motion'
import { ButtonHover } from '../ui/button';

interface CallToActionProps {
    title: string;
    text: string;
    button:string;
}
const CallToAction : React.FC<CallToActionProps> = ({title, text,button}) => {
  return (
    <section className="py-16 sm:py-20">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-primary to-primaryDark rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
             {text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonHover content={button} />
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default CallToAction