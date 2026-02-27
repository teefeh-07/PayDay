;; PayDay Data Map: bonus-pool
;; Stores on-chain state for payroll operations


(define-map bonus-pool
  uint
  { amount: uint, distributed: bool, cycle: uint }
)


(define-data-var bonus-pool-count uint u0)


(define-read-only (get-bonus-pool-count)
  (var-get bonus-pool-count)
)


(define-public (increment-bonus-pool-count)
  (begin
    (var-set bonus-pool-count (+ (var-get bonus-pool-count) u1))
    (ok (var-get bonus-pool-count))
  )
)


;; Error constants for bonus-pool
(define-constant ERR_NOT_FOUND (err u404))
(define-constant ERR_UNAUTHORIZED (err u403))
