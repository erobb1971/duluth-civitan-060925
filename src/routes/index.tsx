import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/events" element={<div>Events Page</div>} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes; 