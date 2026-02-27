;; PayDay Extension Contract #16
;; Function: submit-expense
;; No as-contract usage

(define-public (submit-expense (amount uint) (category (string-ascii 32)))

  (begin

    (asserts! (> amount u0) (err u109))
    (ok amount)

  )
)
