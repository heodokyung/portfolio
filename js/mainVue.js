/**
 * [오늘 날짜]
 * @type {Array}
 */
let date = new Date(),
	year     = date.getFullYear(),
	month    = date.getMonth() + 1,
	day      = date.getDate();

if (month < 10) { month = '0' + month; }
if (day < 10)   { day = '0' + day; }
let fulldate =  year + '.' + month + '.' + day;

/**
 * [포트폴리오 List 컴포넌트]
 * @type {Array}
 */
Vue.component('portfolio-items', {
	props : ['items'],
	template :'\
		<li class="element-item">\
			<a :href="items.link">\
				<div class="ico_wrap">\
					<span class="ico new" v-if="items.new">NEW</span>\
					<span class="ico">{{ items.type }}</span>\
					<span class="ico">{{ items.leng }}</span>\
				</div>\
				<img :src="items.imgSrc" :alt="items.title" />\
				<div class="over">\
					<p class="tit">\
						<em v-html="items.title"></em>\
						<span class="date">{{ items.date }}</span>\
					</p>\
					<span class="more">자세히보기</span>\
				</div>\
			</a>\
		</li>\
	'
});

/**
 * [스킬 List 컴포넌트]
 * @type {Array}
 */

Vue.component('skill-list', {
	props : ['items'],
	template :'\
		<li>\
			<div class="front">\
				<p>{{ items.names }}</p>\
				<div class="over"><span class="tit">CLICK</span></div>\
			</div>\
			<div class="back">{{ items.details }}</div> \
		</li>\
	'
});

 /**
 * [about List 컴포넌트]
 * @type {Array}
 */


