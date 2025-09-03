function useProducts (){
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

   useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (response.status >= 400) {
            throw new Error("server error");
        }  
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error =>setError(error))
      .finally(() => setLoading(false));
  }, []);

  return {products, error, loading}
}