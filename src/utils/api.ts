export const fetchData = async (endpoint: string) => {
    try {
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch data:', error);
      return null;
    }
  };
  