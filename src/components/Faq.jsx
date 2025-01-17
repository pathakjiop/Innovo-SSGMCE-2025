import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqImage } from '../assets';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';


const questions = [
  [
    {
      id: 1,
      question: "Who can participate?",
      answer: "Anyone of any age can participate in this hackathon! Whether you're a beginner or an experienced developer, we welcome all enthusiasts to join and create something amazing."
    },
    {
      id: 2,
      question: "What if this is my first hackathon?",
      answer: "Congratulations on considering your first hackathon! This is a great opportunity for beginners. We provide expert sessions, mentorship, and guidance throughout the event to help you transform your ideas into projects."
    }
  ],
  [
    {
      id: 3,
      question: "Do I need a team?",
      answer: "While you can work solo, we encourage forming teams of 2-4 members. Don't worry if you don't have a team - we'll have team formation sessions at the start of the event!"
    },
    {
      id: 4,
      question: "What should I bring?",
      answer: "Bring your laptop, charger, and your creativity! We'll provide the workspace, internet, meals, and plenty of coffee to keep you going throughout the event."
    }
  ],
  [
    {
      id: 5,
      question: "Is there a registration fee?",
      answer: "No, participation is completely free! We believe in making technology accessible to everyone. All meals, swag, and resources are provided at no cost."
    },
    {
      id: 6,
      question: "Will there be prizes?",
      answer: "Yes! We have exciting prizes for different categories including Best Overall Project, Most Innovative Idea, Best UI/UX, and more. Total prize pool exceeds $5000!"
    }
  ]
];

export default function Faq() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentPage((prev) => (prev + newDirection + questions.length) % questions.length);
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-n-8" id='faq'>
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Gradient Effect */}
              <div className="absolute -bottom-10 w-full h-[240px] bg-gradient-to-t from-color-2/40 to-transparent blur-2xl"></div>
              
              {/* Window Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-n-6 bg-n-7">
                {/* Window Controls */}
                <div className="h-8 bg-n-8 border-b border-n-6 flex items-center gap-2 px-4">
                  <div className="w-3 h-3 rounded-full bg-color-3"></div>
                  <div className="w-3 h-3 rounded-full bg-color-2"></div>
                  <div className="w-3 h-3 rounded-full bg-color-1"></div>
                </div>
                
                {/* Image Container */}
                <div className="p-8">
                  <img
                    src={faqImage}
                    alt="FAQ Illustration"
                    width={100}
                    height={100}
                    className="w-full h-auto"
                  />

                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl text-n-1 mb-4">
                Here are some answers to
              </h2>
              <div className="relative inline-block">
                <h2 className="text-3xl sm:text-4xl font-bold text-n-1">
                  Questions
                </h2>
                <div className="absolute -top-2 -right-8 w-[120%] h-full bg-color-2/40 blur-2xl -z-10"></div>
              </div>
            </div>

            {/* FAQ Questions */}
            <div className="relative h-[400px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute w-full"
                >
                  <div className="space-y-8">
                    {questions[currentPage].map((item) => (
                      <div key={item.id} className="space-y-3">
                        <h3 className="text-xl sm:text-2xl font-semibold text-n-1">
                          {item.question}
                        </h3>
                        <p className="text-n-3 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => paginate(-1)}
                className="p-2 rounded-full text-n-1 hover:text-color-3 transition-colors duration-200"
              >
                <ArrowLeftCircle className="w-8 h-8" />
              </button>
              <div className="flex gap-2">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      currentPage === index ? 'bg-color-1' : 'bg-n-6'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => paginate(1)}
                className="p-2 rounded-full text-n-1 hover:text-color-3 transition-colors duration-200"
              >
                <ArrowRightCircle className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
