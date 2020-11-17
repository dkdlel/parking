export const Paths = {
    main: {
        index: '/',
        detail: '/detail',
        payment: '/payment',
        payment_complete: '/payment_complete',
        use: {
            index: '/use',
            list: '/use/list',
            detail: '/use/detail',
            cancel: '/use/cancel',
            extend: '/use/extend',
        },
        review: {
            index: '/review',
            list: '/review/list',
            write: '/review/write',
            detail: '/review/detail',
        },
        mypage: {
            index: '/mypage',
            point: '/mypage/point',
            update: {
                index: '/mypage/update',
                name: '/mypage/update/name',
                password: '/mypage/update/password',
                hp: '/mypage/update/hp',
                enrollment: '/mypage/update/enrollment',
                birthday: '/mypage/update/birthday',
                profile: '/mypage/update/profile',
            }
        },
        parking: {
            index: '/parking',
            manage: '/parking/manage',
            enrollment: {
                index: '/parking/enrollment',
                coupon: '/parking/enrollment/coupon',
                payment: '/parking/enrollment/payment'
            },
            preview: '/parking/preview',
        },
        notification: '/notification',
        coupon: '/coupon',
        event: {
            index: '/event',
            list: '/event/list',
            detail: '/event/detail',
        },
        support: '/support',
    },
    auth: {
        index: '/auth',
        login: '/auth/login',
        signin: '/auth/signin',
        signup: '/auth/signup',
        enrollment: '/auth/enrollment',
        sign_complete: '/auth/sign_complete',
        find: {
            index: '/auth/find',
            email: '/auth/find/email',
            password: '/auth/find/password',
            email_complete: '/auth/find/email_complete',
            password_complete: '/auth/find/password_complete',
        }
    },
    api: 'https://www.naver.com/'
};

export const HeaderTitle = {
    main: {
        index: '/',
        detail: '/detail',
        payment: '/payment',
        payment_complete: '/payment_complete',
        use: {
            index: '',
            list: '이용 내역',
            detail: '',
            cancel: '',
            extend: '',
        },
        review: {
            index: '/review',
            list: '내가 작성한 리뷰',
            write: '리뷰 쓰기',
            detail: '리뷰 상세보기',
        },
        mypage: {
            index: '내 정보 수정',
            point: '',
            update: {
                index: '',
                name: '이름 변경',
                password: '비밀번호 변경',
                hp: '연락처 변경',
                enrollment: '차량정보 등록',
                birthday: '생년월일 변경',
                profile: '',
            }
        },
        parking: {
            index: '',
            manage: '내 주차공간 관리',
            enrollment: {
                index: '주차공간 등록',
                coupon: '적용 쿠폰 선택',
                payment: '결제수단 선택'
            },
            preview: '/parking/preview',
        },
        notification: '알림함',
        coupon: '쿠폰',
        event: {
            index: '',
            list: '이벤트',
            detail: '이벤트',
        },
        support: '/support',
    },
    auth: {
        index: '',
        login: '',
        signin: '로그인',
        signup: '회원가입',
        enrollment: '차량번호 등록',
        sign_complete: '회원가입 완료',
        find: {
            index: '아이디/비밀번호 찾기',
            email: '아이디 찾기',
            password: '비밀번호 찾기',
            email_complete: '',
            password_complete: '비밀번호 재설정',
        }
    },
}