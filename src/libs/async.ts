
import { isArray } from './util'
export function runQueue(queue: Array<Function>, fn: Function, cb: () => void) {
  if (isArray(queue) && queue.length > 0) {
    _runQueue(queue, fn, 0, cb)
  } else {
    cb()
  }
}

function _runQueue(queue: Array<Function>, fn: Function, index: number, cb: () => void) {
  if (index >= queue.length) {
    cb()
  } else {
    if (queue[index]) {
      fn(queue[index], () => {
        _runQueue(queue, fn, index + 1, cb)
      })
    } else {
      _runQueue(queue, fn, index + 1, cb)
    }
  }
}

