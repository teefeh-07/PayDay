;; PayDay Data Map: tax-config
;; Stores on-chain state for payroll operations


(define-map tax-config
  uint
  { rate: uint, bracket: uint, deduction: uint }
)


(define-data-var tax-config-count uint u0)


(define-read-only (get-tax-config-count)
  (var-get tax-config-count)
)


(define-public (increment-tax-config-count)
  (begin
    (var-set tax-config-count (+ (var-get tax-config-count) u1))
    (ok (var-get tax-config-count))
  )
)


;; Error constants for tax-config
(define-constant ERR_NOT_FOUND (err u404))
(define-constant ERR_UNAUTHORIZED (err u403))


;; Map initialized successfully for tax-config
