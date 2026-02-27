;; PayDay Extension Contract #2
;; Function: remove-employee
;; No as-contract usage

(define-public (remove-employee (employee principal))

  (begin

    (asserts! (is-eq tx-sender employee) (err u101))
    (ok true)
