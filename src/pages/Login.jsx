import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate() // Hook untuk navigasi

  const handleSignIn = (e) => {
    e.preventDefault() // Mencegah reload halaman
    navigate('/Home') // Arahkan ke halaman Home
  }
   
  return (
    <div>
        <body className="hold-transition login-page">
        <div className="login-box">
  {/* /.login-logo */}
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a href="" className="h1"><b>Admin</b>JURDIG</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Masukan username dan password anda</p>
      <form onSubmit={handleSignIn}>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Username" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
           <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</body>
    </div>

  )
}

export default Login