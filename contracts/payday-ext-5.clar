;; PayDay Extension Contract #5
;; Function: batch-distribute
;; No as-contract usage

(define-public (batch-distribute (count uint))

  (begin

    (asserts! (> count u0) (err u103))
    (ok count)

  )
)
