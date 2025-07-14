import useInView from '../hooks/useInView';

export default function FadeInSection({ children }) {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: '0.3s' }}
    >
      {children}
    </div>
  );
}
