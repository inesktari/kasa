export const fetchProperties = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/properties");

    if (!response.ok) {
      return { error: true, message: `Erreur HTTP: ${response.status}` };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      error: true,
      message: "Erreur lors de la récupération des données.",
    };
  }
};
