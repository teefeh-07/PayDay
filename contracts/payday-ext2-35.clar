;; PayDay Phase 3 Extension Contract #35
;; Function: set-min-salary
;; Phase 3 - No as-contract usage

(define-public (set-min-salary (min uint))

  (begin

    (asserts! (> min u0) (err u203))
    (ok min)
