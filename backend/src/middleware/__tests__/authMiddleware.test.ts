// Phase 3 tests for authMiddleware
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';


describe('authMiddleware', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
