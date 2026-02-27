;; PayDay Data Map: dispute-registry
;; Stores on-chain state for payroll operations


(define-map dispute-registry
  uint
  { employee: principal, status: (string-ascii 32), amount: uint }
)
