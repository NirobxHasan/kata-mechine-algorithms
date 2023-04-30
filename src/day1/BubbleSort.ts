export default function bubble_sort( arr: number[]):void {
    for(let i=0; i<arr.length; ++i){
        for(let j = 0 ; j<arr.length-1-i; ++j){ //arr.length-1-i , -1 bcz we check j+1
            if(arr[j]> arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1]=temp
            }
        }
    }
}