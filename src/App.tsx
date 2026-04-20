import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { RealisationsPage } from './components/pages/RealisationsPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { ProjectDetailPage } from './components/pages/ProjectDetailPage';
import { scrollToTop } from './utils/helpers';

export type PageType = 'home' | 'realisations' | 'about' | 'contact' | 'project';
export type FilterType = 'all' | 'entreprise' | 'ecole';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [projectFilter, setProjectFilter] = useState<FilterType>('all');

  const navigateToProject = (projectId: number) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project');
    scrollToTop();
  };

  const handleFilteredNavigation = (filter: FilterType) => {
    setProjectFilter(filter);
    setCurrentPage('realisations');
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        onFilteredNavigation={handleFilteredNavigation}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'realisations' && <RealisationsPage navigateToProject={navigateToProject} filter={projectFilter} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'project' && selectedProjectId && (
          <ProjectDetailPage projectId={selectedProjectId} setCurrentPage={setCurrentPage} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}
