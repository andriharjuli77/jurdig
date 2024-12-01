import React from "react";

function Tambah_gtk() {
  return (
    <>
      <div className="modal fade" id="modal-tambah-gtk">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Tambah Data GTK</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {/* form start */}
              <form className="form-horizontal">
                <div className="card-body">
                  <div className="form-group row">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      Nama Lengkap
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="Nama Lengkap"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword3"
                      className="col-sm-2 col-form-label"
                    >
                      Tanggal Lahir
                    </label>
                    <div
                      className="input-group date col-sm-10"
                      id="reservationdate"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control datetimepicker-input"
                        data-target="#reservationdate"
                      />
                      <div
                        className="input-group-append"
                        data-target="#reservationdate"
                        data-toggle="datetimepicker"
                      >
                        <div className="input-group-text">
                          <i className="fa fa-calendar" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      NUPTK
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="NUPTK"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      NIP / NRP
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="NIP / NRP"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      GURU MAPEL
                    </label>
                    <div className="col-sm-10">
                      <select
                        className="select2"
                        multiple="multiple"
                        data-placeholder="Pilih Mapel Yang di Ampu"
                        style={{ width: "100%" }}
                      >
                        <option>KONSENTRASI KEAHLIAN</option>
                        <option>INFORMATIKA</option>
                        <option>MATEMATIKA</option>
                        <option>BAHASA INDONESIA</option>
                        <option>BAHASA INGGRIS</option>
                        <option>SENI BUDAYA</option>
                        <option>PJOK</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      NO HP
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="No Hp"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      FOTO PROFILE
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group">
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="exampleInputFile"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="exampleInputFile"
                          >
                            Choose file
                          </label>
                        </div>
                        <div className="input-group-append">
                          <span className="input-group-text">Upload</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    ></label>
                    <div className="col-sm-2">
                      <img
                        src="../dist/img/andri.jpg"
                        className="rounded mx-auto d-block"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                {/* /.card-body */}
              </form>
            </div>
            <div className="modal-footer ">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
              >
                Batal
              </button>
              <button type="button" className="btn btn-primary">
                Tambah
              </button>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
      {/* /.modal */}
    </>
  );
}

export default Tambah_gtk;
