const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });
    } catch (error) {
      throw new Error('Service worker registration failed');
    }
  }
};

registerServiceWorker();
