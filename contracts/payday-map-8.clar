;; PayDay Data Map: attendance-log
;; Stores on-chain state for payroll operations


(define-map attendance-log
  { employee: principal, day: uint }
  { present: bool, hours: uint }
)
