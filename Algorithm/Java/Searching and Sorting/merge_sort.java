package array;

public class merge_sort
{
    public static void print(final int[] a) {
        for (final int i : a) {
            System.out.print(String.valueOf(i) + " ");
        }
        System.out.println();
    }
    
    public static void merge(final int[] a, final int l, final int m, final int r) {
        final int n1 = m - l + 1;
        final int n2 = r - m;
        final int[] L = new int[n1];
        final int[] R = new int[n2];
        System.arraycopy(a, l, L, 0, n1);
        System.arraycopy(a, m + 1, R, 0, n2);
        int i = 0;
        int j = 0;
        int k = l;
        while (i < n1) {
            if (j >= n2) {
                break;
            }
            if (L[i] <= R[j]) {
                a[k] = L[i];
                ++i;
            }
            else {
                a[k] = R[j];
                ++j;
            }
            ++k;
        }
        while (i < n1) {
            a[k] = L[i];
            ++i;
            ++k;
        }
        while (j < n2) {
            a[k] = R[j];
            ++j;
            ++k;
        }
    }
    
    public static void mergeSort(final int[] a, final int l, final int r) {
        if (r - l > 0) {
            final int m = l + (r - l) / 2;
            mergeSort(a, l, m);
            mergeSort(a, m + 1, r);
            merge(a, l, m, r);
        }
    }
    
    public static void main(final String[] x) {
        final int[] a = { 38, 27, 43, 3, 9, 82, 10 };
        print(a);
        mergeSort(a, 0, a.length - 1);
        print(a);
    }
}