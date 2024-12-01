import React from "react";
import Tambah_gtk from "./Tambah_gtk";

function Data_gtk() {
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Data GTK</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="./Home">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Data GTK</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-info card-outline ">
                  <div className="card-tools d-flex justify-content-end mt-3 mr-2">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>

                    {/* <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                    >
                      <i className="fas fa-times" />
                    </button> */}
                  </div>

                  <div className="card-header">
                    <h3 className="card-title">
                      <i class="fa fa-users mr-1"></i>Data Guru dan Tenaga
                      Kependidikan
                    </h3>
                    <button
                      type="button"
                      class="btn btn-sm btn-primary float-right"
                      data-toggle="modal"
                      data-target="#modal-tambah-gtk"
                    >
                      <i class="fa fa-plus"></i>Tambah GTK
                    </button>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* Wrapper untuk card */}
                    <div className="row">
                      {/* Profil Guru 1 */}
                      <div className="col-md-3">
                        <div className="card card-widget widget-user">
                          <div className="widget-user-header bg-info text-white">
                            <h3 className="widget-user-username">
                              <strong>Andri Harjuli, S.Kom</strong>
                            </h3>
                            <h5 className="widget-user-desc">Guru</h5>
                          </div>

                          <div className="widget-user-image">
                            <img
                              className="img-circle elevation-2"
                              src="../dist/img/andri.jpg"
                              alt="User Avatar"
                            />
                          </div>
                          <div className="card-footer">
                            <div className="row d-flex justify-content-center align-items-center">
                              <div class="contact-icon">
                                <span class="badge badge-primary light ">
                                  Informatika
                                </span>
                                <span class="badge badge-success light mx-2">
                                  Konstrasi keahlian
                                </span>
                              </div>
                            </div>
                            <br />
                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                class="btn btn-secondary btn-info btn-sm mr-2"
                                type="button"
                              >
                                <span>
                                  <i class="fa fa-user"></i>Profile
                                </span>
                              </button>
                              <button
                                class="btn btn-secondary btn-sm"
                                type="button"
                              >
                                <span>
                                  <i class="fa-brands fa-whatsapp"></i>
                                  WhatsApp
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end profil guru 1 */}
                      {/* Profil Guru 1 */}
                      <div className="col-md-3">
                        <div className="card card-widget widget-user">
                          <div className="widget-user-header bg-info text-white">
                            <h3 className="widget-user-username">
                              <strong>Andri Harjuli, S.Kom</strong>
                            </h3>
                            <h5 className="widget-user-desc">Guru</h5>
                          </div>
                          <div className="widget-user-image">
                            <img
                              className="img-circle elevation-2"
                              src="../dist/img/andri.jpg"
                              alt="User Avatar"
                            />
                          </div>
                          <div className="card-footer">
                            <div className="row d-flex justify-content-center align-items-center">
                              <div class="contact-icon">
                                <span class="badge badge-primary light ">
                                  Informatika
                                </span>
                                <span class="badge badge-success light mx-2">
                                  Konstrasi keahlian
                                </span>
                              </div>
                            </div>
                            <br />
                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                class="btn btn-secondary btn-info btn-sm mr-2"
                                type="button"
                              >
                                <span>
                                  <i class="fa fa-user"></i>Profile
                                </span>
                              </button>
                              <button
                                class="btn btn-secondary btn-sm"
                                type="button"
                              >
                                <span>
                                  <i class="fa-brands fa-whatsapp"></i>
                                  WhatsApp
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end profil guru 1 */}
                      {/* Profil Guru 1 */}
                      <div className="col-md-3">
                        <div className="card card-widget widget-user">
                          <div className="widget-user-header bg-info text-white">
                            <h3 className="widget-user-username">
                              <strong>Andri Harjuli, S.Kom</strong>
                            </h3>
                            <h5 className="widget-user-desc">Guru</h5>
                          </div>
                          <div className="widget-user-image">
                            <img
                              className="img-circle elevation-2"
                              src="../dist/img/andri.jpg"
                              alt="User Avatar"
                            />
                          </div>
                          <div className="card-footer">
                            <div className="row d-flex justify-content-center align-items-center">
                              <div class="contact-icon">
                                <span class="badge badge-primary light ">
                                  Informatika
                                </span>
                                <span class="badge badge-success light mx-2">
                                  Konstrasi keahlian
                                </span>
                              </div>
                            </div>
                            <br />
                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                class="btn btn-secondary btn-info btn-sm mr-2"
                                type="button"
                              >
                                <span>
                                  <i class="fa fa-user"></i>Profile
                                </span>
                              </button>
                              <button
                                class="btn btn-secondary btn-sm"
                                type="button"
                              >
                                <span>
                                  <i class="fa-brands fa-whatsapp"></i>
                                  WhatsApp
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end profil guru 1 */}
                      {/* Profil Guru 1 */}
                      <div className="col-md-3">
                        <div className="card card-widget widget-user">
                          <div className="widget-user-header bg-info text-white">
                            <h3 className="widget-user-username">
                              <strong>Andri Harjuli, S.Kom</strong>
                            </h3>
                            <h5 className="widget-user-desc">Guru</h5>
                          </div>
                          <div className="widget-user-image">
                            <img
                              className="img-circle elevation-2"
                              src="../dist/img/andri.jpg"
                              alt="User Avatar"
                            />
                          </div>
                          <div className="card-footer">
                            <div className="row d-flex justify-content-center align-items-center">
                              <div class="contact-icon">
                                <span class="badge badge-primary light ">
                                  Informatika
                                </span>
                                <span class="badge badge-success light mx-2">
                                  Konstrasi keahlian
                                </span>
                              </div>
                            </div>
                            <br />
                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                class="btn btn-secondary btn-info btn-sm mr-2"
                                type="button"
                              >
                                <span>
                                  <i class="fa fa-user"></i>Profile
                                </span>
                              </button>
                              <button
                                class="btn btn-secondary btn-sm"
                                type="button"
                              >
                                <span>
                                  <i class="fa-brands fa-whatsapp"></i>
                                  WhatsApp
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end profil guru 1 */}
                    </div>
                    {/* end profil */}
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      <Tambah_gtk />
    </div>
  );
}

export default Data_gtk;
