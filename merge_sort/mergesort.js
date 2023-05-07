function merge_sort(arr) {
    if (arr.length > 1) {
      // Divide the array into two arrays
      const mid = Math.floor(arr.length / 2);
      const left_arr = arr.slice(0, mid);
      const right_arr = arr.slice(mid);
  
       
      merge_sort(left_arr);  //Recursion
      merge_sort(right_arr);
  
      // Merge the two sorted array
      let i = 0, j = 0, k = 0;
      while (i < left_arr.length && j < right_arr.length) {
        if (left_arr[i] < right_arr[j]) {
          arr[k] = left_arr[i];
          i++;
        } else {
          arr[k] = right_arr[j];
          j++;
        }
        k++;
      }
  
      // Append any remaining elements in left or right array
      while (i < left_arr.length) {
        arr[k] = left_arr[i];
        i++;
        k++;
      }
      while (j < right_arr.length) {
        arr[k] = right_arr[j];
        j++;
        k++;
      }
    }
  }
  const arr=[10,50,30,20,40,60];
  merge_sort(arr);
  console.log(arr);
  