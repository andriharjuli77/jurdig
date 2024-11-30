import React from "react";

function Edit_rombel() {
  return (
    <>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Edit Kelas</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="./Rombel">Data kelas</a>
                  </li>
                  <li className="breadcrumb-item active">Edit Kelas</li>
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
              {/* left column */}
              <div className="col-md-12">
                {/* general form elements */}
                <div className="card card-success">
                  <div className="card-header">
                    <h3 className="card-title">Edit Data Kelas</h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <form>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Nama Kelas</label>
                        <input
                          type=""
                          className="form-control"
                          placeholder="Masukan Nama Kelas"
                        />
                      </div>
                      <div className="form-group">
                        <label>Tingkat</label>
                        <select
                          className="form-control select2"
                          style={{ width: "100%" }}
                        >
                          <option selected="selected">Pilih Tingkat</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Jurusan</label>
                        <select
                          className="form-control select2"
                          style={{ width: "100%" }}
                        >
                          <option selected="selected">Pilih Jurusan</option>
                          <option>Teknik Komputer dan Jaringan</option>
                          <option>Rekayasa Perangkat Lunak</option>
                          <option>Desain Komunikasi Visual</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Wali Kelas</label>
                        <select
                          className="form-control select2"
                          style={{ width: "100%" }}
                        >
                          <option selected="selected">Pilih Walas</option>
                          <option>Andri Harjuli</option>
                          <option>Hadi Saputro</option>
                          <option>Robi Akbari</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Jumlah Siswa</label>
                        <input
                          type=""
                          className="form-control"
                          placeholder="Masukan Jumlah Siswa"
                        />
                      </div>

                      <div className="form-group">
                        <label>Rombongan Belajar</label>
                        <select
                          className="form-control select2"
                          style={{ width: "100%" }}
                        >
                          <option selected="selected">Pilih Rombel</option>
                          <option>X TJKT 1</option>
                          <option>X TJKT 2</option>
                          <option>X TJKT 3</option>
                        </select>
                      </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <a href="./Rombel" className="btn btn-success mr-2">
                        Update
                      </a>
                      <a href="./Rombel" className="btn btn-warning">
                        Batal
                      </a>
                    </div>
                  </form>
                </div>
                {/* /.card */}
              </div>
              {/*/.col (right) */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </>
  );
}

export default Edit_rombel;
