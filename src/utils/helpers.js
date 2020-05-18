export function truncate(str, n, useWordBoundary) {
    if (str.length <= n) {
      return str
    }
    const subString = str.substr(0, n - 1) // the original check
    return (
      (useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(' '))
        : subString) + '...'
    )
  }
  
  export function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }