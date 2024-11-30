import React from "react";

function Header() {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <span>
              <strong>
                SMK NEGARA KONOHA | Genap | Tahun Pelajaran 2024-2025
              </strong>
            </span>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item d-none d-sm-inline-block">
            <a href="./" class="nav-link">
              <i class="fas fa-sign-out-alt"></i> Keluar
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
