import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { getUserByToken, login } from "../core/_requests";
import { toAbsoluteUrl } from "../../../../_metronic/helpers";
// import { useAuth } from "../core/Auth";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../context/AuthContext";

// const loginSchema = Yup.object().shape({
//   email: Yup.string()
//     .email('Wrong email format')
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(3, 'Minimum 3 symbols')
//     .max(50, 'Maximum 50 symbols')
//     .required('Password is required'),
// })

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

export function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const { saveAuth, setCurrentUser } = useAuth();
  const { login } = useAuth();
  const { execute } = useAxios();
  const [formState, setFormState]: any = useState({});

  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: loginSchema,
  //   onSubmit: async (values, { setStatus, setSubmitting }) => {
  //     setLoading(true);
  //     try {
  //       const { data: auth } = await login(values.email, values.password);
  //       saveAuth(auth);
  //       const { data: user } = await getUserByToken(auth.api_token);
  //       setCurrentUser(user);
  //     } catch (error) {
  //       console.error(error);
  //       saveAuth(undefined);
  //       setStatus("The login details are incorrect");
  //       setSubmitting(false);
  //       setLoading(false);
  //     }
  //   },
  // });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormState((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // setLoading(true);

    const response = await execute("/admin/authenticate/login", "POST", {
      mail: formState?.email,
      password: formState?.password,
    });

    if (response?.status === 200) {
      login({
        ...response.data.user,
        access_token: response.data.access_token,
        expires_in: response.data.expires_in,
      });
      navigate("/");
    } else {
      // setError("Credenciales incorrectas, intenta de nuevo.");
    }
  };
  console.log("formState", formState);
  return (
    <form
      className="form w-100"
      onSubmit={handleSubmit}
      noValidate
      id="kt_login_signin_form"
    >
      {/* begin::Heading */}
      <div className="text-center mb-11">
        <h1 className="text-gray-900 fw-bolder mb-3">Iniciar sesión</h1>
        <div className="text-gray-500 fw-semibold fs-6">
          Your Social Campaigns
        </div>
      </div>
      {/* begin::Heading */}

      {/* begin::Login options */}
      <div className="row g-3 mb-9">
        {/* begin::Col */}
        <div className="col-md-6">
          {/* begin::Google link */}
          <a
            href="#"
            className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
          >
            <img
              alt="Logo"
              src={toAbsoluteUrl("media/svg/brand-logos/google-icon.svg")}
              className="h-15px me-3"
            />
            Sign in with Google
          </a>
          {/* end::Google link */}
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className="col-md-6">
          {/* begin::Google link */}
          <a
            href="#"
            className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
          >
            <img
              alt="Logo"
              src={toAbsoluteUrl("media/svg/brand-logos/apple-black.svg")}
              className="theme-light-show h-15px me-3"
            />
            <img
              alt="Logo"
              src={toAbsoluteUrl("media/svg/brand-logos/apple-black-dark.svg")}
              className="theme-dark-show h-15px me-3"
            />
            Sign in with Apple
          </a>
          {/* end::Google link */}
        </div>
        {/* end::Col */}
      </div>
      {/* end::Login options */}

      {/* begin::Separator */}
      <div className="separator separator-content my-14">
        <span className="w-125px text-gray-500 fw-semibold fs-7">
          Or with email
        </span>
      </div>
      {/* end::Separator */}

      {/* {formik.status ? (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      ) : ( */}
      <div className="mb-10 bg-light-info p-8 rounded">
        <div className="text-info">
          Use account <strong>admin@demo.com</strong> and password{" "}
          <strong>demo</strong> to continue.
        </div>
      </div>
      {/* )} */}

      {/* begin::Form group */}
      <div className="fv-row mb-8">
        <label className="form-label fs-6 fw-bolder text-gray-900">
          Correo electrónico
        </label>
        <input
          placeholder="Email"
          // {...formik.getFieldProps("email")}
          // className={clsx(
          //   "form-control bg-transparent",
          //   { "is-invalid": formik.touched.email && formik.errors.email },
          //   {
          //     "is-valid": formik.touched.email && !formik.errors.email,
          //   }
          // )}
          className="form-control bg-transparent"
          type="email"
          name="email"
          autoComplete="off"
          onChange={handleChange}
        />
        {/* {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <span role="alert">{formik.errors.email}</span>
          </div>
        )} */}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="fv-row mb-3">
        <label className="form-label fw-bolder text-gray-900 fs-6 mb-0">
          Contraseña
        </label>
        <input
          type="password"
          autoComplete="off"
          name="password"
          onChange={handleChange}
          className="form-control bg-transparent"
          // {...formik.getFieldProps("password")}
          // className={clsx(
          //   "form-control bg-transparent",
          //   {
          //     "is-invalid": formik.touched.password && formik.errors.password,
          //   },
          //   {
          //     "is-valid": formik.touched.password && !formik.errors.password,
          //   }
          // )}
        />
        {/* {formik.touched.password && formik.errors.password && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.password}</span>
            </div>
          </div>
        )} */}
      </div>
      {/* end::Form group */}

      {/* begin::Wrapper */}
      <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div />

        {/* begin::Link */}
        <Link to="/auth/forgot-password" className="link-primary">
          ¿Has olvidado tu contraseña?
        </Link>
        {/* end::Link */}
      </div>
      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className="d-grid mb-10">
        <button
          type="submit"
          id="kt_sign_in_submit"
          className="btn btn-primary"
          // disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className="indicator-label">Continuar</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              Please wait...
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}

      {/* <div className="text-gray-500 text-center fw-semibold fs-6">
        Not a Member yet?{" "}
        <Link to="/auth/registration" className="link-primary">
          registrarse
        </Link>
      </div> */}
    </form>
  );
}
