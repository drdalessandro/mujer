// CREAR NUEVO ARCHIVO: src/pages/health-record/LifeEssential8Dashboard.tsx

import { getReferenceString } from '@medplum/core';
import { Patient } from '@medplum/fhirtypes';
import { useMedplum } from '@medplum/react';
import { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import InfoSection from '../../components/InfoSection';

interface LE8Score {
  step: string;
  icon: string;
  value: number | string;
  status: 'optimal' | 'intermediate' | 'poor' | 'unknown';
  color: string;
}

const getStatusColor = (status: string): string => {
  switch(status) {
    case 'optimal': return 'bg-green-100 text-green-800 border-green-300';
    case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    case 'poor': return 'bg-red-100 text-red-800 border-red-300';
    default: return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

export default function LifeEssential8Dashboard(): JSX.Element {
  const medplum = useMedplum();
  const patient = medplum.getProfile() as Patient;
  const [scores, setScores] = useState<LE8Score[]>([]);
  const [overallScore, setOverallScore] = useState<number>(0);

  useEffect(() => {
    const fetchLatestObservations = async () => {
      // Aquí iría la lógica para obtener las últimas observaciones
      // y calcular los scores de cada componente

      const le8Scores: LE8Score[] = [
        {
          step: 'Alimentación Saludable',
          icon: '🍎',
          value: 'Pendiente',
          status: 'unknown',
          color: getStatusColor('unknown'),
        },
        {
          step: 'Actividad Física',
          icon: '🏃‍♀️',
          value: 'Pendiente',
          status: 'unknown',
          color: getStatusColor('unknown'),
        },
        // ... los demás pasos
      ];

      setScores(le8Scores);
    };

    fetchLatestObservations();
  }, [medplum, patient]);

  return (
    <>
      <PageTitle title="Life's Essential 8 - Salud Cardiovascular" />
      
      <div className="mb-8 rounded-lg bg-gradient-to-r from-red-50 to-pink-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Score Total: {overallScore}/100
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-gradient-to-r from-red-500 to-pink-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${overallScore}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {overallScore >= 80 && 'Excelente salud cardiovascular'}
          {overallScore >= 50 && overallScore < 80 && 'Salud cardiovascular moderada'}
          {overallScore < 50 && 'Requiere mejorar hábitos cardiovasculares'}
        </p>
      </div>

      <InfoSection title="Los 8 Pasos para tu Salud Cardiovascular">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {scores.map((score, index) => (
            <div 
              key={index}
              className={`rounded-lg border-2 p-4 ${score.color}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{score.icon}</span>
                  <div>
                    <h3 className="font-semibold">{score.step}</h3>
                    <p className="text-sm opacity-75">{score.value}</p>
                  </div>
                </div>
                <button className="text-sm underline">
                  Ver detalles →
                </button>
              </div>
            </div>
          ))}
        </div>
      </InfoSection>

      <div className="mt-6 rounded-lg bg-blue-50 p-4 border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">
          💡 Recomendaciones Personalizadas
        </h3>
        <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
          <li>Registra tus mediciones regularmente para un seguimiento preciso</li>
          <li>Consulta con tu médico sobre valores fuera de rango</li>
          <li>Establece metas realistas y alcanzables</li>
        </ul>
      </div>
    </>
  );
}
