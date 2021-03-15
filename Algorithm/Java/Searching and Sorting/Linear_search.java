package searching_sorting;

import java.util.Scanner;

public class Linear_search
{
    public static int l_search(final int[] arr, final int x, final int n) {
        for (int i = 0; i < n; ++i) {
            if (arr[i] == x) {
                return i;
            }
        }
        return 0;
    }
    
    public static void main(final String[] x) {
        final Scanner sc = new Scanner(System.in);
        System.out.print("Enter no of elements you want to enter in array : ");
        final int n = sc.nextInt();
        final int[] arr = new int[n];
        System.out.print("Enter " + n + " elments in array");
        for (int i = 0; i < n; ++i) {
            arr[i] = sc.nextInt();
        }
        System.out.println("Enter element you want to search : ");
        final int f = sc.nextInt();
        final int index = l_search(arr, f, n);
        if (index != 0) {
            System.out.println("Element present at index " + index);
        }
        else {
            System.out.println("Element not present in array");
        }
        sc.close();
    }
}