// hooks/useFormValidation.ts
import { useState } from 'react';

export type FormFields = {
  name: string;
  email: string;
  city: string;
};

export type FormErrors = {
  name?: string;
  email?: string;
  city?: string;
};

export type FormValidationResult = {
  formData: FormFields;
  handleChange: (field: keyof FormFields, value: string) => void;
  errors: FormErrors;
  successMessage: string;
  setSuccessMessage: (message: string) => void;
  validateForm: () => boolean;
  resetForm: () => void;
};

export function useFormValidation() {
  const initialFormState = {
    name: '',
    email: '',
    city: ''
  };

  const [formData, setFormData] = useState<FormFields>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (field: keyof FormFields, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpa erros quando o usuário digita
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(formData.name)) {
      newErrors.name = 'Apenas letras são permitidas';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Cidade é obrigatória';
    } else if (formData.city.trim().length < 2) {
      newErrors.city = 'Mínimo 2 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setErrors({});
    setSuccessMessage('');
  };

  return {
    formData,
    handleChange,
    errors,
    successMessage,
    setSuccessMessage,
    validateForm,
    resetForm
  };
}