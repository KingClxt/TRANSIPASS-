import Lottie from 'lottie-react';
import React, { useState } from 'react';
import ok from "../assets/ok.json"
import { motion } from 'motion/react';
export const ValidationModal = ({isOpen, onClose, titre}) => {
  if(!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <motion.div 
        initial={{y:-20}}
        animate={{y:0}}
      className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
          {/* Header */}
          <div className="flex justify-between items-center p-4">
            <h3 className="text-lg font-semibold font-poppins uppercase">{titre}</h3>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Body */}
          <div className="">
            <Lottie loop={false} className='w-72 mx-auto' animationData={ok} />
          </div>
          
          {/* Footer */}
          <div className="p-4 flex w-full">
            <button
              onClick={onClose}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-full rounded-md"
            >
              Fermer
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
