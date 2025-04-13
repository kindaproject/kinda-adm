import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../core/Auth";
import useAxios from "../../hooks/useAxios";
import { toAbsoluteUrl } from "../../../../_metronic/helpers";

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

export function Login() {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState(initialValues);
  const navigate = useNavigate();
  const { saveAuth, setCurrentUser } = useAuth();
  const { execute } = useAxios();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const response = await execute("/admin/authenticate/login", "POST", {
      mail: formState.email,
      password: formState.password,
    });

    if (response?.status === 200) {
      const { access_token, expires_in, user } = response.data;

      // Guardamos auth (puedes agregar más propiedades si las necesitas)
      saveAuth({
        api_token: access_token,
        // password: formState.password,
        user,
        expires_in,
      });

      // Guardamos el usuario
      setCurrentUser(user);

      navigate("/");
    } else {
      // Aquí puedes manejar errores
      alert("Credenciales incorrectas, intenta de nuevo.");
    }

    setLoading(false);
  };

  return (
    <form className="form w-100" onSubmit={handleSubmit} noValidate>
      <div className="text-center mb-11">
        <h1 className="text-gray-900 fw-bolder mb-3">Iniciar sesión</h1>
        <div className="text-gray-500 fw-semibold fs-6">
          Your Social Campaigns
        </div>
      </div>

      <div className="mb-10 bg-light-info p-8 rounded">
        <div className="text-info">
          Usa el correo <strong>admin@demo.com</strong> y la contraseña{" "}
          <strong>demo</strong> para continuar.
        </div>
      </div>

      <div className="fv-row mb-8">
        <label className="form-label fs-6 fw-bolder text-gray-900">
          Correo electrónico
        </label>
        <input
          placeholder="Email"
          className="form-control bg-transparent"
          type="email"
          name="email"
          autoComplete="off"
          onChange={handleChange}
          value={formState.email}
        />
      </div>

      <div className="fv-row mb-3">
        <label className="form-label fw-bolder text-gray-900 fs-6 mb-0">
          Contraseña
        </label>
        <input
          type="password"
          autoComplete="off"
          name="password"
          onChange={handleChange}
          value={formState.password}
          className="form-control bg-transparent"
        />
      </div>

      <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div />
        <Link to="/auth/forgot-password" className="link-primary">
          ¿Has olvidado tu contraseña?
        </Link>
      </div>

      <div className="d-grid mb-10">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {!loading && <span className="indicator-label">Continuar</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              Por favor espera...
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
