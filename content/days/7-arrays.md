{
   "title": "Arrays",
   "weight": 7
}

# Arrays

Let's begin with a review of arrays. If you're already familiar with them, feel free to skip this section. I'll explain the fundamentals for those new to Java or its basics.

**What is an Array?**

In simple terms, an array is a container (data structure) object that holds a fixed number of values (elements) of the same (data) type. Similar to how we use containers at home, such as lunch boxes or drinking glasses, arrays store elements (e.g., integers, strings). Just like these containers have a fixed capacity, an array's capacity is defined when it's created. This fixed size is crucial as it determines the amount of memory allocated to the array.

```java
// Declaration: Declares an integer array named 'myArray'.
int[] myArray;

// Initialization: Allocates memory for 10 integers.
myArray = new int[10];

// Populating the array with values using a loop.
for (int i = 0; i < myArray.length; i++) {
    myArray[i] = i + 1; // Assigns values from 1 to 10.
}

//Alternative initialization, when values are known.
int[] myArray2;
myArray2 = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

//Simplified initialization.
int[] myArray3 = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

```

In essence, an array is a data structure with a predetermined size, capable of storing elements of the same data type. Each element in the array is accessed using an index, starting from 0. For example, in `myArray3`, the value 1 is at index 0, 2 is at index 1, and so on.

With this basic understanding of array declaration, initialization, and indexing, we can move on to smali part now.

Now let's take this piece of code:
```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    EdgeToEdge.enable(this);

    int[] myArray = new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    StringBuilder arrayElements = new StringBuilder();
    for (int j : myArray) {
        arrayElements.append(j).append("\n");
    }
    setContentView(R.layout.activity_main);
    android.widget.TextView textView = new android.widget.TextView(this);
    textView.setText(arrayElements.toString());
    setContentView(textView);
}
```

when compiled, in smali:
```smali
.method protected onCreate(Landroid/os/Bundle;)V
    .registers 7

    invoke-super {p0, p1}, Landroidx/appcompat/app/AppCompatActivity;->onCreate(Landroid/os/Bundle;)V

    invoke-static {p0}, Landroidx/activity/EdgeToEdge;->enable(Landroidx/activity/ComponentActivity;)V

    const/16 p1, 0xa

    new-array v0, p1, [I

    fill-array-data v0, :array_38

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const/4 v2, 0x0

    :goto_13
    if-ge v2, p1, :cond_23

    aget v3, v0, v2

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v3

    const-string v4, "\n"

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    add-int/lit8 v2, v2, 0x1

    goto :goto_13

    :cond_23
    sget p1, Labhi/example/arrays/R$layout;->activity_main:I

    invoke-virtual {p0, p1}, Labhi/example/arrays/MainActivity;->setContentView(I)V

    new-instance p1, Landroid/widget/TextView;

    invoke-direct {p1, p0}, Landroid/widget/TextView;-><init>(Landroid/content/Context;)V

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Landroid/widget/TextView;->setText(Ljava/lang/CharSequence;)V

    invoke-virtual {p0, p1}, Labhi/example/arrays/MainActivity;->setContentView(Landroid/view/View;)V

    return-void

    :array_38
    .array-data 4
        0x1
        0x2
        0x3
        0x4
        0x5
        0x6
        0x7
        0x8
        0x9
        0xa
    .end array-data
.end method
```