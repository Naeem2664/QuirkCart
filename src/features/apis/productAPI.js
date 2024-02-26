
export const fetchMensProducts=async () =>{
    const response= await fetch('http://localhost:8080/products')
    if(!response.ok){
        console.log("Failed to fetch products")
    }
    const data=await response.json()
    return data
}
export const fetchWomensProducts=async () =>{
    const response= await fetch('http://localhost:8080/smartphones')
    if(!response.ok){
        console.log("Failed to fetch products")
    }
    const data=await response.json()
    return data
}


/* const fetchAllProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8080/products');
    const data=await response.json()
    return data; // Assuming your API returns an array of products
  } catch (error) {
    throw new Error('Failed to fetch products: ' + error.message);
  }
};*/