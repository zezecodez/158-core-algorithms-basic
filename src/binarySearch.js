export default function binarySearch(arr, val) {

  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((right+left) / 2)

  while(arr[middle] !== val && left < middle) {
    if(val < arr[middle]) {
      right = middle - 1
      middle = Math.floor((right + left) / 2)
    }
    else {
      left = middle + 1
      middle = Math.floor((right + left) / 2)
    }
    if(arr[right] === val) return right
  }

  return null
}
