;; PayDay Extension Contract #9
;; Function: request-advance
;; No as-contract usage

(define-public (request-advance (amount uint))

  (begin

    (asserts! (<= amount u10000) (err u106))
    (ok amount)
