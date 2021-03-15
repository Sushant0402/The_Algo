package searching_sorting;

public class Selection_sort
{
    static void print(final int[] arr) {
        for (final int i : arr) {
            System.out.print(String.valueOf(i) + " ");
        }
        System.out.println();
    }
    
    public static void s_sort(final int[] arr) {
        for (int i = 0; i < arr.length - 1; ++i) {
            int min = i;
            for (int j = i + 1; j < arr.length; ++j) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            final int temp = arr[min];
            System.out.println(temp);
            arr[min] = arr[i];
            arr[i] = temp;
            print(arr);
        }
    }
    
    public static void main(final String[] x) {
        final int[] arr = { 56, 34, 12, 67, 32, 89, 24, 54 };
        s_sort(arr);
    }
}