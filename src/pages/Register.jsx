import { Link } from "react-router-dom"

const Register = () => {
  return (

    <div className="container mt-5 d-flex justify-content-center">

      <div className="card p-4 shadow" style={{ maxWidth: "700px", width: "100%" }}>

        <h2 className="text-center mb-4">Crear cuenta</h2>

        <form>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Apellido</label>
              <input type="text" className="form-control" />
            </div>

          </div>


          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>


          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input type="text" className="form-control" />
          </div>


          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">País</label>
              <input type="text" className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Ciudad</label>
              <input type="text" className="form-control" />
            </div>

          </div>


          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Repetir contraseña</label>
              <input type="password" className="form-control" />
            </div>

          </div>


          <button className="btn btn-primary w-100 mt-3">
            Registrarte
          </button>

        </form>


        <div className="text-center mt-4">

          <p>¿Ya tienes una cuenta?</p>

          <Link to="/login" className="btn btn-outline-secondary w-100">
            Iniciar sesión
          </Link>

        </div>

      </div>

    </div>

  )
}

export default Register 