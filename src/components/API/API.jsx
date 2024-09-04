import axios from "axios";
// "axios" est une bibliothèque utilisée pour effectuer des requêtes HTTP.
// elle permet de communiquer avec des serveurs pour récupérer ou envoyer des données.

export const fetchProperties = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/properties");

    return response.data;
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de le récupération des données.",
      error
    );
    throw error;
  }
};
