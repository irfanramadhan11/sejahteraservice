import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      title: 'Perbaikan Kipas Angin',
      category: 'Kipas Angin',
      image: 'https://images.unsplash.com/photo-1665298455913-dd43714f5ad1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Perbaikan Mesin Cuci',
      category: 'Mesin Cuci',
      image: 'https://images.unsplash.com/photo-1662220984920-3bd1f88e846f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Perbaikan Kompor',
      category: 'Kompor',
      image: 'https://plus.unsplash.com/premium_photo-1661889228348-3928f5df1239?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Perbaikan Magic Com',
      category: 'Magic Com',
      image: 'https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Perbaikan Set Top Box',
      category: 'Televisi',
      image: 'https://images.unsplash.com/photo-1574974409771-cebec54deb00?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Perbaikan Setrika',
      category: 'Setrika',
      image: 'https://images.unsplash.com/photo-1540544093-b0880061e1a5?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Perbaikan Raket Nyamuk',
      category: 'Raket Nyamuk',
      image: 'https://images.unsplash.com/photo-1615326882458-e0d45b097f55?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Perbaikan Regulator Gas',
      category: 'Regulator Gas',
      image: 'https://images.unsplash.com/photo-1759750951607-703dd5c997ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Perbaikan Pompa Air',
      category: 'Pompa Air',
      image: 'https://images.unsplash.com/photo-1639600993675-2281b2c939f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Perbaikan Speaker Aktif',
      category: 'Speaker Aktif',
      image: 'https://images.unsplash.com/photo-1531104985437-603d6490e6d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            GALERI
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beberapa jenis perangkat elektronik
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(index)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                alt={`${item.title} - professional electronics repair work`} 
                className="w-full h-80 object-cover" 
                src={item.image}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-red-600 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full cursor-default"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <img 
                  alt={`${galleryItems[selectedImage].title} - enlarged view`} 
                  className="w-full h-auto rounded-2xl" 
                  src={galleryItems[selectedImage].image}
                />
                <div className="bg-white rounded-b-2xl p-6">
                  <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {galleryItems[selectedImage].category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {galleryItems[selectedImage].title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;