import numpy as np

m=3
n=3
dp = np.zeros((m,n))
        
        
for i in range(m):
    for j in range(n):
        dp[i][j] = dp[i][j-1] + dp[i-1][j]
        
        if(i==0 or j==0):
            dp[i][j] = 1

print(dp)
print(dp[m-1][n-1])