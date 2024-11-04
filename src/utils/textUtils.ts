export const getArabicTextClass = (language: 'en' | 'ar', size: 'sm' | 'base' | 'lg' | 'xl' = 'base') => {
  if (language !== 'ar') return '';
  
  const sizes = {
    sm: 'text-[1.1em]',
    base: 'text-[1.15em]',
    lg: 'text-[1.25em]',
    xl: 'text-[1.35em]'
  };
  
  return sizes[size];
}; 