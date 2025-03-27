
import { useEffect } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";

const Index = () => {
  useEffect(() => {
    // Add dashboard grid styles to body
    document.body.classList.add('dashboard-styles');
    
    // Clean up function
    return () => {
      document.body.classList.remove('dashboard-styles');
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .dashboard-grid-medium {
          grid-column: span 1;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .glass-card-premium {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
        }

        @media (min-width: 768px) {
          .dashboard-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .dashboard-grid-medium {
            grid-column: span 2;
          }
        }
      `}</style>
      <DashboardLayout />
    </>
  );
};

export default Index;
