import React from 'react'

function Tambah_mapel() {
  return (
    <div>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Tambah Mata Pelajaran</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="./Mapel">Mapel</a></li>
              <li className="breadcrumb-item active">Tambah Mapel</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          {/* left column */}
          <div className="col-md-12">
            {/* general form elements */}
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Input Data Mapel</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form>
                <div className="card-body">
                  <div className="form-group">
                    <label>kode Mapel</label>
                    <input type="" className="form-control" placeholder="Masukan Kode Mapel" />
                  </div>
                  <div className="form-group">
                    <label>Nama Mapel</label>
                    <input type="" className="form-control" placeholder="Masukan Nama Mapel" />
                  </div>

                  <div className="form-group">
                    <label>Kategori</label>
                    <select className="form-control select2" style={{width: '100%'}}>
                      <option selected="selected">Pilih Kategori</option>
                      <option>UMUM</option>
                      <option>PRODUKTIF</option>
                    </select>
                  </div>

                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <a href="./Mapel" className="btn btn-primary mr-2">Tambah</a>
                  <a href="./Mapel" className="btn btn-warning">Batal</a>
                </div>
              </form>
            </div>
            {/* /.card */}
          </div>
          {/*/.col (right) */}
        </div>
        {/* /.row */}
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
</div>
  )
}

export default Tambah_mapel