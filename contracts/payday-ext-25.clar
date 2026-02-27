;; PayDay Extension Contract #25
;; Function: convert-currency
;; No as-contract usage

(define-public (convert-currency (amount uint) (rate uint))

  (begin

    (ok (* amount rate))

  )
)
