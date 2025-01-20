import { useEffect, useRef } from 'react';
import '../index.css';





const AboutUs = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

useEffect(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1, 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scale-up');
      } else {
        entry.target.classList.remove('scale-up');
      }
    });
  }, observerOptions);


  const currentCardRefs = cardRefs.current;

  currentCardRefs.forEach((card) => {
    if (card) {
      observer.observe(card);
    }
  });

  return () => {
    currentCardRefs.forEach((card) => {
      if (card) {
        observer.unobserve(card);
      }
    });
  };
}, []);


  return (
    <div className=" py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 fade-in">About Us</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto fade-in-delay">
          We are a team of passionate professionals, committed to delivering high-quality services while ensuring customer satisfaction at every step.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="bg-white rounded-lg shadow-md p-8 text-center card"
        >
          <img
            className="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto mb-4"
            src="/team/habeeb.jpg"
            alt="Team Member 1"
          />
          <h3 className="text-xl font-semibold text-gray-800">habeeb</h3>
          <p className="text-gray-500">Backend Developer</p>
          <p className="mt-3 mx-12 text-gray-600">
            With over years of experience, habeeb ensures that everything concerning the backennd is executed to perfection.
          </p>
        </div>

        {/* Team Member 2 */}
        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="bg-white rounded-lg shadow-md p-8 text-center card"
        >
          <img
            className="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto mb-4"
            src="/team/memunat.jpg"
            alt="Team Member 2"
          />
          <h3 className="text-xl font-semibold text-gray-800">memunat</h3>
          <p className="text-gray-500">Frontend Developer</p>
          <p className="mt-3 mx-12 text-gray-600">
          memunat fucused on UI/UX design and robust frontend logic to ensure an intuitive user experience
          </p>
        </div>

        {/* Team Member 3 */}
        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="bg-white rounded-lg shadow-md p-8 text-center card"
        >
          <img
            className="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto mb-4"
            src="/team/kliuvert.jpg"
            alt="Team Member 3"
          />
          <h3 className="text-xl font-semibold text-gray-800">Kliuvert</h3>
          <p className="text-gray-500">Lead Developer and Frontend Developer</p>
          <p className="mt-3 mx-12 text-gray-600">
          Kliuvert ensures innovation and technical quality in all our projects. and also endures that the frontend is top notch
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;