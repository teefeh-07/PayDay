;; PayDay Data Map: payroll-schedule
;; Stores on-chain state for payroll operations


(define-map payroll-schedule
  uint
  { interval: uint, last-run: uint, next-run: uint }
)


(define-data-var payroll-schedule-count uint u0)


(define-read-only (get-payroll-schedule-count)
  (var-get payroll-schedule-count)
)


(define-public (increment-payroll-schedule-count)
  (begin
    (var-set payroll-schedule-count (+ (var-get payroll-schedule-count) u1))
    (ok (var-get payroll-schedule-count))
  )
)


;; Error constants for payroll-schedule
(define-constant ERR_NOT_FOUND (err u404))
(define-constant ERR_UNAUTHORIZED (err u403))


;; Map initialized successfully for payroll-schedule
