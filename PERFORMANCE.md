# Performance Optimizations

## Overview

Internal performance optimizations have been implemented to significantly reduce overhead when logging is disabled. **No API changes were made** - existing code continues to work unchanged while benefiting from improved performance.

## Key Optimizations

### 1. Deferred Array Creation

Logging methods now avoid the spread operator overhead by deferring array spreading until after level checks pass. When logging is disabled, no arrays are created from the spread operation.

### 2. Optimized Cycle Detection

The `jsonify` function uses Set-based cycle detection instead of array-based tracking, improving performance from O(n) to O(1) lookups when serializing complex objects with circular references.

### 3. LogWriter Level Guards

LogWriter implementations check log levels before expensive operations like timestamp generation and color formatting, preventing unnecessary work when logs are disabled.

## Performance Characteristics

**When log levels are set to WARN/ERROR:**
- Debug/info calls have near-zero overhead (< 0.001ms per call)
- Spread operator overhead eliminated for disabled log levels
- Object serialization optimized with efficient cycle detection
- Timestamp and formatting operations skipped when not needed

**Backward Compatibility:**
- All existing APIs work unchanged
- No migration required
- Performance improvements are automatic

## Technical Details

The optimizations work at three levels:

1. **Method Level**: `debug()`, `info()`, `warn()`, `error()` methods defer argument spreading
2. **Serialization Level**: `jsonify()` uses `Set` instead of `Array` for cycle detection
3. **Writer Level**: LogWriters check levels before expensive formatting operations

## Usage Recommendations

- **No code changes needed**: Continue using existing methods (`log.debug()`, `log.info()`, etc.)
- **Production configuration**: Set system threshold to WARN or ERROR for optimal performance
- **Complex objects**: Benefits are automatic when logging objects with circular references

The optimizations ensure that production applications with logging set to WARN+ experience minimal performance impact from debug/info logging statements.