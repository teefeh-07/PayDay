;; PayDay Phase 3 Extension Contract #38
;; Function: dispute-payment
;; Phase 3 - No as-contract usage

(define-public (dispute-payment (pay-id uint) (reason (string-ascii 128)))

  (begin

    (asserts! (> pay-id u0) (err u205))
    (ok pay-id)
