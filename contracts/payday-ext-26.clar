;; PayDay Extension Contract #26
;; Function: escrow-deposit
;; No as-contract usage

(define-public (escrow-deposit (amount uint))

  (begin

    (asserts! (> amount u0) (err u110))
    (ok amount)

  )
)
