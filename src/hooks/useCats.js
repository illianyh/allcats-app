import { useState, useEffect } from "react";
import axios from "axios";
const useCats = () => {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCats = async () => {
      // set loading Before API operation starts
      setLoading(true);
      setError(false);
      try {
        const result = await axios.get(
          "https://5e5932cd7777050014463360.mockapi.io/cats"
        );
        setCats(result.data);
      } catch (error) {
        setError(true);
      }
      // After API operation end
      setLoading(false);
    };
    fetchCats();
  }, []);

  return {
    cats,
    error,
    loading,
  };
};

export default useCats;
