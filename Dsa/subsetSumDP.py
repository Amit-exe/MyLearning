def isSubsetSum (self, arr, target):
        l = len(arr) 
        dp = [[False] * (target + 1) for _ in range(l + 1)]
             
        for i in range(l + 1):
            dp[i][0] = True
        
        for i in range(1, l + 1):
            for j in range(1, target + 1):
                if j >= arr[i - 1]:
                    dp[i][j] = dp[i - 1][j] or dp[i - 1][j - arr[i - 1]]
                else:
                    dp[i][j] = dp[i - 1][j]
        
        return dp[l][target]