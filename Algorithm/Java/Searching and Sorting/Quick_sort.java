package searching_sorting;

public class Quick_sort
{
    static void swap(final int[] arr, final int i, final int j) {
        final int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    static void print(final int[] arr) {
        for (final int i : arr) {
            System.out.print(String.valueOf(i) + " ");
        }
        System.out.println();
    }
    
    static int sort(final int[] arr, final int l, final int r) {
        final int p = arr[r];
        int j = l - 1;
        for (int i = l; i < r; ++i) {
            if (arr[i] < p) {
                ++j;
                swap(arr, i, j);
            }
        }
        swap(arr, j + 1, r);
        return j++;
    }
    
    static void q_sort(final int[] arr, final int l, final int r) {
        if (l < r) {
            final int partition = sort(arr, l, r);
            q_sort(arr, l, partition - 1);
            q_sort(arr, partition + 1, r);
        }
    }
    
    public static void main(final String[] args) {
        final int[] arr = { 56, 34, 44, 78, 23, 75, 12, 4, 6, 7, 8, 23, 6734 };
        q_sort(arr, 0, arr.length - 1);
        print(arr);
    }
}