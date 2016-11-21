//    Your company built an in-house calendar tool called HiCal. You want to add
//    a feature to see the times in a day when everyone is available.
//    To do this, you’ll need to know when any team is having a meeting. In
//    HiCal, a meeting is stored as tuples ↴ of integers (start_time, end_time).
//    These integers represent the number of 30-minute blocks past 9:00am.
//
//    For example:
//
//    (2, 3) # meeting from 10:00 – 10:30 am
//    (6, 9) # meeting from 12:00 – 1:30 pm
//
//    Write a function condense_meeting_times() that takes a list of meeting
//    time ranges and returns a list of condensed ranges.
//
//    For example, given:
//
//    [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
//
//    your function would return:
//
//    [(0, 1), (3, 8), (9, 12)]
//
//    Do not assume the meetings are in order. The meeting times are coming from
//    multiple teams.
//
//    Write a solution that's efficient even when we can't put a nice upper
//    bound on the numbers representing our time ranges. Here we've simplified
//    our times down to the number of 30-minute slots past 9:00 am. But we want
//    the function to work even for very large numbers, like Unix timestamps. In
//    any case, the spirit of the challenge is to merge meetings where
//    start_time and end_time don't have an upper bound.

var data = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 8,  endTime: 10}
];

condenseMeetingTimes(data);

function condenseMeetingTimes(array) {
    // sort meeting times by start time
    var sortedArray = array.sort(sortByStartTime);
    var condensedArray = [];

    // iterate through meetings
    for (var i = 0; i < sortedArray.length-1; i++) {
        var condensedEndTime = sortedArray[i]['endTime'];
        var condensedStartTime = sortedArray[i+1]['startTime'];

        // compare the end times to each next start time
        while (condensedEndTime >= condensedStartTime) {
            var condensedTime = sortedArray[i]['startTime']
//                // overlap
//                condensedArray.push({startTime: sortedArray[i]['startTime'],
//                                     endTime: sortedArray[i+1]['endTime']});
//                i++;

            //
        }
//        else {
//                condensedArray.push(sortedArray[i]);
//            }

    }
    // consolidate condensed meeting times

    console.log(condensedArray);
}

function sortByStartTime(a, b) {
    return a['startTime'] > b['startTime'] ? 1 : -1;
}