document.addEventListener("paste", function(e) {e.stopPropagation(); }, true);
//18.Vishnu, a math enthusiast
#include<stdio.h>

void merge(int[],int,int,int);
void mergesort(int[],int,int);
int digitsum(int);

void mergesort(int a[],int low,int high)
{
    int mid;
    if(low<high)
    {
        mid=(low+high)/2;
        mergesort(a,low,mid);
        mergesort(a,mid+1,high);
        merge(a,low,high,mid);
    }
}

void merge(int a[],int first,int last,int m)
{
    int c[10],i,j,k;
    i=first;j=m+1;k=first;
    
    while(i<=m && j<=last)
    {
        if(a[i]<a[j])
        {
            c[k]=a[i];
            i++;
        }
        else
        {
            c[k]=a[j];
            j++;
        }
        k++;
    }

    while(i<=m)
        c[k++]=a[i++];
    while(j<=last)
        c[k++]=a[j++];
        
    for(i=first;i<k;i++)
        a[i]=c[i];
}

int digitSum(int n)
{
    int sum=0;
    while(n>0)
    {
        sum=sum+n%10;
        n=n/10;
    }
    return sum;
}

int main()
{
    int i,n,a[10],maxSum=-1,maxElement=-1;
    scanf("%d",&n);
    
    for(i=0;i<n;i++)
        scanf("%d",&a[i]);
        
    mergesort(a,0,n-1);
    
    printf("The sorted array is: ");
    for(i=0;i<n;i++)
    {
        printf(" %d",a[i]);
        int sum=digitSum(a[i]);
        if(sum>maxSum)
        {
            maxSum=sum;
            maxElement=a[i];
        }
    }
    
    printf("\nThe integer with the highest digit sum is: %d",maxElement);
    return 0;
}
//17.As a librarian at a local library,
void swap(int* a, int* b) 
{
  int temp=*a;
  *a=*b;
  *b=temp;
}

void printArray(int arr[], int n) 
{
    for(int i=0;i<n;i++)
        printf(" %d",arr[i]);
    printf("\n");
}

int partition(int arr[], int low, int high) 
{
    
    int pivot=arr[high],i=low-1;
      
    for(int j=low;j<high;j++)
    {
        if(arr[j]<=pivot)
        {
            i++;
            swap(&arr[i],&arr[j]);
        }
    }
    
    swap(&arr[i+1],&arr[high]);
    
    printf("After partitioning with pivot %d: ",pivot);
    return i+1;
}

