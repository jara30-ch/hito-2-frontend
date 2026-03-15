const API_URL = "http://localhost:3000/api"

// obtener todos los productos
export const getProducts = async () => {

  const res = await fetch(`${API_URL}/products`)

  const data = await res.json()

  return data

}

// obtener producto por id
export const getProductById = async (id) => {

  const res = await fetch(`${API_URL}/products/${id}`)

  const data = await res.json()

  return data

}

// registrar usuario
export const registerUser = async (userData) => {

  const res = await fetch(`${API_URL}/auth/register`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(userData)

  })

  const data = await res.json()

  return data

}

// LOGIN
export const loginUser = async (credentials) => {

  const res = await fetch(`${API_URL}/auth/login`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(credentials)

  })

  const data = await res.json()

  return data

}

//agregar productos

export const addProduct = async (productData) => {
  const token = localStorage.getItem("token"); // solo admins logueados

  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(productData)
  });

  if (!res.ok) {
    throw new Error("Error agregando producto");
  }

  const data = await res.json();
  return data;
};