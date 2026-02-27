;; PayDay Extension Contract #10
;; Function: set-tax-rate
;; No as-contract usage

(define-public (set-tax-rate (rate uint))

  (begin

    (asserts! (<= rate u50) (err u107))
    (ok rate)

  )
)
