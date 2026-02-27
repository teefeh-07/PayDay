;; PayDay Extension Contract #4
;; Function: get-employee-info
;; No as-contract usage

(define-public (get-employee-info (employee principal))

  (begin

    (ok { salary: u0, dept: "engineering" })
