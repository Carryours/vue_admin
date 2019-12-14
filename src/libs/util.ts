/**
 * 工具函数
 */

export const emptyObject = Object.freeze({})
export function isUndef(v: any): boolean {
    return v === undefined || v === null
}

export function isDef(v: any): boolean {
    return v !== undefined && v !== null
}

export function isTrue(v: boolean): boolean {
    return v === true
}

export function isFalse(v: boolean): boolean {
    return v === false
}

/**
 * Check if value is primitive.
 */
export function isPrimitive(value: string | number | symbol | boolean): boolean {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'symbol' ||
        typeof value === 'boolean'
    )
}


export function isObject(obj: object | null): boolean {
    return obj !== null && typeof obj === 'object'
}


const _toString = Object.prototype.toString


export function toRawType(value: any): string {
    return _toString.call(value).slice(8, -1)
}


export function isPlainObject(obj: Object): boolean {
    return _toString.call(obj) === '[object Object]'
}

export function isRegExp(v: RegExp): boolean {
    return _toString.call(v) === '[object RegExp]'
}


export function isPromise(val: Promise<Function>): boolean {
    return (
        isDef(val) &&
        typeof val.then === 'function' &&
        typeof val.catch === 'function'
    )
}

export function isError(err: Error): boolean {
    return _toString.call(err).indexOf('Error') > -1
}

export function isFun(fun: Function): boolean {
    return _toString.call(fun) === '[object Function]'
}

export function isArray(val: Array<any>): boolean {
    return _toString.call(val) === '[object Array]'
}

export function toString(val: any): string {
    return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
            ? JSON.stringify(val, null, 2)
            : String(val)
}

export function toNumber(val: string): number | string {
    const n = parseFloat(val)
    return isNaN(n) ? val : n
}



export function remove(arr: any[], item: any) {
    if (arr.length) {
        const index = arr.indexOf(item)
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}
