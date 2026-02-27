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


(define-public (increment-attendance-log-count)
  (begin
    (var-set attendance-log-count (+ (var-get attendance-log-count) u1))
    (ok (var-get attendance-log-count))
  )
)


;; Error constants for attendance-log
(define-constant ERR_NOT_FOUND (err u404))
(define-constant ERR_UNAUTHORIZED (err u403))


;; Map initialized successfully for attendance-log
