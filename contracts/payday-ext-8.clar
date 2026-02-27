;; PayDay Extension Contract #8
;; Function: calculate-bonus
;; No as-contract usage

(define-public (calculate-bonus (base uint) (multiplier uint))

  (begin

    (ok (* base multiplier))
