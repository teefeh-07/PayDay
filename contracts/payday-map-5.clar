;; PayDay Data Map: vesting-schedule
;; Stores on-chain state for payroll operations


(define-map vesting-schedule
  principal
  { total: uint, vested: uint, cliff: uint }
)
