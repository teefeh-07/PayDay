;; PayDay Extension Contract #14
;; Function: set-overtime-rate
;; No as-contract usage

(define-public (set-overtime-rate (rate uint))

  (begin

    (asserts! (> rate u0) (err u108))
    (ok rate)
