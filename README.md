
document.addEventListener('paste', function(e) { e.stopPropagation(); }, true);


inorder preorder postorder(// You are using GCC
#include<stdio.h>
#include<stdlib.h>

typedef struct node
{
    int data;
    struct node *left,*right;
}TNODE;

TNODE* createNode(int data)
{
    TNODE* newNode=(TNODE*)malloc(sizeof(TNODE));
    newNode->data=data;
    newNode->left=newNode->right=NULL;
    return newNode;
}

TNODE* insert(TNODE* root,int data)
{
    if(root==NULL)
        return createNode(data);
    if(data<root->data)
        root->left=insert(root->left,data);
    else
        root->right=insert(root->right,data);
    return root;
}

void inorder(TNODE* root)
{
    if(root!=NULL)
    {
        inorder(root->left);
        printf("%d ",root->data);
        inorder(root->right);
    }
}

void preorder(TNODE* root)
{
    if(root!=NULL)
    {
        printf("%d ",root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

void postorder(TNODE* root)
{
    if(root!=NULL)
    {
        postorder(root->left);
        postorder(root->right);
        printf("%d ",root->data);
    }
}

int main()
{
    int ch,n,val;
    TNODE* root=NULL;
    while(1)
    {
        scanf("%d",&ch);
        switch(ch)
        {
            case 1: scanf("%d",&n);
                    for(int i=0;i<n;i++)
                    {
                        scanf("%d",&val);
                        root=insert(root,val);
                    }
                    printf("BST with %d nodes is ready to use\n",n);
                    break;
                    
            case 2: printf("BST Traversal in INORDER\n");
                    inorder(root);
                    printf("\n");
                    break;
                    
            case 3: printf("BST Traversal in PREORDER\n");
                    preorder(root);
                    printf("\n");
                    break;
                    
            case 4: printf("BST Traversal in POSTORDER\n");
                    postorder(root);
                    printf("\n");
                    break;
                
            case 5: exit(0);
                    
            default: printf("Wrong choice\n");
        }
    }
    
    return 0;
}     )       jack(#include<stdio.h>
int digitsum(int num){
    int sum=0;
    while(num>0){
        sum+=num%10;
        num/=10;
    }
    return sum;
}
int binarysearch(int arr[],int left,int right,int d){
    int result=-1;
    while(left<=right){
        int mid=left+(right-left)/2;
        if(digitsum(arr[mid])==d){
            result=arr[mid];
            right=mid-1;
        }else if(digitsum(arr[mid])<d){
            left=mid+1;
        }
    }
    return result;
}
int main(){
    int n,d,result,index=-1;
    scanf("%d",&n);
    int arr[n];
    for(int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    scanf("%d",&d);
    result=binarysearch(arr,0,n-1,d);
    for(int i=0;i<n;i++){
        if(digitsum(arr[i])==d){
            index=i;
            break;
        }
    }
    if(index != -1){
        printf("%d\n",arr[index]);
    }else{
        printf("-1\n");
    }
    return 0;
}  ) ram( // You are using GCC
#include<stdio.h>

int main()
{
    int n,i,key,found=0;
    scanf("%d",&n);
    
    int arr[n];
    for(i=0;i<n;i++)
        scanf("%d",&arr[i]);
        
    scanf("%d",&key);
    
    for(i=0;i<n;i++)
    {
        if(arr[i]==key)
        {
            printf("Element %d is present at index %d\n",key,i);
            found=1;
            break;
        }
    }
    
    if(!found)
        printf("Element %d is not present in array\n",key);
    
    
} )  Agroup ( #include<stdio.h>
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
}  )    imagine    (#include<stdio.h>
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
    
}  )  During(// You are using GCC
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
        printf("%d",a[i]);

}
)   As a librarian (// You are using GCC
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
} )    Vishnu ( // You are using GCC
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
}
)  You are(   #include<stdio.h>
#define MAX 100

int adj[MAX][MAX];
int visited[MAX];
int level[MAX];

void bfs(int start,int v,int target)
{
    int q[MAX],f=0,r=0;
    visited[start]=1;
    level[start]=0;
    q[r++]=start;
    
    int visit_count=0;
    
    while(f<r)
    {
        int current=q[f++];
        visit_count++;
        
        if(current==target)
        {
            printf("%d\n",visit_count-1);
            return;
        }
        
        for(int i=0;i<v;i++)
        {
            if(adj[current][i]&&!visited[i])
            {
                visited[i]=1;
                level[i]=level[current]+1;
                q[r++]=i;
            }
        }
        
    }
    printf("-1\n");
}

int main()
{
    int V,E;
    scanf("%d%d",&V,&E);
    
    for(int i=0;i<V;i++)
    {
        visited[i]=0;
        for(int j=0;j<V;j++)
            adj[i][j]=0;
    }
    
    for(int i=0;i<E;i++)
    {
        int u,v;
        scanf("%d%d",&u,&v);
        adj[u][v]=1;
        adj[v][u]=1;
    }
    
    int X;
    scanf("%d",&X);
    
    bfs(0,V,X);
}

)   Given an(int hash_func(int element, int mod) 
{
   return element % mod;
}

void countDistinct(int arr[], int n, int k, int mod) 
{
  int freq[MAX]={0};
  int distinct_count=0;
  
  for(int i=0;i<k;i++)
  {
      int index=hash_func(arr[i],mod);
      if(freq[index]==0)
        distinct_count++;
      freq[index]++;
  }
 printf("%d\n",distinct_count);
 
 for(int i=k;i<n;i++)
 {
     int out_index=hash_func(arr[i-k],mod);
     freq[out_index]--;
     if(freq[out_index]==0)
        distinct_count--;
        
    int in_index=hash_func(arr[i],mod);
    if(freq[in_index]==0)
        distinct_count++;
    freq[in_index]++;
    
    printf("%d\n",distinct_count);
 }
}

)
