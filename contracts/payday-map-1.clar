;; PayDay Data Map: employee-registry
;; Stores on-chain state for payroll operations


(define-map employee-registry
  principal
  { salary: uint, dept: (string-ascii 64), active: bool }
)


(define-data-var employee-registry-count uint u0)


(define-read-only (get-employee-registry-count)
  (var-get employee-registry-count)
)
