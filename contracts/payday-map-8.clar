;; PayDay Data Map: attendance-log
;; Stores on-chain state for payroll operations


(define-map attendance-log
  { employee: principal, day: uint }
  { present: bool, hours: uint }
)


(define-data-var attendance-log-count uint u0)
