
import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Verificar se já existe uma preferência salva
    const savedPreferences = localStorage.getItem('csc-cookie-preferences');
    if (!savedPreferences) {
      setShowBanner(true);
    } else {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('csc-cookie-preferences', JSON.stringify(allAccepted));
    localStorage.setItem('csc-cookie-consent', 'true');
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('csc-cookie-preferences', JSON.stringify(onlyNecessary));
    localStorage.setItem('csc-cookie-consent', 'true');
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('csc-cookie-preferences', JSON.stringify(preferences));
    localStorage.setItem('csc-cookie-consent', 'true');
    setShowBanner(false);
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Necessários não podem ser desativados
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-warm-200 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-start space-x-4">
          <Cookie className="text-elegant-gold-600 mt-1" size={24} />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-forest-green-800 mb-2">
              Política de Cookies
            </h3>
            <p className="text-neutral-warm-600 mb-4 text-sm">
              Utilizamos cookies para melhorar a sua experiência no nosso website. 
              Pode escolher quais tipos de cookies aceita. Os cookies necessários são 
              sempre ativados para garantir o funcionamento básico do site.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="rounded border-neutral-warm-300"
                  />
                  <span className="text-sm font-medium">Necessários</span>
                </label>
                <p className="text-xs text-neutral-warm-500">
                  Cookies essenciais para o funcionamento do site
                </p>
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handlePreferenceChange('analytics')}
                    className="rounded border-neutral-warm-300"
                  />
                  <span className="text-sm font-medium">Analíticos</span>
                </label>
                <p className="text-xs text-neutral-warm-500">
                  Ajudam-nos a entender como utiliza o site
                </p>
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => handlePreferenceChange('marketing')}
                    className="rounded border-neutral-warm-300"
                  />
                  <span className="text-sm font-medium">Marketing</span>
                </label>
                <p className="text-xs text-neutral-warm-500">
                  Para personalizar anúncios e conteúdo
                </p>
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={() => handlePreferenceChange('functional')}
                    className="rounded border-neutral-warm-300"
                  />
                  <span className="text-sm font-medium">Funcionais</span>
                </label>
                <p className="text-xs text-neutral-warm-500">
                  Melhoram a funcionalidade do site
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAcceptAll}
                className="btn-primary text-sm px-6 py-2"
              >
                Aceitar Todos
              </button>
              <button
                onClick={handleRejectAll}
                className="bg-neutral-warm-200 text-neutral-warm-800 font-medium px-6 py-2 rounded-lg hover:bg-neutral-warm-300 transition-colors text-sm"
              >
                Rejeitar Todos
              </button>
              <button
                onClick={handleSavePreferences}
                className="btn-secondary text-sm px-6 py-2"
              >
                Guardar Preferências
              </button>
            </div>
          </div>
          <button
            onClick={handleRejectAll}
            className="p-2 hover:bg-neutral-warm-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
