class Solution:
    def arrangeCoins(self, n: int) -> int:

        if n == 1: return 1

        l , r = 0 , n 
        res = 0

        while l <= r:
            m = (l + r) // 2
            coins = (m / 2) * (m + 1)
            if coins > n:
                r = m - 1
            else:
                l = m + 1
                res = max(m, res)
        return res