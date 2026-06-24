jQuery(document).ready(function($) {
    // Restrict datepicker to only allow selections 1 day from now, up to 14 days in advance
    if ($('.telecel-datepicker').length) {
        $('.telecel-datepicker').datepicker({
            minDate: +1,
            maxDate: +14,
            beforeShowDay: $.datepicker.noWeekends // Optional: block weekends if retail stores are closed
        });
    }
});
