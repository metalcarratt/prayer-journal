const loadScript = () => {
    const existingScript = document.getElementById('gsi');  if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';    
        script.id = 'gsi';
        document.body.appendChild(script);
      }
}

export default loadScript;