;; PayDay Phase 3 Extension Contract #36
;; Function: set-max-salary
;; Phase 3 - No as-contract usage

(define-public (set-max-salary (max uint))

  (begin

    (asserts! (> max u0) (err u204))
    (ok max)
