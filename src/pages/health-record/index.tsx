// REEMPLAZAR COMPLETAMENTE: src/pages/health-record/index.tsx

import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { measurementsMeta } from './Measurement';
import { labMeasurementsMeta } from './LabMeasurement';

const LabResults = lazy(() => import('./LabResults'));
const MainResult = lazy(() => import('./MainResult'));
const Medications = lazy(() => import('./Medications'));
const Medication = lazy(() => import('./Medication'));
const PrescriptionRenewal = lazy(() => import('./PrescriptionRenewal'));
const Vaccines = lazy(() => import('./Vaccines'));
const Vitals = lazy(() => import('./Vitals'));
const Measurement = lazy(() => import('./Measurement'));
const LabMeasurement = lazy(() => import('./LabMeasurement'));

export const sideMenu = {
  title: 'Registros de Salud',
  menu: [
    { 
      name: 'Vitales',
      href: '/health-record/vitals',
      subMenu: Object.values(measurementsMeta).map(({ title, id }) => ({
        name: title,
        href: `/health-record/vitals/${id}`,
      })),
    },
    { 
      name: 'Laboratorio', 
      href: '/health-record/lab-results',
      subMenu: [
        ...Object.values(labMeasurementsMeta).map(({ title, id }) => ({
          name: title,
          href: `/health-record/lab-results/measure/${id}`,  // ← AÑADIR /measure/
        })),
        { 
          name: '📋 Resultados de Estudios', 
          href: '/health-record/lab-results/reports' 
        },
      ],
    },
    { 
      name: 'Medicación', 
      href: '/health-record/medications' 
    },
    { 
      name: 'Vacunas', 
      href: '/health-record/vaccines' 
    },
  ],
};

export default function HealthRecord(): JSX.Element {
  return (
    <PageLayout sideMenu={sideMenu}>
      <Routes>
        <Route index element={<Navigate replace to={sideMenu.menu[0].href} />} />
        
        {/* Vitales */}
        <Route path="vitals" element={<Vitals />} />
        <Route path="vitals/:measurementId" element={<Measurement />} />
        
        {/* Laboratorio - ORDEN IMPORTANTE: Rutas específicas primero */}
        <Route path="lab-results/measure/:measurementId" element={<LabMeasurement />} />
        <Route path="lab-results/reports" element={<LabResults />} />
        <Route path="lab-results/reports/:resultId" element={<MainResult />} />
        <Route path="lab-results" element={<Navigate replace to="/health-record/lab-results/reports" />} />
        
        {/* Medicación */}
        <Route path="medications" element={<Medications />} />
        <Route path="medications/:medicationId" element={<Medication />} />
        <Route path="medications/:medicationId/prescription-renewal" element={<PrescriptionRenewal />} />
        
        {/* Vacunas */}
        <Route path="vaccines" element={<Vaccines />} />
      </Routes>
    </PageLayout>
  );
}
