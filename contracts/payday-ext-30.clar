;; PayDay Extension Contract #30
;; Function: claim-vested-tokens
;; No as-contract usage

(define-public (claim-vested-tokens (amount uint))

  (begin

    (asserts! (> amount u0) (err u111))
    (ok amount)

  )
)
