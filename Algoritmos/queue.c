
#include<stdio.h>
#define SIZE 5

int values[SIZE], front = -1, rear = -1;

void enQueue(int value){
    if(rear == SIZE-1)
        printf("Queue está lleno! \n" );
    else{
        if (front == -1 )
            front = 0;
        rear++;
        values[rear] = value;
        printf("El valor insertado fue: %d \n", value );
    }
}

void deQueue(){
    if (front == -1)
    printf("El Queue está vacio \n");
    else{
      printf("Se elimino el valor %d \n", values[front]);
      front++;
      rear--;
      if (front > rear)
      front = -1;
    }
    
}

int main(int argc, char const *argv[])
{
    enQueue(1);
    enQueue(2);
    enQueue(3);
    enQueue(4);
    enQueue(5);
    deQueue();
    enQueue(6);
    deQueue();
    deQueue();    
    enQueue(7);
    enQueue(8);
    enQueue(9);
    enQueue(11);
    enQueue(10);
    return 0;
}
