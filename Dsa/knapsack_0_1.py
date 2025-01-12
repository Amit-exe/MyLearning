def knapSack(self, capacity, val, wt):
        c = capacity
        n = len(val)
        dp = np.zeros((n+1, c+1), dtype=int)
        for i in range(1, n+1):  
            for j in range(1, c+1):  
                v1 = dp[i-1][j]  
                v2 = 0
                if j >= wt[i-1]:  
                    v2 = val[i-1] + dp[i-1][j-wt[i-1]]
                dp[i][j] = max(v1, v2)

        return dp[n][c]  