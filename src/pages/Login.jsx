import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  return (

    <div className="container mt-5 d-flex justify-content-center">

      <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>

        <h2 className="text-center mb-4">Iniciar sesión</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            navigate("/profile")
          }}
        >

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingresa tu email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Iniciar sesión
          </button>

        </form>

        <div className="text-center mt-4">

          <p>¿No tienes cuenta?</p>

          <Link to="/register" className="btn btn-outline-secondary w-100">
            Registrarse
          </Link>

        </div>

      </div>

    </div>

  )
}

export default Login
