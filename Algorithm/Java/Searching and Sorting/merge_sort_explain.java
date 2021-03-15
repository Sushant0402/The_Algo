package array;

public class merge_sort_explain {
	static void print(final int[] a) {
        for (final int i : a) {
            System.out.print(String.valueOf(i) + " ");
        }
        System.out.print("    ");
    }
    
    static void print_arr(final int[] a, final int l, final int r) {
        for (int i = l; i <= r; ++i) {
            System.out.print(String.valueOf(a[i]) + " ");
        }
        System.out.print("    ");
    }
    
    static void merge(final int[] a, final int l, final int m, final int r) {
        final int n1 = m - l + 1;
        final int n2 = r - m;
        final int[] L = new int[n1];
        final int[] R = new int[n2];
        System.arraycopy(a, l, L, 0, n1);
        System.arraycopy(a, m + 1, R, 0, n2);
        System.out.println("\nMerging these two array : \n");
        print(L);
        print(R);
        System.out.print("\n\nin main array: ");
        print(a);
        System.out.println("\n");
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
    
    static void mergeSort(final int[] a, final int l, final int r) {
        System.out.println("\nLeft Bound = " + l + ", Right Bound = " + r);
        if (r - l >= 1) {
            final int m = l + (r - l) / 2;
            System.out.println("\nArray divided at " + m);
            print_arr(a, l, m);
            print_arr(a, m + 1, r);
            System.out.println("\n____________________________________");
            mergeSort(a, l, m);
            mergeSort(a, m + 1, r);
            merge(a, l, m, r);
            print(a);
            System.out.println("\n____________________________________");
        }
    }
    
    public static void main(final String[] x) {
        final int[] a = { 38, 27, 43, 3, 9, 82, 10 };
        print(a);
        System.out.println();
        mergeSort(a, 0, a.length - 1);
    }
}
