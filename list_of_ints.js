
//    Given a list_of_ints, find the highest_product you can get from three of the integers.
//    The input list_of_ints will always have at least three integers.

function findHighestProduct(list_of_ints) {
    // maintain three largest integers
    var highest_ints = [list_of_ints[0], list_of_ints[1], list_of_ints[2]];

    // iterate list of ints to compare integers
    for (var i = 3; i < list_of_ints.length; i++) {
        for (var j = 0; j < 3; j++) {
            var lowest_match = null;
            if (list_of_ints[i] > highest_ints[j]) {

            }
        }
    }
}