export default function OutlinedCardTwo() {
  return (
    <div className="card p-3 border border-light">
      <div className="card-body p-0">
        <p className="mb-2 fw-medium text-dark">License Document</p>

        <div className="d-flex align-items-center flex-wrap">
          <span className="badge bg-custom px-3 py-2 me-3">
            <span className="text-green fw-semibold">license_C1_john.pdf</span>
          </span>

          <div className="d-flex align-items-center me-3">
            <i
              className="bi bi-eye text-muted me-1"
              style={{ color: "#4A4A4A" }}
            ></i>
            <span
              className="text-muted"
              style={{ color: "#4A4A4A", fontWeight: 500 }}
            >
              View
            </span>
          </div>

          <div className="d-flex align-items-center">
            <i
              className="bi bi-download text-success me-1"
              style={{ color: "#047720" }}
            ></i>
            <span className="text-green fw-semibold">Download</span>
          </div>
        </div>
      </div>
    </div>
  );
}
