import Home from '../components/Home';
import Manifesto from '../components/Manifesto';
import Project from '../components/Project';
import FadeInSection from '../components/FadeInSection';

export default function Homepage() {
  return (
    <main className="container">
      <FadeInSection><Home /></FadeInSection>
      <FadeInSection><Manifesto /></FadeInSection>
      <FadeInSection><Project /></FadeInSection>
    </main>
  );
}
