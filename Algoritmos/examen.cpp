if (N<0)
        INT_MAX;

   INT_MAX;
//recorremos todo nuestro set de moneas AKA opciones para dar cambio
    for(int i = 0; i<n; i++)
    {
        int res = greedyChange(coinSet, n, N - coinSet[i]);
        if(res != INT_MAX)
            coins = min(coins, res+1);
    }

}