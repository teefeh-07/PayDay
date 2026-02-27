;; PayDay Phase 3 Extension Contract #44
;; Function: burn-tokens
;; Phase 3 - No as-contract usage

(define-public (burn-tokens (amount uint))

  (begin

    (asserts! (> amount u0) (err u206))
    (ok amount)

  )
)

;; Event log for burn-tokens
(define-data-var last-caller principal tx-sender)
