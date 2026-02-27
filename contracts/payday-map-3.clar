;; PayDay Data Map: expense-ledger
;; Stores on-chain state for payroll operations


(define-map expense-ledger
  uint
  { employee: principal, amount: uint, approved: bool }
)


(define-data-var expense-ledger-count uint u0)


(define-read-only (get-expense-ledger-count)
  (var-get expense-ledger-count)
)


(define-public (increment-expense-ledger-count)
  (begin
    (var-set expense-ledger-count (+ (var-get expense-ledger-count) u1))
    (ok (var-get expense-ledger-count))
  )
)


;; Error constants for expense-ledger
(define-constant ERR_NOT_FOUND (err u404))
(define-constant ERR_UNAUTHORIZED (err u403))


;; Map initialized successfully for expense-ledger