void quicksort(int arr[], int low, int high, int size) 
{
    if(low<high)
    {
        int mid=partition(arr,low,high);
        printArray(arr,size);
        quicksort(arr,low,mid-1,size);
        quicksort(arr,mid+1,high,size);
    }
}
// 16.A group of students participated in a height measurement exercise
#include<stdio.h>
int main()
{
    int n,i,j,k,minIndex,temp;
    scanf("%d",&n);
    
    int a[n];
    for(i=0;i<n;i++)
        scanf("%d",&a[i]);
    
    printf("Student's height order before sorting: ");
    for(i=0;i<n;i++)
        printf(" %d",a[i]);
    printf("\n");
        
    for(i=0;i<n-1;i++)
    {
        minIndex=i;
        for(j=i+1;j<n;j++)
        {
            if(a[j]<a[minIndex])    
                minIndex=j;
        }
        temp=a[minIndex];
        a[minIndex]=a[i];
        a[i]=temp;
        
        printf("Height order of students after iteration %d:",i+1);
        for(k=0;k<n;k++)
            printf(" %d",a[k]);
        printf("\n");
    }
    
    printf("After final comparison of all students, the height order becomes: ");
    for(i=0;i<n;i++)
        printf("%d",a[i]);
}
// 15.Imagine you are developing a program for a scientific research project.
#include<stdio.h>
int main()
{
    int i,j,k,n,flag=0;
    scanf("%d",&n);
    
    float a[n],temp;
    for(i=0;i<n;i++)
        scanf("%f",&a[i]);
    
    for(i=0;i<n-1;i++)
    {
        flag=0;
        for(j=0;j<n-i-1;j++)
        {
            if(a[j]>a[j+1])
            {
                temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
                flag=1;
            }
        }
        
        if(flag)
        {
            printf("After iteration %d: ",i+1);
            for(k=0;k<n;k++)
                printf("%.2f ",a[k]);
            printf("\n");
        }
    }
    
    printf("Sorted array: ");
    for(i=0;i<n;i++)
            printf("%.2f ",a[i]);
    
}
//14 During an educational coding session focused on sorting algorithms, participants are l
#include<stdio.h>
int main()
{
    int n,i,j,k,key;
    scanf("%d",&n);
    
    int a[n];
    for(i=0;i<n;i++)
        scanf("%d",&a[i]);
    
    printf("Initial order: ");
    for(i=0;i<n;i++)
        printf("%d ",a[i]);
    printf("\n");
    
    for(i=1;i<n;i++)
    {
        key=a[i];
        j=i-1;
        while(j>=0&&a[j]<key)
        {
            a[j+1]=a[j];
            j--;
        }
        a[j+1]=key;
        
        printf("After Iteration %d: ",i);
        for(k=0;k<n;k++)
            printf("%d ",a[k]);
        printf("\n");
    }
    
    printf("Sorted order: ");
    for(i=0;i<n;i++)
        printf("%d ",a[i]);
    
}
// 13.Jack is working on a project to identify specific integers based on the sum 
 #include <stdio.h>
 #include<stdlib.h>
 int dgitsum(int n){
     int sum=0;
     while(n>0){
         sum=sum+n%10;
         n=n/10;
     }
     return sum;
 }
 
 
 int fingdigi(int arr[],int right,int ele){
     int low=0,high=right-1;
     int result=-1;
     while(low<=high){
    int mid=(high+low)/2;
     int sum=dgitsum(arr[mid]);
     if (sum==ele){
         result=arr[mid];
         high=mid-1;
     }
     else if (sum<ele){
         low=mid+1;
         
     }
     else {
         high=mid-1;
     }
         
         
     }
   return result;   
     
     
 }
 
int main (){
    int n;
    scanf("%d",&n);
    int arr[n],ele;
    for (int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
   scanf("%d",&ele);
  int  result=fingdigi(arr,n,ele);
 int index=-1;
  for (int i=0;i<n;i++){
      if (dgitsum(arr[i])==ele){
          index=arr[i];
          break;
      }
      
  }
   if(index==-1){
       printf("-1\n");
   }
   else {
       printf("%d",index);
   }
    
    
    return 0;
} 
 //12. Ram has given an array of integers representing the ages of people in a group
#include <stdio.h>
int main (){
    int n;
    scanf("%d",&n);
    int arr[n];
    for (int i=0;i<n;i++){
        scanf("%d",&arr[i]);
        
    }
    int ele,index=-1;
    scanf("%d",&ele);
    for (int i=0;i<n;i++){
        if (ele==arr[i]){
            index=i;
            break;
        }
    }
    if (index==-1){
        printf("Element %d is not present in array",ele);
        
    }
else {
    printf("Element %d is present at index %d",ele,index);
}
    
    return 0;
}

 // 11.Write a program to create a Binary Search Tree (BST)
 
#include<stdio.h>
#include<stdlib.h>
typedef struct node{
int data;
struct node *right,*left;

}tnode;
tnode* creat(int data){
    tnode*newnode=(tnode*)malloc(sizeof(tnode));
    newnode->data=data;
    newnode->left=newnode->right=NULL;
    return newnode;
    
}
tnode*insert(tnode*root,int data)
{
    if(root==NULL){
        return creat(data);
    }
    if(data<root->data){
        root->left=insert(root->left,data);
    }
    else {
        root->right=insert(root->right,data);
    }
    return root;
    
}
void inorder (tnode*root){
    if(root!=NULL){
        inorder(root->left);
        printf("%d ",root->data);
        inorder(root->right);
    }
}
void preorder(tnode*root){
    if(root!=NULL){
        printf("%d ",root->data);
        preorder(root->left);
        preorder(root->right);
        
    }
}
void postorder(tnode*root){
    if(root!=NULL){
        postorder(root->left);
        postorder(root->right);
        printf("%d ",root->data);
    }
}

int main (){
    int ch,n,val;
    tnode*root=NULL;
    while(1){
     scanf("%d",&ch);
     switch(ch){
         case 1:scanf("%d",&n);
         for(int i=0;i<n;i++){
             scanf("%d",&val);
             root=insert(root,val);
             
         }printf("BST with %d nodes is ready to use\n",n);
         break;
    case 2: printf("BST Traversal in INORDER\n");
       inorder(root);
       printf("\n");
       break;
        
       case 3:printf("BST Traversal in PREORDER\n");
       preorder(root);
       printf("\n");
       break;
       case 4:printf("BST Traversal in POSTORDER\n");
       postorder(root);
       break;
       case 5:exit(0);
       default :printf("Wrong choice\n");
       
        
        
        
        
        
        
        
        
        
        
        
    }}return 0;
}


//10.Write a program that implements a queue using a linked list and finds the Nth element 
#include<stdio.h>
#include <stdlib.h>
struct node {
    int data;
    struct node *next;
    struct node *pre;
}*front=NULL,*rear=NULL;
void enque(){
    int n;
    scanf("%d",&n);
    struct node *New=(struct node*)malloc(sizeof(struct node));
    New->data=n;
    New->next=NULL;
    if(front==NULL){
        front=New;
        rear=New;
        rear->pre=NULL;
        front ->pre=NULL;
    }
    else {New ->pre=rear;
        rear->next=New;
        rear=rear->next;
        
    }
    
}
 void data(int n){
     struct node *temp=rear;
     for (int i=1;i<n;i++){
        temp=temp->pre;
     }  printf("%d",temp->data);
 }
 
 int main (){
   int p,q;
   scanf("%d",&p);
   for (int i=1;i<=p;i++){
       enque();
   }
   scanf("%d",&q);
   data(q);
     
     
     return 0;
 }
 
 
 
 //8.You are a software developer tasked with building a module for a scientific calcul
  #include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Stack {
    int top;
    unsigned capacity;
    char* array;
};

