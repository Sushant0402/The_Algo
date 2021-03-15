package searching_sorting;

public class Binary_search_iterative
{
    public static void main(final String[] x) {
        final int[] arr = { 1, 3, 5, 6, 8, 10, 12 };
        int l = 0;
        int r = arr.length - 1;
        final int s = 5;
        int index = 0;
        while (l <= r) {
            final int mid = l + (r - l) / 2;
            if (arr[mid] == s) {
                index = mid;
                break;
            }
            if (arr[mid] > s) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        System.out.println("Element present at index " + index);
    }
}
