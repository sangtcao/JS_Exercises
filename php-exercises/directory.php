<?php
// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

$data = 'dir1\n dir11\n dir12\n  picture.jpeg\n  dir121\n  file1.txt\ndir2\n file2.gif';

function solution($S) {
    // write your code in PHP5.5
    $array = explode('\n', $S);
    $sum = 0;
    $spaces = 0;
    $string = '/';

    foreach ($array as $line) {
        if (strpos($line, '.jpeg') || strpos($line, '.png') || strpos($line, '.gif')) {
            $spaces = substr_count($line, ' ');
        }

        if ($spaces > substr_count($line, ' ')) {
            $sum += (1 + substr_count($line, ' '));
            $spaces -= 1;
        }
    }

    return strlen($string);

}

solution($data);