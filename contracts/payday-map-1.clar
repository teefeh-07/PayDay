;; PayDay Data Map: employee-registry
;; Stores on-chain state for payroll operations


(define-map employee-registry
  principal
  { salary: uint, dept: (string-ascii 64), active: bool }
)
