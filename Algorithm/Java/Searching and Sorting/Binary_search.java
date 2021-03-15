package searching_sorting;

public class Binary_search
{
    int b_search(final int[] arr, final int l, final int r, final int n) {
        if (l > r) {
            return -1;
        }
        final int mid = l + (r - l) / 2;
        if (arr[mid] == n) {
            return mid;
        }
        if (arr[mid] > n) {
            return this.b_search(arr, l, mid - 1, n);
        }
        return this.b_search(arr, mid + 1, r, n);
    }
    
    public static void main(final String[] x) {
        final int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        final int n = 1;
        final Binary_search ob = new Binary_search();
        final int i = ob.b_search(arr, 0, arr.length - 1, n);
        System.out.println("Element present at index " + i);
    }
}