struct Stack* createStack(unsigned capacity) {
    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));

    if (!stack)
        return NULL;

    stack->top = -1;
    stack->capacity = capacity;
    stack->array = (char*)malloc(stack->capacity * sizeof(char));

    return stack;
}

int isEmpty(struct Stack* stack) {
    return stack->top == -1;
}

char peek(struct Stack* stack) {
    return stack->array[stack->top];
}

char pop(struct Stack* stack) {
    if (!isEmpty(stack))
        return stack->array[stack->top--];
    return '$';  
}

void push(struct Stack* stack, char op) {
    stack->array[++stack->top] = op;
}
int isOperand(char ch) {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

int Prec(char ch) {
    switch (ch) {
    case '+':
    case '-':
        return 1;
    case '*':
    case '/':
        return 2;
    case '^':
        return 3;
    }
    return -1;
}

void infixToPostfix(char* exp) {
    int i, k = 0;
    struct Stack* stack = createStack(strlen(exp));

    if (!stack)
        return;

    for (i = 0; exp[i]; ++i) {

        if (isOperand(exp[i])) {
            exp[k++] = exp[i];
        }

        else if (exp[i] == '(') {
            push(stack, exp[i]);
        }

        else if (exp[i] == ')') {
            while (!isEmpty(stack) && peek(stack) != '(')
                exp[k++] = pop(stack);
            if (!isEmpty(stack) && peek(stack) != '(')
                return;  
            else
                pop(stack);  
        }
        else {
            while (!isEmpty(stack) && Prec(exp[i]) <= Prec(peek(stack)))
                exp[k++] = pop(stack);
            push(stack, exp[i]);
        }
    }
    while (!isEmpty(stack))
        exp[k++] = pop(stack);

    exp[k] = '\0'; 

    printf("%s\n", exp);
}
int main() {
    char exp[100];
    scanf("%s", exp);

    infixToPostfix(exp);
    return 0;
}
//9imagine Ram is implementing a stack-based calculator.

  
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#define MAX 100
int stack[MAX];
int top = -1;
int isEmpty() {
    return top == -1;
}
int isFull() {
    return top == MAX - 1;
}
void push(int value) {
    if (!isFull()) {
        stack[++top] = value;
    }
}
int pop() {
    if (!isEmpty()) {
        return stack[top--];
    }
    return -1;
}
int peek() {
    if (!isEmpty()) {
        return stack[top];
    }
    return -1;
}
int evaluatePostfix(char* exp) {
    int i;

    for (i = 0; exp[i]; ++i) {
        if (exp[i] == ' ') continue;

        if (isdigit(exp[i])) {
            int num = 0;
            while (isdigit(exp[i])) {
                num = num * 10 + (int)(exp[i] - '0');
                i++;
            }
            i--;
            push(num);
        } else if (exp[i] == '+' || exp[i] == '-' || exp[i] == '*' || exp[i] == '/') {
            int val1 = pop();
            int val2 = pop();
            switch (exp[i]) {
                case '+': push(val2 + val1); break;
                case '-': push(val2 - val1); break;
                case '*': push(val2 * val1); break;
                case '/': push(val2 / val1); break;
            }
        } else {
            return -1;
        }
    }
    return pop();
}
int main() {
    char exp[MAX];
    scanf("%[^\n]%*c", exp);
    int result = evaluatePostfix(exp);
    if (result == -1) {
        printf("-1\n");
    } else {
        printf("%d\n", result);
    }
    return 0;
}
//8.You are a software developer tasked with building a module for a scientific calculator application. 
  #include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Stack {
    int top;
    unsigned capacity;
    char* array;
};

