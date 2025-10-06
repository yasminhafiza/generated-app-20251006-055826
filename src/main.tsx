import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import App from '@/App';
import { HomePage } from '@/pages/HomePage';
import { MentalHealthPage } from '@/pages/MentalHealthPage';
import { VolunteerPage } from '@/pages/VolunteerPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { DonorsPage } from '@/pages/DonorsPage';
import { ContactPage } from '@/pages/ContactPage';
import { SolutionsSupportPage } from '@/pages/SolutionsSupportPage';
import { ParentingGuidancePage } from '@/pages/ParentingGuidancePage';
import { CommunityActionPage } from '@/pages/CommunityActionPage';
import { Toaster } from '@/components/ui/sonner';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "mental-health", element: <MentalHealthPage /> },
      { path: "solutions-support", element: <SolutionsSupportPage /> },
      { path: "parenting-guidance", element: <ParentingGuidancePage /> },
      { path: "volunteer", element: <VolunteerPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "donors", element: <DonorsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "community-action", element: <CommunityActionPage /> },
    ]
  },
]);
// Do not touch this code
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
      <Toaster richColors />
    </ErrorBoundary>
  </StrictMode>,
)