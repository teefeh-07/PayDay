;; PayDay Data Map: dispute-registry
;; Stores on-chain state for payroll operations


(define-map dispute-registry
  uint
  { employee: principal, status: (string-ascii 32), amount: uint }
)


(define-data-var dispute-registry-count uint u0)


(define-read-only (get-dispute-registry-count)
  (var-get dispute-registry-count)
)


(define-public (increment-dispute-registry-count)
  (begin
    (var-set dispute-registry-count (+ (var-get dispute-registry-count) u1))
    (ok (var-get dispute-registry-count))
  )
)


;; Error constants for dispute-registry
(define-constant ERR_NOT_FOUND (err u404))
(define-constant ERR_UNAUTHORIZED (err u403))


;; Map initialized successfully for dispute-registry
