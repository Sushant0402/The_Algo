package searching_sorting;

public class Insertion_sort
{
    static void print(final int[] arr) {
        for (final int i : arr) {
            System.out.print(String.valueOf(i) + " ");
        }
        System.out.println();
    }
    
    static void in_sort(final int[] arr) {
        for (int i = 1; i < arr.length; ++i) {
            final int temp = arr[i];
            for (int j = i - 1, k = i; j >= 0; --j, --k) {
                if (arr[j] > arr[k]) {
                    arr[k] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    
    public static void main(final String[] x) {
        final int[] arr = { 7, 8, 5, 2, 4, 6, 3 };
        print(arr);
        in_sort(arr);
        print(arr);
    }
}
