'use client';
import { motion } from 'framer-motion';

type AnimationType = 'fadeUp' | 'fadeIn' | 'scaleUp';
interface AnimateProps {
  children: React.ReactNode;
  className: string;
  animation: AnimationType;
}

const scaleUp = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  transition: { duration: 0.4, ease: 'easeOut' },
};

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

const fadeUp = {
  initial: {
    opacity: 0,
    translateY: 20,
  },
  animate: {
    opacity: 1,
    translateY: 0,
  },
  transition: { duration: 0.5, ease: 'easeInOut', delay: 0.2 },
};

const animType = (type: AnimationType) => {
  switch (type) {
    case 'fadeIn':
      return fadeIn;
    case 'fadeUp':
      return fadeUp;
    case 'scaleUp':
      return scaleUp;
    default:
      return fadeIn;
  }
};

export function AnimateDiv({ children, className, animation }: AnimateProps) {
  return (
    <motion.div {...animType(animation)} className={className}>
      {children}
    </motion.div>
  );
}

export function AnimateSection({
  children,
  className,
  animation,
}: AnimateProps) {
  return (
    <motion.section className={className} {...animType(animation)}>
      {children}
    </motion.section>
  );
}

export function AnimateHeader({
  children,
  className,
  animation,
}: AnimateProps) {
  return (
    <motion.header className={className} {...animType(animation)}>
      {children}
    </motion.header>
  );
}