struct Stack* createStack(unsigned capacity) {
    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));

    if (!stack)
        return NULL;

    stack->top = -1;
    stack->capacity = capacity;
    stack->array = (char*)malloc(stack->capacity * sizeof(char));

    return stack;
}

int isEmpty(struct Stack* stack) {
    return stack->top == -1;
}

char peek(struct Stack* stack) {
    return stack->array[stack->top];
}

char pop(struct Stack* stack) {
    if (!isEmpty(stack))
        return stack->array[stack->top--];
    return '$';  
}

void push(struct Stack* stack, char op) {
    stack->array[++stack->top] = op;
}
int isOperand(char ch) {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

int Prec(char ch) {
    switch (ch) {
    case '+':
    case '-':
        return 1;
    case '*':
    case '/':
        return 2;
    case '^':
        return 3;
    }
    return -1;
}

void infixToPostfix(char* exp) {
    int i, k = 0;
    struct Stack* stack = createStack(strlen(exp));

    if (!stack)
        return;

    for (i = 0; exp[i]; ++i) {

        if (isOperand(exp[i])) {
            exp[k++] = exp[i];
        }

        else if (exp[i] == '(') {
            push(stack, exp[i]);
        }

        else if (exp[i] == ')') {
            while (!isEmpty(stack) && peek(stack) != '(')
                exp[k++] = pop(stack);
            if (!isEmpty(stack) && peek(stack) != '(')
                return;  
            else
                pop(stack);  
        }
        else {
            while (!isEmpty(stack) && Prec(exp[i]) <= Prec(peek(stack)))
                exp[k++] = pop(stack);
            push(stack, exp[i]);
        }
    }
    while (!isEmpty(stack))
        exp[k++] = pop(stack);

    exp[k] = '\0'; 

    printf("%s\n", exp);
}
int main() {
    char exp[100];
    scanf("%s", exp);

    infixToPostfix(exp);
    return 0;
}
// 5.Sharon is developing a programming challenge for a coding competition.
#include <stdio.h>
#include <stdlib.h>
# define MAX  100
char stack[MAX];
int top=-1;
void push (char value){
    if (top==MAX-1)
    printf("stack overflow\n");
    else{top++;
        stack[top]=value;
    printf ("Pushed: %c\n",value);
    }
}
void pop(){
    if (top==-1){
        printf("Stack is empty. Nothing to pop.\n");
    }
   else { printf("Popped: %c\n",stack[top]);
   top--;
   }
    
}
void display(){
    if (top==-1)
        printf ("Stack is empty.\n");
        
    
    else {
        printf ("Stack elements: ");
        for (int i=top;i>=0;i--){
            printf("%c",stack[i]);
        }printf("\n");
    }
}
 int main (){
     int n;
     char value;
     while(2){
          scanf ("%d",&n);
           switch (n){
                  case 1:scanf (" %c",&value);
                      push(value);
                       break;
                  
                  case 2:pop();
                        break;
                  case 3:display();
                         break;
                 case 4: exit(0);
                
                 default :printf("Invalid choice");
                  
                  
                  
                  
              }
          
    
    
    
     }
 
 }
 //6.In a bustling IT department, staff regularly submit helpdesk tickets to request techni
 
#include <stdio.h>
#define max_size 5
int queue [max_size],f=-1,r=-1;
void enque(int id){
    if (r==max_size-1)
    printf("Queue is full. Cannot enqueue.\n");
    else 
    {    r++;
        queue[r]=id;
        printf("Helpdesk Ticket ID %d is enqueued.\n",id);
    }
     if (f==-1){
        f=0;
    }
}
void dequeue ()
{
    if (f==-1||f>r){
        printf("Queue is empty.\n");
        
        
    }
    else {
        printf("Dequeued Helpdesk Ticket ID: %d\n",queue[f]);
        f++;
    }
}
void display()
{
    if (f==-1||f>r){
        printf("Queue is empty.\n");
    }
    else {
        printf ("Helpdesk Ticket IDs in the queue are: ");
        for (int i=f ;i<=r;i++)
        printf("%d ",queue[i]);
       printf ("\n");
        
        
        
    }
}

int main ()
{  
    int ch,id ;
    while (1){
        scanf ("%d",&ch);
    
    switch(ch){
        case 1: scanf("%d",&id);
         enque(id);
        break;
        case 2:dequeue();
        break;
        case 3:display();
        break;
        case 4:printf ("Exiting the program");
        break;
        default :printf ("Invalid option.\n");
    }
        if (ch==4)
        break;
    }
}
//7.Rosh is working on implementing a Circular Queue (CQ)

 // You are using GCC
#include<stdio.h>
#include<stdlib.h>
#define MAX  5
int cq[MAX];
int f=-1,r=-1;
void cqinsert(int val){
    if(val%2==0){
            val=2*val;}
        if ((f==0&&r==MAX-1)||(f==r+1))
    printf("Queue Overflow\n");
    else{
        if (r==MAX-1)
        r=0;
        else
        r++;
        cq[r]=val;
        if(f==-1)
        f=0;
    }
        
    
}
void cqdelit()
{
    if (f==-1)
    printf("Queue underflow\n");
    else {
    printf("Element deleted from queue is : %d\n",cq[f]);
    if (f==MAX-1)
    f=0;
    else if(f==r)
    f=r=-1;
    else
    f++;
        
        
    }
}
void cqdisplay()
{
    if (f==-1){
        printf("Queue is empty\n");
    }
    else {
        if (f<=r){
            for (int i=f;i<=r;i++){
                printf ("%d ",cq[i]);
            }}
        else{
            for (int i=r;i<=MAX-1;i++)
            printf("%d",cq[i]);
            for(int i=0;i<f;i++)
            printf("%d",cq[i]);
        }
        printf("\n");
        
    }
}


int main (){
int ch,n;

    do{
       scanf ("%d",&ch);
       switch(ch){
           case 1:
           {
               scanf ("%d",&n);
               cqinsert(n);
           
               break;
           }
           case 2:{
                cqdelit();
                break;
           }
           case 3:{
               cqdisplay();
               break;
           }
           
           case 4:{
               printf("Exit");
           break;
           }
           default:printf("Incorrect!\n");
           
       }
       
       }while(ch!=4);
    return 0;}

//2.A school is conducting an analysis of students' performance.

#include <stdio.h>
typedef struct
{
    int roolno;
    char name [10];
    int Class;
    char Section;
    float marks;
    
}Student ;
int main()
{
    
    int n,i;
    scanf ("%d",&n);
    Student s[n];
    int sectioncount[26]={0};
    float sectionmarks [26]={0};
    for ( i=0;i<n;i++){
        scanf ("%d%s%d %c%f",&s[i].roolno,s[i].name,&s[i].Class,&s[i].Section,&s[i].marks);
        int index =s[i].Section-'A';
        sectionmarks[index]+=s[i].marks;
        sectioncount[index]++;
    }
    for (i=0;i<26;i++){
        if (sectioncount[i]>0){
            printf ("Section %c: %.2f\n",'A'+i,sectionmarks[i]/sectioncount[i]);
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    return 0;
}




























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 






















































 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



