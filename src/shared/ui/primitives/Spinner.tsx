import { classMerger } from '@shared/utils/classMerger'
import { type HTMLMotionProps, motion } from 'motion/react'

/**
 * A loading spinner component with animated elements.
 * @param props - HTML motion props for the spinner container.
 * @returns A Spinner component.
 */
export const Spinner = ({ className, ...props }: HTMLMotionProps<'div'>) => (
  <motion.div
    className={classMerger(
      'relative inline-block min-h-12 min-w-12 size-12',
      className,
    )}
    {...props}
  >
    <motion.div className="absolute inset-0 border-4 border-muted/40 rounded-full" />
    <motion.div
      className="absolute inset-0 border-4 border-transparent border-t-primary-bg-contrast border-r-primary-bg-contrast rounded-full"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
    <motion.div
      className="absolute inset-1 border-2 border-transparent border-t-primary-muted border-l-primary-muted rounded-full"
      animate={{ rotate: -360 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 w-2 h-2 -mt-1 -ml-1 bg-gradient-to-r from-primary-bg-contrast to-primary-muted rounded-full"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </motion.div>
)