const app = new Vue({
	el: '#wrap',
	data: {
		portfolio:[
			{
				gubun : "y2018 y2019 y2020 y2021 ui w r",
				type : "Responsive",
				leng : "KOR",
				new : false,
				date : "2021.07.13 ~ "+fulldate+" ",
				link : "detail/web/w_finnq_v3.html",
				imgSrc : "img/portfolio/finnq_w.jpg",
				title : "Finnq<br />웹 React 개편",
				sch : "2018 2019 2020 2021 finnq 핀크 web responsive 반응형 웹 홈페이지 react"
			},
			{
				gubun : "y2018 y2019 y2020 y2021 ui m",
				type : "MOBILE",
				leng : "KOR",
				new : false,
				date : "2018.08.01 ~ "+fulldate+" ",
				link : "detail/mobile/m_finnq_app_v2.html",
				imgSrc : "img/portfolio/finnq_m.jpg",
				title : "Finnq<br />모바일 앱 서비스 운영",
				sch : "2018 2019 2020 2021 finnq 핀크 mobile app 앱 모바일"
			},
			{
				gubun : "y2018 y2019 y2020 y2021 ui w r",
				type : "Responsive",
				leng : "KOR",
				new : false,
				date : "2018.08.01 ~ 2021.07.12",
				link : "detail/web/w_finnq_v2.html",
				imgSrc : "img/portfolio/finnq_w.jpg",
				title : "Finnq<br />웹 서비스 2.0 운영",
				sch : "2018 2019 2020 2021 finnq 핀크 web responsive 반응형 웹 홈페이지"
			},
			{
				gubun : "y2017 p2018 ui w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2017.11.10 ~ 2018.07.31",
				link : "detail/web/w_kebhana_open.html",
				imgSrc : "img/portfolio/kebhana_w_open.jpg",
				title : "KEB 하나은행<br />기업뱅킹 고도화 구현",
				sch : "2017 2018 KEB 하나은행 기업뱅킹 hanabank web 웹 홈페이지"
			},
			{
				gubun : "y2018 ui m",
				type : "MOBILE",
				leng : "KOR",
				new : false,
				date : "2018.01.08 ~ 2018.06.29",
				link : "detail/mobile/m_hana_app.html",
				imgSrc : "img/portfolio/kebhana_m_app.jpg",
				title : "KEB 하나은행<br /> 1Q bank 기업",
				sch : "2018 KEB 하나은행 1Q hanabank 기업 mobile 모바일"
			},
			{
				gubun : "y2017 ui w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2017.08.07 ~ 2017.11.09",
				link : "detail/web/w_kebhana_company2.html",
				imgSrc : "img/portfolio/kebhana_w_com2.jpg",
				title : "KEB 하나은행<br />기업뱅킹 서비스 운영",
				sch : "2017 KEB 하나은행 1Q hanabank 기업뱅킹 운영 web 웹 홈페이지"
			},
			{
				gubun : "y2017 ui w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2017.02.27 ~ 2017.08.06",
				link : "detail/web/w_kebhana_combine.html",
				imgSrc : "img/portfolio/kebhana_w_combine.jpg",
				title : "KEB 하나은행<br /> CBS / CBS Light 통합개편",
				sch : "2017 KEB 하나은행 1Q CBS / CBS Light hanabank 통합개편 web 웹 홈페이지"
			},
			{
				gubun : "y2017 ui w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2017.01.11 ~ 2017.02.24",
				link : "detail/web/w_kebhana_company.html",
				imgSrc : "img/portfolio/kebhana_w_com.jpg",
				title : "KEB 하나은행<br />기업뱅킹 서비스 운영",
				sch : "2017 KEB 하나은행 1Q hanabank 기업뱅킹 운영 web 웹 홈페이지"
			},
			{
				gubun : "y2016 p2017 ui w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2016.06.27 ~ 2017.01.06",
				link : "detail/web/w_mirae.html",
				imgSrc : "img/portfolio/mirae_w.jpg",
				title : "미래에셋대우<br /> 채널통합 TFT 시스템",
				sch : "2016 미래에셋대우 miraeasset daewoo TFT web 웹 홈페이지"
			},
			{
				gubun : "y2016 ui w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2016.04.11 ~ 2016.06.03",
				link : "detail/web/w_kebhana.html",
				imgSrc : "img/portfolio/kebhana_w.jpg",
				title : "KEB 하나은행<br /> 웹사이트 통합개편",
				sch : "2016 KEB 하나은행 hanabank web 웹 홈페이지"
			},
			{
				gubun : "y2015 ui w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2015.08.31 ~ 2015.12.30",
				link : "detail/web/w_han.html",
				imgSrc : "img/portfolio/han_w.jpg",
				title : "한국수력원자력<br /> 웹 사이트 통합개편",
				sch : "2015 한국수력원자력 한수원 web 웹 홈페이지"
			},
			{
				gubun : "y2015 ui m",
				type : "MOBILE",
				leng : "KOR",
				new : false,
				date : "2015.08.31 ~ 2015.12.30",
				link : "detail/mobile/m_han.html",
				imgSrc : "img/portfolio/han_m.jpg",
				title : "한국수력원자력<br /> 웹 사이트 통합개편",
				sch : "2015 한국수력원자력 한수원 mobile 모바일"
			},
			{
				gubun : "y2015 ui m",
				type : "MOBILE",
				leng : "KOR",
				new : false,
				date : "2015.05.26 ~ 2015.08.14",
				link : "detail/mobile/m_tgif.html",
				imgSrc : "img/portfolio/tgif_m.jpg",
				title : "롯데리아 5개 브랜드<br /> 모바일 웹 TGI FRIDAYS",
				sch : "2015 롯데리아 moblie tgi fridays mobile 티지아이 티쥐아이"
			},
			{
				gubun : "y2015 ui m",
				type : "MOBILE",
				leng : "ENG",
				new : false,
				date : "2015.05.26 ~ 2015.08.14",
				link : "detail/mobile/m_tgif_e.html",
				imgSrc : "img/portfolio/tgif_m_e.jpg",
				title : "롯데리아 5개 브랜드<br /> 모바일 웹 TGI FRIDAYS",
				sch : "2015 롯데리아 moblie tgi fridays mobile 티지아이 티쥐아이"
			},
			{
				gubun : "y2015 ui m",
				type : "MOBILE",
				leng : "KOR",
				new : false,
				date : "2015.05.26 ~ 2015.08.14",
				link : "detail/mobile/m_angel.html",
				imgSrc : "img/portfolio/angel_m.jpg",
				title : "롯데리아 5개 브랜드<br /> 모바일 웹 엔제리너스 커피",
				sch : "2015 롯데리아 모바일 웹 엔제리너스 커피 mobile"
			},
			{
				gubun : "y2015 ui m",
				type : "MOBILE",
				leng : "ENG",
				new : false,
				date : "2015.05.26 ~ 2015.08.14",
				link : "detail/mobile/m_angel_e.html",
				imgSrc : "img/portfolio/angel_m_e.jpg",
				title : "롯데리아 5개 브랜드<br /> 모바일 웹 엔제리너스 커피",
				sch : "2015 롯데리아 모바일 웹 엔제리너스 커피 mobile angel coffee"
			},
			{
				gubun : "y2015 ui m",
				type : "MOBILE",
				leng : "KOR",
				new : false,
				date : "2015.05.26 ~ 2015.08.14",
				link : "detail/mobile/m_lotteria.html",
				imgSrc : "img/portfolio/lotteria_m.jpg",
				title : "롯데리아 5개 브랜드<br /> 모바일 웹 롯데리아",
				sch : "2015 롯데리아 모바일 웹 롯데리아 mobile lotteria"
			},
			{
				gubun : "y2015 ui m",
				type : "MOBILE",
				leng : "KOR",
				new : false,
				date : "2015.05.26 ~ 2015.08.14",
				link : "detail/mobile/m_natuur.html",
				imgSrc : "img/portfolio/natuur_m.jpg",
				title : "롯데리아 5개 브랜드<br /> 모바일 웹 나뚜루 팝",
				sch : "2015 모바일 웹 나뚜루 팝 mobile natuur"
			},
			{
				gubun : "y2015 ui m",
				type : "MOBILE",
				leng : "KOR",
				new : false,
				date : "2015.05.26 ~ 2015.08.14",
				link : "detail/mobile/m_krispy.html",
				imgSrc : "img/portfolio/krispy_m.jpg",
				title : "롯데리아 5개 브랜드<br /> 모바일 웹 구축 크리스피 크림 도넛",
				sch : "2015 모바일 크리스피 크림 도넛 mobile krispy"
			},
			{
				gubun : "y2015 ui w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2015.02.16 ~ 2015.04.22",
				link : "detail/web/w_benecol.html",
				imgSrc : "img/portfolio/benecol_w.jpg",
				title : "롯데푸드 파스퇴르 베네콜",
				sch : "2015 롯데푸드 파스퇴르 베네콜 web benecol 홈페이지 웹"
			},
			{
				gubun : "y2015 ui m",
				type : "MOBILE",
				leng : "KOR",
				new : false,
				date : "2015.01.05 ~ 2015.02.06",
				link : "detail/mobile/m_adcap.html",
				imgSrc : "img/portfolio/adcapsule_m.jpg",
				title : "애드캡슐소프트<br /> 홈페이지 개편",
				sch : "2015 애드캡슐소프트 mobile adcapsule 홈페이지 웹"
			},
			{
				gubun : "y2014 ui r",
				type : "Responsive",
				leng : "KOR",
				new : false,
				date : "2014.08.11 ~ 2014.12.26",
				link : "detail/web/w_samsung.html",
				imgSrc : "img/portfolio/samsung_stock_r.jpg",
				title : "삼성증권 홈페이지 개편",
				sch : "2014 삼성증권 responsive 홈페이지 웹 반응형"
			},
			/*{
				gubun : "y2014 ui w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2014.06.02 ~ 2014.06.27",
				link : "detail/web/w_lotte_leader.html",
				imgSrc : "img/portfolio/lotte_leader_w.jpg",
				title : "롯데 리더그룹<br />리더역량 평가 시스템",
				sch : "2014 롯데 리더그룹 리더역량 평가 시스템 web 홈페이지 웹"
			},*/
			{
				gubun : "y2014 ui m",
				type : "MOBILE",
				leng : "KOR",
				new : false,
				date : "2014.05.12 ~ 2014.05.30",
				link : "detail/mobile/m_kloudbeer.html",
				imgSrc : "img/portfolio/kloud_m.jpg",
				title : "클라우드 맥주 브랜드 사이트",
				sch : "2014 클라우드 맥주 롯데주류 mobile 모바일"
			},
			{
				gubun : "y2014 ui w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2014.03.03 ~ 2014.05.02",
				link : "detail/web/w_namdong_k.html",
				imgSrc : "img/portfolio/kosep_w_kr.jpg",
				title : "한국남동발전<br /> 인터넷 웹 서비스 개선",
				sch : "2014 한국남동발전 web 웹"
			},
			{
				gubun: "p2014 ui w",
				type: "WEB",
				leng: "ENG",
				new: false,
				date: "2014.03.03 ~ 2014.05.02",
				link: "detail/web/w_namdong_e.html",
				imgSrc: "img/portfolio/kosep_w_en.jpg",
				title: "한국남동발전<br /> 인터넷 웹 홈페이지 서비스 개선",
				sch : "2014 한국남동발전 web 웹"
			},
			{
				gubun : "y2013 dev w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2013.04.24 ~ 2013.07.31",
				link : "detail/web/w_lotte.html",
				imgSrc : "img/portfolio/lotte_w.jpg",
				title : "롯데카드 차세대 멤버스 홈페이지",
				sch : "2013 롯데카드 차세대 홈페이지 웹 web lottecard"
			},
			{
				gubun : "y2013 dev m",
				type : "MOBILE",
				leng : "KOR",
				new : false,
				date : "2013.04.24 ~ 2013.07.31",
				link : "detail/mobile/m_lotte.html",
				imgSrc : "img/portfolio/lotte_m.jpg",
				title : "롯데카드 차세대 모바일",
				sch : "2013 롯데카드 차세대 모바일 mobile lottecard"
			},
			{
				gubun : "y2013 dev w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2013.03.01 ~ 2013.03.28",
				link : "detail/web/w_dovol.html",
				imgSrc : "img/portfolio/doval_w.jpg",
				title : "청소년 자원봉사<br /> 활동정보서비스",
				sch : "2013 청소년 자원봉사 활동정보서비스 웹 web 홈페이지"
			},
			{
				gubun : "y2013 dev w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2012.10.01 ~ 2013.02.28",
				link : "detail/web/w_mofat.html",
				imgSrc : "img/portfolio/mofat_w.jpg",
				title : "외교통상부<br /> 통합문서 관리 시스템",
				sch : "2013 외교통상부 통합문서 관리 시스템 웹 web"
			},
			{
				gubun : "y2012 dev w",
				type : "WEB",
				leng : "KOR",
				new : false,
				date : "2010.04.12 ~ 2012.02.01",
				link : "detail/web/w_ramada.html",
				imgSrc : "img/portfolio/ramada_w.jpg",
				title : "Ramada HOTEL Casino<br /> 웹 사이트 운영",
				sch : "2012 Ramada hotel Casino 웹 운영 web 라마다 카지노 호텔 홈페이지"
			}
		],
		skill :[
			{
				names : "HTML5/CSS3",
				class : "html",
				details : "웹표준, 웹 접근성을 준수하고 HTML5, CSS3를 활용하여 시멘틱한 마크업을 사용합니다.",
				url : "https://www.w3schools.com/"
			},
			{
				names : "Sass",
				class : "sass",
				details : "Sass를 활용하여 CSS를 컴파일 합니다. 간결하고 재사용, 확장성이 가능한 CSS 코드를 사용하려 합니다.",
				url : "https://sass-lang.com/"
			},
			{
				names : "JavaScript",
				class : "script",
				details : "JavaScript의 ES5, ES6 문법을 활용하여 웹/앱 환경에 최적화 된 모션과 기능을 구현하도록 노력합니다.",
				url : "https://www.w3schools.com/js/"
			},
			{
				names : "jQuery",
				class : "jquery",
				details : "jQuery를 활용하여 JSON을 활용한 Ajax 데이터 핸들링 및 UI모션 기능을 구현합니다.",
				url : "https://jquery.com/"
			},
			{
				names : "Vue",
				class : "vue",
				details : "Vue를 공부중이며 현재 저의 포트폴리오 사이트도 Vue로 구현하였습니다.",
				url : "https://kr.vuejs.org/v2/guide/index.html"
			},
			{
				names : "React",
				class : "react",
				details : "React를 공부중이며 최신 트랜트를 익히려고 노력합니다.",
				url : "https://github.com/"
			},
			{
				names : "Redux",
				class : "redux",
				details : "React의 상태관리를 위해 Redux를 사용합니다.",
				url : "https://ko.redux.js.org/introduction/getting-started/"
			},
			{
				names : "Next",
				class : "next",
				details : "React의 SSR(Server Side Rendering)을 쉽게 구현할 수 있도록 Next.js를 이용했습니다.",
				url : "https://nextjs.org/"
			},
			{
				names : "Git/SVN",
				class : "git",
				details : "다수의 작업자들과 효율적으로 작업을 진행하기 위해 히스토리 관리 및 버전관리를 사용하였습니다.",
				url : "https://github.com/"
			},
			{
				names : "Zeplin",
				class : "zeplin",
				details : "디자이너와 협업을 위해 제플린을 통해 디자인을 전달받고 작업하였고 코멘트로 수정사항과 피드백을 전달하였습니다.",
				url : ""
			},
			{
				names : "Jira",
				class : "jira",
				details : "Jira를 통하여 신규서비스 및 수정사항, 히스토리를 관리하며 소스코드를 배포,수정합니다.",
				url : "https://ko.atlassian.com/software/jira"
			},
			{
				names : "Wiki\nConfluence",
				class : "wiki",
				details : "Wiki Confluence를 통해 이슈사항을 히스토리를 남겨서 모두가 확인하고 반복된 실수를 하지 않도록 공유하였습니다.",
				url : "https://ko.atlassian.com/software/confluence"
			},
			{
				names : "RedMine",
				class : "redmine",
				details : "https://www.redmine.org/",
				url : "RedMine을 통하여 프로젝트의 전체 업무 일정을 확인하고 배분하여 작업을 진행하였습니다."
			},
			{
				names : "Slack",
				class : "slack",
				details : "Slack을 통해 이슈사항을 공유하고 프로젝트별로 채널을 만들어 업무의 상황과 이슈를 공유하여 효율을 높입니다.",
				url : "https://slack.com/"
			},
			{
				names : "Sublime\nText",
				class : "sublime",
				details : "Sublime Text의 기능을 활용하여 보다 정확한 코드를 작성하고 업무의 효율을 증진시킵니다.",
				url : "https://www.sublimetext.com/"
			},
			{
				names : "VSCode",
				class : "vscode",
				details : "VSCode의 기능을 활용하여 보다 정확한 코드를 작성하고 업무의 효율을 증진시킵니다.",
				url : "https://code.visualstudio.com/"
			},
		],
		query : '',
		sort : 'all',
		total : ''
	},
	methods:{
		sortChange: function ()
		{
			let evtTagert = this.sort;
			$('#wrap.main .port__list li').css({'display' : 'block'});

			if (evtTagert == 'all') { $('#wrap.main .port__list li').css({ 'display' : 'block' }); }
			else { $('#wrap.main .port__list li').not( 'li.'+ evtTagert +'' ).css({'display' : 'none'}); }

			$('#wrap').after( '<div class="mask loading">암막효과 Layer</div>' );
			$('.mask').css({
				width : $(window).width(),
				height : $(window).height(),
				opacity : .8
			});

			setTimeout(function(){
				$('.mask').remove();
			},300);
		}, //sortChange
	}, // methods
	computed:
	{
		searching: function ()
		{
			let query = this.query.toLowerCase();

			if(query == undefined || query == "") {
				return;
			}

			return this.portfolio.filter(function (items, idx) {
				return items.sch.includes(query)
			});
		} // searching
	} // computed
});


