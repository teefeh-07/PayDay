;; PayDay Data Map: tax-config
;; Stores on-chain state for payroll operations


(define-map tax-config
  uint
  { rate: uint, bracket: uint, deduction: uint }
)


(define-data-var tax-config-count uint u0)
