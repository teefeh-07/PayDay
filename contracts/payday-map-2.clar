;; PayDay Data Map: payroll-schedule
;; Stores on-chain state for payroll operations


(define-map payroll-schedule
  uint
  { interval: uint, last-run: uint, next-run: uint }
)
