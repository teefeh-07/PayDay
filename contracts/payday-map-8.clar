;; PayDay Data Map: attendance-log
;; Stores on-chain state for payroll operations


(define-map attendance-log
  { employee: principal, day: uint }
  { present: bool, hours: uint }
)


(define-data-var attendance-log-count uint u0)


(define-read-only (get-attendance-log-count)
  (var-get attendance-log-count)
)
