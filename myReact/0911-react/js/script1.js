$(function () {
	var mdwBtn = $('.modalBtn');
	var overlayOpacity = .7;
	var fadeTime = 500;

	mdwBtn.on('click', function (e) {
		e.preventDefault();

		var setMdw = $(this);
		var setHref = setMdw.attr('href');
		var setSource = $(setHref).html();
		var wdHeight = $(window).height();

		$('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">x</div><div id="contWrap">' + setSource + '</div></div>');

		$('#mdOverlay,#mdWindow').css({ display: 'block', opacity: '0' });
		// 有動畫
		// $('#mdOverlay').css({ height: wdHeight }).stop().animate({ opacity: overlayOpacity }, fadeTime);
		// $('#mdWindow').stop().animate({ opacity: '1' }, fadeTime);
		// 無動畫
		$('#mdOverlay').css({ height: wdHeight, opacity: overlayOpacity });
		$('#mdWindow').css({ opacity: '1' });


		$(window).on('resize', function () {
			var adjHeight = $(window).height();
			$('#mdOverlay').css({ height: adjHeight });
		});

		$('#mdOverlay,.mdClose').on('click', function () {
			// 有動畫
			// $('#mdWindow,#mdOverlay').stop().animate({ opacity: '0' }, fadeTime, function () {
			// 	$('#mdOverlay,#mdWindow').remove();
			// });
			// 無動畫
			$('#mdWindow,#mdOverlay').css({ opacity: '0' });
			$('#mdOverlay,#mdWindow').remove();

		});
	});
});
