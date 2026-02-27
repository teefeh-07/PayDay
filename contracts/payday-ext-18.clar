;; PayDay Extension Contract #18
;; Function: calculate-deduction
;; No as-contract usage

(define-public (calculate-deduction (gross uint) (deduction uint))

  (begin

    (ok (- gross deduction))

  )
)
