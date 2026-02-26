;; PayDay Smart Contract
;; Instead of as-contract, we will use tx-sender where applicable


;; Payroll function 1
(define-public (process-payment-1 (amount uint))

  (begin

    (asserts! (> amount u0) (err u1))

    ;; Removed as-contract, using tx-sender straight
