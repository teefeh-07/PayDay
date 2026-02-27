;; PayDay Data Map: bonus-pool
;; Stores on-chain state for payroll operations


(define-map bonus-pool
  uint
  { amount: uint, distributed: bool, cycle: uint }
)
