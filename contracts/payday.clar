;; PayDay Smart Contract
;; Instead of as-contract, we will use tx-sender where applicable


;; Payroll function 1
(define-public (process-payment-1 (amount uint))

  (begin

    (asserts! (> amount u0) (err u1))

    ;; Removed as-contract, using tx-sender straight

    (stx-transfer? amount tx-sender 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM)

    (ok true)
  )
)


;; Payroll function 2
(define-public (process-payment-2 (amount uint))

  (begin

    (asserts! (> amount u0) (err u1))

    ;; Removed as-contract, using tx-sender straight

    (stx-transfer? amount tx-sender 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM)

    (ok true)
  )
)


;; Payroll function 3
(define-public (process-payment-3 (amount uint))

  (begin

    (asserts! (> amount u0) (err u1))

    ;; Removed as-contract, using tx-sender straight

    (stx-transfer? amount tx-sender 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM)

    (ok true)
  )
)


;; Payroll function 4
(define-public (process-payment-4 (amount uint))

  (begin

    (asserts! (> amount u0) (err u1))

    ;; Removed as-contract, using tx-sender straight

    (stx-transfer? amount tx-sender 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM)

    (ok true)
  )
)


;; Payroll function 5
(define-public (process-payment-5 (amount uint))

  (begin

    (asserts! (> amount u0) (err u1))

    ;; Removed as-contract, using tx-sender straight

    (stx-transfer? amount tx-sender 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM)

    (ok true)
  )
)


;; Payroll function 6
(define-public (process-payment-6 (amount uint))

  (begin

    (asserts! (> amount u0) (err u1))

    ;; Removed as-contract, using tx-sender straight

    (stx-transfer? amount tx-sender 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM)
