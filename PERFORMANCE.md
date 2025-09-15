# Performance Optimizations

## Overview

Internal performance optimizations have been implemented to significantly reduce overhead when logging is disabled. **No API changes were made** - existing code continues to work unchanged while benefiting from improved performance.

## Key Optimizations

### 1. Lazy Evaluation Methods

New lazy evaluation methods (`debugLazy`, `infoLazy`, `warnLazy`, `errorLazy`) accept function callbacks that are only executed when the corresponding log level is enabled:

```typescript
// Traditional approach - arguments always evaluated
log.debug('User data:', JSON.stringify(largeObject))

// Lazy approach - function only called if debug enabled
log.debugLazy(() => 'User data:', () => JSON.stringify(largeObject))
```

### 2. Level Guard Optimization

Regular logging methods now check levels before processing arguments, avoiding spread operator overhead until after the level check passes.

### 3. Efficient Cycle Detection

The `jsonify` function uses Set-based cycle detection instead of array-based tracking for better performance when serializing complex objects.

## Performance Characteristics

**When log levels are set to WARN/ERROR:**
- Debug/info calls have near-zero overhead
- Expensive operations (JSON.stringify, object serialization) are completely avoided
- No function execution for disabled levels using lazy methods

**Backward Compatibility:**
- All existing APIs work unchanged
- No migration required
- Performance improvements are automatic

## Usage Recommendations

- **Simple strings**: Continue using regular methods (`log.debug('message')`)
- **Expensive operations**: Use lazy methods (`log.debugLazy(() => expensiveOperation())`)
- **Production**: Set system threshold to WARN or ERROR for optimal performance

The optimizations ensure that production applications with logging set to WARN+ experience minimal performance impact from debug/info logging statements.