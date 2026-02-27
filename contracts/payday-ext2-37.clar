;; PayDay Phase 3 Extension Contract #37
;; Function: get-pay-history
;; Phase 3 - No as-contract usage

(define-public (get-pay-history (employee principal) (month uint))

  (begin

    (ok { paid: u0, month: month })
