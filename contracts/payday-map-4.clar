;; PayDay Data Map: department-budget
;; Stores on-chain state for payroll operations


(define-map department-budget
  (string-ascii 64)
  { total: uint, spent: uint, remaining: uint }
)


(define-data-var department-budget-count uint u0)


(define-read-only (get-department-budget-count)
  (var-get department-budget-count)
)
