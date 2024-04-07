import { Welcome } from './components/Welcome';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Welcome />
        <ColorSchemeToggle />
      </main>
      <Footer />
    </>
  );
}
