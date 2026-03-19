// composables/useScroll.ts
export const useScroll = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    } else {
      console.warn(`Sectie met id "${id}" niet gevonden.`);
    }
  };

  return {
    scrollToSection
  };
};