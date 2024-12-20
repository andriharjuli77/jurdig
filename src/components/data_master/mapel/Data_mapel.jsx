import React from "react";

function Data_mapel() {
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Mata Pelajaran</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="./Home">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Mapel</li>
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
                <div className="card card card-info card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i class="fas fa-book mr-1"></i>Data Mata Pelajaran
                    </h3>
                    <a
                      href="./Tambah_mapel"
                      class="btn btn-sm btn-primary float-right"
                    >
                      {" "}
                      <i i class="fa fa-plus"></i>
                      Tambah Mapel
                    </a>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table
                      id="example1"
                      className="table table-condensed table-striped"
                    >
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>kode Mapel</th>
                          <th>Nama Mapel</th>
                          <th>Kategori</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>MTK</td>
                          <td>MATEMATIKA</td>
                          <td>PRODUKTIF</td>
                          <td>
                            <a
                              href="./Edit_mapel"
                              class="btn btn-sm btn-outline-success mr-2"
                            >
                              <i i class="fa fa-edit"></i>
                              Edit
                            </a>
                            <a href="" class="btn btn-sm btn-outline-danger">
                              <i i class="fa fa-trash"></i>
                              Delete
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>MTK</td>
                          <td>MATEMATIKA</td>
                          <td>PRODUKTIF</td>
                          <td>
                            <a
                              href=""
                              class="btn btn-sm btn-outline-success mr-2"
                            >
                              <i i class="fa fa-edit"></i>
                              Edit
                            </a>
                            <a href="" class="btn btn-sm btn-outline-danger">
                              <i i class="fa fa-trash"></i>
                              Delete
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>MTK</td>
                          <td>MATEMATIKA</td>
                          <td>PRODUKTIF</td>
                          <td>
                            <a
                              href=""
                              class="btn btn-sm btn-outline-success mr-2"
                            >
                              <i i class="fa fa-edit"></i>
                              Edit
                            </a>
                            <a href="" class="btn btn-sm btn-outline-danger">
                              <i i class="fa fa-trash"></i>
                              Delete
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>No</th>
                          <th>kode Mapel</th>
                          <th>Nama Mapel</th>
                          <th>Kategori</th>
                          <th>Aksi</th>
                        </tr>
                      </tfoot>
                    </table>
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
    </div>
  );
}

export default Data_mapel;
