import React from "react";

function Modal_rombel() {
  return (
    <>
      <div className="modal fade" id="modal-lg">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Data Anggota Rombel</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {/* start modal konten*/}
            <div className="modal-body">
              <table className="table table-striped">
                <thead className="bg-primary text-light">
                  <tr>
                    <th style={{ width: 10 }}>No</th>
                    <th>Nama Siswa</th>
                    <th>NISN</th>
                    <th>Rombel</th>
                    <th>Opsi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Robi Akbari</td>
                    <td>12345678</td>
                    <td>X TJKT 1</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                      >
                        <i i class="fa fa-trash"></i>Hapus
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>2.</td>
                    <td>Reyhan</td>
                    <td>12345678</td>
                    <td>X TJKT 1</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                      >
                        <i i class="fa fa-trash"></i>Hapus
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>2.</td>
                    <td>Wirdana</td>
                    <td>12345678</td>
                    <td>X TJKT 1</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                      >
                        <i i class="fa fa-trash"></i>Hapus
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>3.</td>
                    <td>Hadi</td>
                    <td>12345678</td>
                    <td>X TJKT 1</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                      >
                        <i i class="fa fa-trash"></i>Hapus
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>Ahmad</td>
                    <td>12345678</td>
                    <td>X TJKT 1</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                      >
                        <i i class="fa fa-trash"></i>Hapus
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* stop modal konten */}
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
      {/* /.modal */}
    </>
  );
}

export default Modal_rombel;
