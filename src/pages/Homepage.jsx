import Home from '../components/Home';
import About from '../components/About';
import UseCases from '../components/UseCases';
import ServicePackages from '../components/ServicePackages';
import Faq from '../components/Faq';
import FadeInSection from '../components/FadeInSection';

export default function Homepage() {
  return (
    <main className="container">
      <FadeInSection><Home /></FadeInSection>
      <FadeInSection><About /></FadeInSection>
      <FadeInSection><UseCases /></FadeInSection>
      <FadeInSection><ServicePackages /></FadeInSection>
      <FadeInSection><Faq /></FadeInSection>
    </main>
  );
}
