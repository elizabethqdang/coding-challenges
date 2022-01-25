// Digital graphics tools often make available a "bucket fill" tool that will only paint adjacent cells . In one fill, a modified bucket tool recolors adjacent cells (connected horizontally or vertically but not diagonally) that have the same color. Given a picture represented as a 2-dimensional array of letters representing colors, find the minimum number of fills to completely repaint the picture.

// Example
// picture= ["aabba", "aabba", "aaacb"]

// Each string represents a row of the picture and each letter represents a cell's color. The diagram below shows the 5 fills needed to repaint the picture. It takes two fills each for a and b, and one for c. The array picture is shown below.

// Function Description
// Complete the function strokesRequired in the editor below.

// strokesRequired has the following parameter(s):
//     string picture[h]:  an array of strings where each string represents one row of the picture to be painted
// Output:
//     int: the minimum number of fills required to repaint the picture

// Constraints
// h and w refer to height and width of the graph.
// 1 ≤ h ≤ 105
// 1 ≤ w ≤ 105
// 1 ≤ h*w ≤ 105
// length(picture[i]) = w (where 0 ≤ i < h)
// picture[i][j] is in the set  {'a', 'b', 'c'} (where 0 ≤ i < h and 0 ≤ j < w)

/*
 * Complete the 'strokesRequired' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY picture as parameter.
 */