<?php

// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

$X = 233614;

function solution($X) {
    // write your code in PHP5.5
    $string = strval($X);
    $array = [];

    for ($i = 1; $i < strlen($string); $i++) {
//        $left = $string[$i - 1];
//        $right = $string[$i];
        $higher_num = max([$string[$i - 1], $string[$i]]);

        $array[] = substr_replace($string, $higher_num, $i-1, 2);
    }

    return intval(min($array));
}