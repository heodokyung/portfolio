$(function(){

	// Common UI
	let windowH     = $(window).height(),
		documentH   = $(document).height(),
		easing      = 'swing';

	// 스크롤 시 메뉴 페이드
	$(window).scroll(function(event){
		menuScrollEvt();
	});

	// 포트폴이오 메뉴 리스트 자세히보기 EVENT
	function portMenuListEvt()
	{
		$(document).on('mouseenter focusin', '.port__list li', function() {
			$(this).find('.over').css({ opacity : .8 }).stop().fadeIn(250);
			$(this).find('.more').stop().animate({ bottom : '50px'}, 350, easing, function() {});
		}),
		$(document).on('mouseleave focusout', '.port__list li', function() {
			$('.port__list li .over').fadeOut(250);
			$(this).find('.more').stop().animate({ bottom : '-300%'}, 350, easing, function() {});
		}),
		$(document).on('click', '.port__list li a', function(event) {
			event.preventDefault();
			let targetPos   = Math.floor( $(this).offset().top ) - 300;
			let targetLink  =  $(this).attr('href');
			location.href   = targetLink + '?'+ targetPos +'';
		});
	}

	// 상세 화면 본 후 다시 스크롤 이동처리
	function initScroll() {
		let movePos = window.location.href.split('?')[1];
		if (movePos != null || movePos != undefined) {
			setTimeout(function(){
				$('html, body').animate({scrollTop : movePos}, 10);
			},10);
		}
	}
	initScroll();

	// layer Close
	$(document).on('click', '.layer_pop .btn_close, .layer_pop .btn_cancel', function () {
		$('#wrap').css({height : documentH}).removeClass('on');
			$('.layer_pop').remove();
			$('.mask').remove();
	});

	// 화면 스크롤 시 페이지 목록 호출 이벤트
	function menuScrollEvt()
	{
		let _num        = 700;
		let _menu1      = $('.port__list--wrap').offset().top - 500,
			_menu2      = $('.skill__list').offset().top - 500,
			_menu3      = $('.work_experience .info__wrap').offset().top - _num,
			_menu4      = $('.info__about .info__wrap').offset().top - _num,
			_scrollTop  = $(this).scrollTop();

		if (_scrollTop >= _menu1) {$('.port__list').addClass('on');}
		if (_scrollTop >= _menu2) {$('.skill__list').addClass('on');}
		if (_scrollTop >= _menu3) {$('.work_experience .info__wrap').addClass('on');}
		if (_scrollTop >= _menu4) {$('.info__about .info__wrap').addClass('on');}

		if (_scrollTop > 0 ) {
			$('#header__area').addClass('on');
			$('.main__visual').addClass('on');
		} else {
			$('#header__area').removeClass('on');
			$('.main__visual').removeClass('on');
		}
	}

	// 상단 고정 스크를 Progress
	function checksubscroll()
	{
		window.onscroll     = function() {scrollWidth()};
		function scrollWidth()
		{
			let winScroll   = document.body.scrollTop || document.documentElement.scrollTop;
			let height      = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			let scrolled    = (winScroll / height) * 100;
			document.getElementById("scrollBar").style.width = scrolled + "%";
		}
	}

	let workExp ='\
	<ul>\
		<li>\
			<dl>\
				<dt>(주)핀크(Finnq)</dt>\
				<dd>\
					<ul>\
						<li>기간 : 2018.08. ~ 재직중</li>\
						<li>소속 / 직급 : 개발 2팀 / 매니저</li>\
						<li>담당업무 : Finnq App/Web에서 제공하는 다양한 서비스 운영 및 신규 서비스 개발, 젠킨스(Jenkins)를 사용해 배포를 진행하고 있습니다.<br /> Sketch와 Zepline을 사용하여 기획자 및 디자이너와 협업을 진행하고 있으며 Jira, Wiki Confluence, Slack을 사용하여 이슈처리 대응 및 히스토리 관리를 합니다.</li>\
					</ul>\
				</dd>\
			</dl>\
		</li>\
		<li>\
			<dl>\
				<dt></dt>\
				<dd>\
					<ul>\
						<li>기간 : 2016.01. ~ 2018.07.</li>\
						<li>소속 / 직급 : 채널사업부 / 책임</li>\
						<li>담당업무 : 웹 퍼블리싱 PL, 웹 접근성 검수(웹 접근성 프로젝트 진행), 웹 표준/시멘틱 마크업, 공통 퍼블리싱 가이드 제작, 웹/모바일 퍼블리싱, 공통 UI 개발 / GUI 구현</li>\
					</ul>\
				</dd>\
			</dl>\
		</li>\
		<li>\
			<dl>\
				<dt>애드캡슐소프트</dt>\
				<dd>\
					<ul>\
						<li>기간 : 2014.02. - 2015.12.</li>\
						<li>소속 / 직급 : 퍼블리싱 그룹 / 주임</li>\
						<li>담당업무 : 웹 퍼블리싱 PL, 웹 접근성 검수(웹 접근성 프로젝트 진행), 웹 표준/시멘틱 마크업, 공통 퍼블리싱 가이드 제작, 웹/모바일 퍼블리싱, 공통 UI 개발 / GUI 구현</li>\
					</ul>\
				</dd>\
			</dl>\
		</li>\
		<li>\
			<dl>\
				<dt>토피아정보기술</dt>\
				<dd>\
					<ul>\
						<li>기간 : 2012.08. - 2013.09.</li>\
						<li>소속 / 직급 : 웹 개발팀 / 대리</li>\
						<li>담당업무 : Java 웹 개발, Jsp, Oracel, SQL, Spring, 전자정부 프레임워크 사용</li>\
					</ul>\
				</dd>\
			</dl>\
		</li>\
		<li>\
			<dl>\
				<dt>(주)에이스통상</dt>\
				<dd>\
					<ul>\
						<li>기간 : 2010.04. - 2012.02.</li>\
						<li>소속 / 직급 : 전산부 / 사원</li>\
						<li>담당업무 : Asp, RAMADA HOTEL 웹 사이트 운영</li>\
					</ul>\
				</dd>\
			</dl>\
		</li>\
	</ul>\
	';

	let infoAbout ='\
	<ul>\
		<li>\
			<dl>\
				<dt><strong>lICENSE : </strong>정보처리기사</dt>\
				<dd>\
					<ul>\
						<li>취득일 : 2015.05.08.</li>\
						<li>발행처 : 한국산업인력공단</li>\
					</ul>\
				</dd>\
			</dl>\
		</li>\
		<li>\
			<dl>\
				<dt><strong>EXPERIENCE : </strong>정보접근성 지킴이 활동</dt>\
				<dd>\
					<ul>\
						<li>기관 : 미래창조과학부</li>\
						<li>기간 : 2016.04.04. - 2016.12.31.</li>\
						<li>활동내용 : 웹 접근성 준수를 위하여 미래창조과학부에서 주관하는 웹 정보접근성지킴이 활동으로<br> 표본사이트 1000 ~ 3000의 사이트를 선별하여 웹 접근성 준수여부를 준수하였는지 확인 후<br> 보고서 작성 및 웹 접근성을 준수하도록 권고하는 활동을 하였습니다.</li>\
					</ul>\
				</dd>\
			</dl>\
		</li>\
		<li>\
			<dl>\
				<dt><strong>TRAINING : </strong>하이브리드 인터페이스 기술구현 고도화</dt>\
				<dd>\
					<ul>\
						<li>기관 : 대한상공회의소</li>\
						<li>기간 : 2015.10.17. - 2015.11.01.</li>\
						<li>교육내용 : AngularJS를 활용하여 폰 앱 구현</li>\
					</ul>\
				</dd>\
			</dl>\
		</li>\
		<li>\
			<dl>\
				<dt><strong>TRAINING : </strong>웹표준 전문가 양성과정</dt>\
				<dd>\
					<ul>\
						<li>기관 : 한국직업전문학교</li>\
						<li>기간 : 2013.10.16. - 2013.12.10.</li>\
						<li>교육내용 : HTML,CSS,jQuery,Javascript,웹접근성,크로스 브라우징에 대한 개념교육</li>\
					</ul>\
				</dd>\
			</dl>\
		</li>\
		<li>\
			<dl>\
				<dt><strong>TRAINING : </strong>멀티플렛폼 스마트 웹 & 앱 개발자 과정</dt>\
				<dd>\
					<ul>\
						<li>기관 : 중앙정보처리학원</li>\
						<li>기간 : 2012.03.15. - 2012.08.06.</li>\
						<li>교육내용 : Java,Servlet,JSP,Oracel,SQL,Struts,Spring등을 기반으로 웹 	사이트의 전반적인 구조및 데이터베이스 기능 구현</li>\
					</ul>\
				</dd>\
			</dl>\
		</li>\
		<li>\
			<dl>\
				<dt><strong>CONTACT</strong></dt>\
				<dd>\
					<ul>\
						<li><a href="mailto:limewhale@daum.net">limewhale@daum.net</a></li>\
					</ul>\
				</dd>\
			</dl>\
		</li>\
	</ul>\
	'

	// works
	$('.work_experience .step--list__guide').html(workExp);
	// info about
	$('.info__about .step--list__guide').html(infoAbout);


	// Skill List
	function skillListCardFlip()
	{
		$('.skill__list li').on('click', function(){
			let status = $(this).hasClass('on');
			if (status) { $(this).removeClass('on'); }
			else { $(this).addClass('on').siblings().removeClass('on'); }
		}),
		$(document).on('mouseenter focusin', '.skill__list li', function() {
			$(this).find('.over').stop().fadeIn(250);
		}),
		$(document).on('mouseleave focusout', '.skill__list li', function() {
			$('.skill__list li .over').fadeOut(250);
		});
	}

	portMenuListEvt();
	menuScrollEvt();
	checksubscroll();
	skillListCardFlip();

	console.log('%c UI Developer %c HEO.D.K \n 잘 부탁드립니다.', 'background-color:#222; color:#fff; font-size:23px;', 'color:#fff; font-size:22px;');

	function typingAnimate()
	{
		var target      = $('.typing--txt > ul  > li');
		var typingBool  = false;
		var typingIdx   = 0;
		var liIndex     = 0;
		var liLength    = target.length;

		// 타이핑될 텍스트를 가져온다
		var typingTxt = target.eq(liIndex).text();

		// liIndex 인덱스로 구분해 한줄씩 가져옴
		// 한글자씩 잘라 배열로만든다
		typingTxt = typingTxt.split('');

		// 타이핑이 진행되지 않았다면
		if(typingBool==false) {
			typingBool=true;
			var tyInt = setInterval(typing,100); // 반복동작
		}

		function typing()
		{
			$('.typing ul li').removeClass('on');
			$('.typing ul li').eq(liIndex).addClass('on');

			//현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.
			// 타이핑될 텍스트 길이만큼 반복
			if(typingIdx<typingTxt.length)
			{
				$('.typing ul li').eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
				typingIdx++;
			}
			else
			{
				//한문장이끝나면
				if(liIndex < liLength - 1)
				{
					//다음문장으로  가기위해 인덱스를 1증가
					liIndex++;

					//다음문장을 타이핑하기위한 셋팅
					typingIdx=0;
					typingBool = false;
					typingTxt = target.eq(liIndex).text();

					//다음문장 타이핑전 1초 쉰다
					clearInterval(tyInt);

					//타이핑종료
					setTimeout(function(){
					//1초후에 다시 타이핑 반복 시작
						tyInt = setInterval(typing,100);
					},1000);
				}
				else if(liIndex == liLength - 1)
				{
					//마지막 문장까지 써지면 반복종료
					clearInterval(tyInt);
					//1초후
					setTimeout(function(){
						//사용했던 변수 초기화
						typingBool = false;
						liIndex = 0;
						typingIdx = -0;

						//첫번째 문장으로 셋팅
						typingTxt = target.eq(liIndex).text();

					   //타이핑 결과 모두 지우기
						$('.typing ul li').html('')

						//반복시작
						tyInt = setInterval(typing,100);
					}, 1000);
				} // else if
			}// else
		} // typing
	} // typingAnimate
	typingAnimate();
});
