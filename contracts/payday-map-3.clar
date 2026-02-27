;; PayDay Data Map: expense-ledger
;; Stores on-chain state for payroll operations


(define-map expense-ledger
  uint
  { employee: principal, amount: uint, approved: bool }
)


(define-data-var expense-ledger-count uint u0)
