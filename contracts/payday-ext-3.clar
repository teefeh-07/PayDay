;; PayDay Extension Contract #3
;; Function: update-salary
;; No as-contract usage

(define-public (update-salary (employee principal) (new-salary uint))

  (begin

    (asserts! (> new-salary u0) (err u102))
    (ok new-salary)

  )
)
