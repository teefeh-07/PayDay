;; PayDay Extension Contract #6
;; Function: set-pay-schedule
;; No as-contract usage

(define-public (set-pay-schedule (interval uint))

  (begin

    (asserts! (> interval u0) (err u104))
    (ok interval)
