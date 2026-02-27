// Phase 3 tests for NotificationService
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';


describe('NotificationService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
