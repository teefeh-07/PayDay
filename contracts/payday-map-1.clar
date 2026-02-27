;; PayDay Data Map: employee-registry
;; Stores on-chain state for payroll operations


(define-map employee-registry
  principal
  { salary: uint, dept: (string-ascii 64), active: bool }
)


(define-data-var employee-registry-count uint u0)


(define-read-only (get-employee-registry-count)
  (var-get employee-registry-count)
)


(define-public (increment-employee-registry-count)
  (begin
    (var-set employee-registry-count (+ (var-get employee-registry-count) u1))
    (ok (var-get employee-registry-count))
  )
)


;; Error constants for employee-registry
(define-constant ERR_NOT_FOUND (err u404))
(define-constant ERR_UNAUTHORIZED (err u403))


;; Map initialized successfully for employee-registry
