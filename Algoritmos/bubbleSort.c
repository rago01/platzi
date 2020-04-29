#include<stdio.h>

void cambiarPosicion(int *n1, int *n2){
    int temp = *n1;
    *n1 = *n2;
    *n2 = temp;
}

void bubbleSort(int vectEntrada[],int n){
    int i, j;
    for (i = 0; i < n-1; i++)
    {
        for ( j = 0; j < n-i-1; j++)
        {
            if (vectEntrada[j]<vectEntrada[j+1])
            cambiarPosicion(&vectEntrada[j],&vectEntrada[j+1]);   
        }   
    }
}

int printVector(int vectEntrada[], int n){
        for (int i = 0; i < n-1; i++)
            printf("%d ,", vectEntrada[i]);
        printf("\n fin del ordenamiento");
}

int main(int argc, char const *argv[])
{
    int vectEntrada[]={100,1992,0,5,-1,60,70,14,15,10};
    int n = sizeof(vectEntrada)/sizeof(vectEntrada[0]);
    bubbleSort(vectEntrada, n);
    printVector(vectEntrada, n);
    printf("\n");
    return 0;
}
