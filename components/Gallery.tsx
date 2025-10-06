'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryProps {
  images: string[];
}

export const Gallery = ({ images }: GalleryProps) => (
  <div className="grid gap-6 md:grid-cols-3">
    {images.map((image, index) => (
      <motion.div
        key={image}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
      >
        <Image
          src={image}
          alt="Concept art"
          width={640}
          height={480}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </motion.div>
    ))}
  </div>
);
