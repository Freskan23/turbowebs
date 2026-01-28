import React, { createContext, useContext, useState, useEffect } from 'react';

const BusinessContext = createContext();

export const initialBusinessData = {
    // Reporte de Manus (análisis de competencia)
    manusReport: '',

    // Datos Básicos
    nombre: '',
    categoria: '',
    ciudad: '',
    zonaCP: '',
    telefono: '',
    email: '',
    web: '',

    // Oferta/Servicio
    servicios: [], // Tags
    servicioEstrella: '',
    precioDesde: '',
    urgencias24h: false,

    // Diferenciadores
    garantias: '',
    tiempos: '',
    experiencia: '',
    certificaciones: '',
    marcas: '',

    // SEO/Local
    keywordPrincipal: '',
    keywordsSecundarias: [],
    barriosZonas: [],
    urlsObjetivo: [],

    // Tonalidad
    tono: 'cercano', // cercado | formal | canalla
    persona: 'tu', // tu | usted
    emojis: true,

    // Nuevos campos SEO/Analísis (basado en feedback Manus)
    seoScope: 'Todos los anteriores (análisis completo)',
    deliveryFormat: 'Un informe consolidado en Markdown/PDF',
    analysisDepth: 'Solo datos técnicos y Local Pack',
    gbpData: ['Calificación y número de reseñas', 'Horarios y servicios listados'],
    manusAnswers: {} // Respuestas pegadas de Manus por cada slide
};

export const BusinessProvider = ({ children }) => {
    const [businessData, setBusinessData] = useState(() => {
        const saved = localStorage.getItem('masterclass_business_v1');
        return saved ? JSON.parse(saved) : initialBusinessData;
    });

    const [currentModule, setCurrentModule] = useState(1);
    const [demoMode, setDemoMode] = useState(false);
    const [user, setUser] = useState(null); // Para el login con Whitelist

    useEffect(() => {
        localStorage.setItem('masterclass_business_v1', JSON.stringify(businessData));
    }, [businessData]);

    const updateBusinessData = (updates) => {
        setBusinessData(prev => ({ ...prev, ...updates }));
    };

    const calculateCompletion = () => {
        const totalFields = 15; // Estimación de campos clave
        let filled = 0;
        if (businessData.nombre) filled++;
        if (businessData.categoria) filled++;
        if (businessData.ciudad) filled++;
        if (businessData.telefono) filled++;
        if (businessData.servicios.length > 0) filled++;
        if (businessData.servicioEstrella) filled++;
        if (businessData.keywordPrincipal) filled++;
        // ... simplificado para demo
        return Math.round((filled / 7) * 100);
    };

    return (
        <BusinessContext.Provider value={{
            businessData,
            updateBusinessData,
            currentModule,
            setCurrentModule,
            demoMode,
            setDemoMode,
            user,
            setUser,
            completion: calculateCompletion()
        }}>
            {children}
        </BusinessContext.Provider>
    );
};

export const useBusiness = () => useContext(BusinessContext);
