def merge(arr1, arr2):
    a = []
    i, j = 0, 0

    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            a.append(arr1[i])
            i += 1
        else:
            a.append(arr2[j])
            j += 1
            
    a.extend(arr1[i:])
    a.extend(arr2[j:])
    
    return a

            
def ms(arr):
    if len(arr)==1:
        return arr
      
    m = len(arr)//2  
    l = ms(arr[:m])
    r = ms(arr[m:])
    
    return merge(l,r)


print(ms([3, 4, 2, 3, 5, 7, 6, 8, 5, 9, 6, 3, 6, 44, 21]))
    
    